---
title: 'Facebook รองรับ Request Billion/Sec โดยใช้ Memcached ได้อย่างไร?'
description: 'Facebook รองรับ Request Billion/Sec โดยใช้ Memcached ได้อย่างไร?'
pubDate: 'May 10 2025'
heroImage: '/2025/05/65ae96c9-5f02-4c83-a35d-d400efcda942.png'
draft: true
---

> Note: Paper นี้ public เมื่อตอนปี 2013 นะ

มีความจริงอยู่สองข้อที่เลี่ยงไม่ได้เลย ถ้าจะรัน social network ที่ใหญ่ระดับ Facebook:

**หนึ่งคือ ระบบล่มไม่ได้**  
**สองคือ ระบบช้าไม่ได้**

สองข้อนี้แหละเป็นตัวตัดสินเลยว่า คนจะอยู่ต่อใน social network ของเราหรือไม่

แค่มีคนออกไปไม่กี่คน ก็อาจส่งผลกับทั้งระบบผู้ใช้ เพราะทุกคนมันเชื่อมกันหมด คนส่วนใหญ่ก็เล่นเพราะเพื่อนหรือญาติก็เล่น ถ้าใครคนหนึ่งหลุดไปเพราะเจอปัญหา ก็อาจลากเพื่อนคนอื่น ๆ หายไปด้วยเหมือนโดมิโน

Facebook เจอปัญหานี้ตั้งแต่ช่วงแรก ๆ เพราะคนเล่นเยอะมาก ระดับที่มีคนนับล้านเข้าใช้งานจากทั่วโลกในเวลาเดียวกัน

พอเป็นแบบนี้ การออกแบบ software เลยต้องมีเงื่อนไขที่สำคัญหลายอย่าง:

- Facebook ต้องรองรับ **real-time communication**
- ต้องมีระบบที่ **aggregate content แบบ on-the-fly** ได้เลย
- ต้อง **scale** เพื่อรับ **user requests หลัก billions**
- และต้อง **เก็บข้อมูลเป็น trillions ชิ้น** ข้ามหลายประเทศ

เพื่อให้ไปถึงเป้าหมายพวกนี้ Facebook เลยเอา **Memcached** ที่เป็น open-source มาใช้งาน แล้วปรับแต่งให้มันกลายเป็น **distributed key-value store**

version ที่ปรับปรุงแล้วนี้เรียกว่า **Memcache** (ไม่มี - `d`)

โพสต์นี้เราจะพาไปดูว่า Facebook จัดการยังไงกับปัญหาในการ scale memcached ให้รองรับ **requests ระดับ billions ครั้งต่อวินาที** ได้ยังไงบ้าง

## Memcached
คือ in-memory key-value store ที่รองรับคำสั่งพื้นฐานอย่าง `set`, `get`, และ `delete`

version open-source ที่ปล่อยออกมา จะเป็น in-memory hash table สำหรับเครื่องเดียว ซึ่งทีม engineers ของ Facebook ก็หยิบ version นี้มาใช้เป็นแกนหลัก แล้วขยายมันให้กลายเป็นระบบ key-value store แบบกระจาย (distributed) ที่เรียกว่า **Memcache**

พูดง่าย ๆ ก็คือ “**Memcached**” คือ source code หรือ binary ที่รันได้จริง ส่วน “**Memcache**” คือระบบ distributed ที่อยู่เบื้องหลังมัน

จากมุม technical, Facebook ใช้ **Memcache** อยู่ 2 แบบหลัก ๆ:

## Query Cache
หน้าที่ของ query cache คือช่วยลดภาระ load จาก database ตัวหลัก (source-of-truth)

ในโหมดนี้ Facebook ใช้ Memcache แบบที่เรียกว่า **demand-filled look-aside cache** หรือบางคนอาจจะรู้จักในชื่อ **cache-aside pattern**

ลองดูจาก diagram จะเห็นว่า look-aside cache มันทำงานยังไง ทั้งฝั่งอ่าน (read) และเขียน (write)

![](/2025/05/e23db5b3-7227-440a-a452-7ceb28479475.webp)

ฝั่ง **read** จะใช้ cache แบบโหลดตามความต้องการ คือจะโหลดข้อมูลเข้า cache เฉพาะเวลาที่ client ขอเท่านั้น

ก่อนจะเสิร์ฟข้อมูลให้ client, ระบบจะเช็ค cache ก่อน ถ้ามีข้อมูลอยู่ก็จบเลย แต่ถ้าไม่มี (cache miss) client ก็จะไปดึงข้อมูลจาก database แล้วค่อยเอามาเก็บใน cache ทีหลัง

ส่วนฝั่ง **write** จะมีเทคนิคที่น่าสนใจกว่านั้นหน่อย

หลังจากที่มีการ update key บางตัวใน database, ระบบจะ **ไม่** ไป update ค่าใน cache โดยตรง แต่จะ **ลบ** ข้อมูล key นั้นออกจาก cache ไปเลย วิธีนี้เรียกว่า **cache invalidation**

การ invalidate cache entry จะช่วยให้ระบบมั่นใจได้ว่า ครั้งต่อไปที่ client ขอข้อมูลของ key นั้น  
มันจะเจอ **cache miss** และต้องไปดึงข้อมูลล่าสุดโดยตรงจาก **database**

วิธีนี้ช่วยให้ระบบคง **data consistency ระหว่าง cache กับ database** เอาไว้ได้

## Generic Cache

Facebook ใช้ **Memcache** เป็น key-value store แบบทั่วไปด้วยนะ ซึ่งทำให้ทีมต่าง ๆ ในบริษัทสามารถเอา Memcache มาเก็บพวกผลลัพธ์ที่ประมวลผลไว้ล่วงหน้า (pre-computed results) จาก algorithm พวก machine learning ที่กิน resource หนัก ๆ ได้เลย

พอเก็บไว้ใน Memcache แล้ว app อื่น ๆ ก็สามารถเข้าถึงผลลัพธ์พวกนี้ได้แบบเร็วและง่ายมาก

แนวทางนี้ช่วยให้ performance ดีขึ้น แถมยังใช้ resource ได้คุ้มค่ากว่าเดิมด้วย

## High-Level Architecture of Facebook

Facebook ออกแบบสถาปัตยกรรมระบบมาเพื่อรับมือกับ scale ที่ใหญ่มหาศาล และการใช้งานระดับทั่วโลก
ในช่วงที่เริ่มนำ **Memcached** มาใช้ สถาปัตยกรรมระดับสูงของ Facebook แบ่งออกเป็น 3 ส่วนหลัก ๆ:

## 1 - Regions

Facebook วาง server ตามจุดยุทธศาสตร์ทั่วโลก ซึ่งเรียกว่าพวก **region** โดยจะแบ่งออกเป็น 2 ประเภท:

**Primary Region**: ทำหน้าที่หลักในการรับ traffic จากผู้ใช้ และจัดการข้อมูลต่าง ๆ
**Secondary Region**: กระจายตัวอยู่ทั่วโลก เพื่อช่วยเรื่อง redundancy, load balancing และเพิ่ม performance ให้ผู้ใช้ในแต่ละพื้นที่

ไม่ว่าจะเป็น primary หรือ secondary, region ทุกอันจะมี **frontend cluster หลายชุด** และ **storage cluster หนึ่งชุด**

## 2 - Frontend Clusters

ในแต่ละ region, Facebook จะมี **frontend cluster** ไว้จัดการกับ request จากผู้ใช้ และให้บริการเนื้อหา

1 frontend cluster จะประกอบด้วย 2 ส่วนหลัก:

- **Web Servers**: จัดการ request จากผู้ใช้, render หน้าเว็บ, และส่งเนื้อหากลับไปให้ผู้ใช้
- **Memcache Servers**: ทำหน้าที่เป็น **distributed caching layer** เก็บข้อมูลที่ถูกเรียกใช้บ่อย ๆ ไว้ใน memory เพื่อให้ดึงมาใช้ได้เร็ว

Frontend cluster เหล่านี้ถูกออกแบบให้สามารถ **scale แนวนอน (horizontal scaling)** ได้ตามความต้องการ  
ถ้า traffic เพิ่ม ก็สามารถเพิ่ม web server หรือ Memcache server เข้าไปใน cluster ได้ทันที เพื่อรองรับโหลดที่มากขึ้น

### 3 - Storage Cluster

ที่ใจกลางของแต่ละ region จะมี **storage cluster** ซึ่งเป็นที่อยู่ของ **source-of-truth database** หรือก็คือฐานข้อมูลที่เก็บข้อมูลตัวจริงทั้งหมดของระบบ Facebook
storage cluster ตัวนี้ทำหน้าที่ดูแลทั้ง **data consistency**, **durability**, และ **reliability**

Facebook ใช้การ **replicate ข้อมูลข้ามหลาย region** และออกแบบระบบแบบ **primary-secondary architecture**  
ซึ่งช่วยให้ระบบมี **high availability** และสามารถ **ทนต่อความเสียหาย (fault tolerance)** ได้ดี

ในไดอะแกรมข้างล่าง (ต้นฉบับ) จะเห็นภาพรวมของ architecture นี้ได้ชัดเจน
![](/2025/05/d37d0355-7214-4deb-a48e-0dcc719cbf1f.webp)

หนึ่งในแนวคิดหลักที่ Facebook เลือกใช้คือการ **ยอมแสดงข้อมูลที่อาจจะ stale (เก่าเล็กน้อย)** ดีกว่าให้ backend รับโหลดหนักจนล่ม

แทนที่จะพยายามให้ข้อมูลทุกอย่าง consistent 100% ตลอดเวลา  
Facebook ยอมให้ผู้ใช้เห็นข้อมูลที่อาจจะยังไม่ update ใน feed บ้าง  
เพื่อแลกกับความสามารถในการรองรับ traffic จำนวนมหาศาลโดยที่ระบบยังทำงานต่อได้ ไม่พัง

เพื่อให้ architecture แบบนี้สามารถรองรับระดับ **request เป็น billions ครั้งต่อวัน** ได้จริง Facebook ต้องแก้ปัญหาใหญ่หลายด้าน เช่น:

- การจัดการ **latency และ failure ภายใน cluster**
- การจัดการ **data replication ภายใน region**
- การจัดการ **data consistency ระหว่าง region ต่าง ๆ**

ใน section ต่อไป เราจะมาดูกันว่า Facebook จัดการกับความท้าทายเหล่านี้ยังไงบ้าง

## แนวคิดที่ Facebook ใช้

Facebook มีปรัชญาหนึ่งที่สำคัญมาก คือ **ยอมให้ข้อมูล stale นิดหน่อย ดีกว่าทำให้ backend พังเพราะโหลดหนัก**

แทนที่จะพยายามให้ข้อมูลทุกอย่าง fresh และ consistent ตลอดเวลา, Facebook ยอมให้ feed ของ user อาจเห็นข้อมูลที่ไม่ update บ้าง เพื่อแลกกับการที่ระบบไม่ล่มเวลาคนเข้าเยอะ ๆ

การจะทำ architecture แบบนี้ให้รอดในระดับ **request เป็น billions ครั้งต่อวัน** ต้องแก้โจทย์ใหญ่หลายอย่าง เช่น:

- จัดการ latency กับ failure ใน cluster
- จัดการการ replicate ข้อมูลใน region เดียวกัน
- จัดการ consistency ของข้อมูลระหว่าง region ต่าง ๆ

เดี๋ยวใน section ต่อ ๆ ไป เราจะไปดูว่า Facebook จัดการกับแต่ละปัญหานี้ยังไง

## Within Cluster Challenges

ในระดับ cluster ภายใน Facebook ตั้งเป้าไว้ 3 อย่างหลัก ๆ:

- ลด latency  
- ลด load บน database  
- จัดการกับปัญหาเวลามี failure

### 1 - Reducing Latency

อย่างที่พูดไปก่อนหน้านี้ว่าในแต่ละ frontend cluster จะมี Memcached server อยู่เป็นร้อย ๆ ตัว แล้วข้อมูลก็ถูกกระจายเก็บตาม server พวกนี้ด้วยเทคนิคที่เรียกว่า **Consistent Hashing**

พูดให้เข้าใจง่าย ๆ **Consistent Hashing** คือเทคนิคที่ช่วยกระจาย key ไปตาม node ต่าง ๆ โดยที่เวลา node ใด node หนึ่งพังหรือมี node ใหม่เพิ่มเข้ามา จะไม่ต้องย้ายข้อมูลทั้งหมดใหม่ — ย้ายแค่บางส่วนพอ

ในไดอะแกรม (จากต้นฉบับ) จะเห็นว่ามีการ map key ลงไปบนวงกลม hash space แล้วแต่ละ node จะถูก assign ตำแหน่งบนวงนั้น ซึ่ง key ใด ๆ จะถูก assign ไปที่ node ที่อยู่ถัดไปในทิศตามเข็มนาฬิกา
![](/2025/05/07f092ce-0d07-4d9a-9aaf-e3b92b00a736.webp)

ใน scale ของ Facebook การ request หน้าเว็บแค่ครั้งเดียวอาจทำให้ต้องดึงข้อมูลหลายร้อยรายการจาก Memcached servers ตัวอย่างเช่น หน้า feed ที่มี post กับ comment เยอะ ๆ  

แค่ request เดียว ก็อาจทำให้ web server ต้องคุยกับ Memcached หลายตัวภายในไม่กี่มิลลิวินาที เพื่อโหลดข้อมูลทั้งหมดที่ต้องใช้

การดึงข้อมูลเยอะ ๆ แบบนี้เกิดได้ทั้งตอนที่มี **cache hit** และตอนที่เจอ **cache miss** ด้วย  
ซึ่งหมายความว่า Memcached server ตัวเดียวก็อาจกลายเป็น **bottleneck** ให้กับหลาย ๆ web server ได้เลย ส่งผลให้ latency สูงขึ้นและทำให้ user ได้ประสบการณ์ที่ช้าลง

เพื่อป้องกันปัญหาแบบนี้ Facebook เลยมีเทคนิคหลายอย่างมาช่วยลดโอกาสที่มันจะเกิด ซึ่งอธิบายไว้ในไดอะแกรม (ในต้นฉบับ)
![](/2025/05/64de4d22-5932-4fa9-b82c-cdf7c740183d.webp)

## Parallel Requests and Batching

จะเข้าใจแนวคิดของ parallel requests กับ batching ง่ายขึ้น ถ้าลองนึกภาพตามแบบนี้:

สมมุติว่าทุกครั้งที่อยากได้ของ 1 ชิ้น ต้องเดินไป supermarket ใหม่ทุกครั้ง — แค่คิดก็น่าเหนื่อยละ เสียเวลาแถมไม่คุ้มเลย  
วิธีที่ดีกว่าคือวางแผนล่วงหน้า แล้วซื้อของหลาย ๆ อย่างทีเดียวรอบเดียวจบ

Facebook ก็ใช้หลักการ optimization แบบเดียวกันกับการดึงข้อมูลใน frontend cluster

เพื่อให้ดึงข้อมูลได้มีประสิทธิภาพมากที่สุด Facebook จะสร้าง **Directed Acyclic Graph (DAG)** ที่แสดง dependency ระหว่าง data แต่ละตัว

DAG จะช่วยบอกว่า data ไหนสามารถดึงได้พร้อมกัน และ data ไหนต้องรอก่อนเพราะมี dependency

เมื่อ web server วิเคราะห์ DAG แล้ว มันก็จะรู้ว่า fetch request ไหนสามารถทำ **แบบ parallel** ได้บ้าง และ grouping เป็น batch เดียวกันได้ยังไงบ้าง เพื่อให้ดึงข้อมูลได้เร็วที่สุดและมีประสิทธิภาพที่สุด

### Using UDP

Facebook มีเทคนิคเด็ดในการ optimize การสื่อสารระหว่าง web server กับ Memcache server ด้วยการใช้ **UDP แทน TCP** สำหรับ fetch requests

อย่างที่รู้กัน UDP เป็น protocol ที่ไม่ต้องเปิด connection และเร็วกว่ามากเมื่อเทียบกับ TCP  
เพราะแบบนี้ client สามารถส่ง fetch request ไปที่ Memcache server ได้เร็วขึ้น โดยใช้ network resource น้อยลง ทำให้ latency ต่ำลง

แต่ UDP ก็มีข้อเสียคือ มัน **ไม่รับประกันว่า packet จะถูกส่งถึงแน่นอน**  
ถ้า packet หายระหว่างทาง UDP ก็จะไม่พยายามส่งซ้ำให้

Facebook เลยตั้งหลักไว้ว่า ถ้าไม่เห็น response ภายในเวลาที่กำหนด ก็ถือว่า **cache miss ไปเลย** แล้วให้ client ไปดึงข้อมูลจากแหล่งหลักแทน

ส่วน operation อย่าง **update กับ delete** ยังใช้ **TCP อยู่** เพราะมันต้องการความแน่นอนว่า packet ส่งถึงแน่และเรียงลำดับถูก ซึ่งสำคัญมากเวลาจัดการกับข้อมูลที่ต้องเปลี่ยนแปลง

ทั้งหมดนี้จะถูกจัดการผ่าน **proxy พิเศษที่ชื่อว่า `mcrouter`** ซึ่งรันอยู่บนเครื่องเดียวกับ webserver  
คิดง่าย ๆ ว่า mcrouter ทำหน้าที่เป็นคนกลาง ที่ช่วยจัดการหลายเรื่อง เช่น data serialization, compression, routing, batching และ error handling  
เดี๋ยวเราจะมาพูดถึง mcrouter แบบเต็ม ๆ ใน section ถัดไป

## 2 - Reducing Load

เป้าหมายหลักของ Memcache คือ **ลดภาระของ database** โดยลดจำนวนครั้งที่ต้องไปดึงข้อมูลจาก database จริง ๆ

การใช้ Memcache แบบ **look-aside cache** ก็ช่วยเรื่องนี้ได้เยอะมากอยู่แล้ว  
แต่ในระดับ scale ของ Facebook มันจะมีปัญหาคลาสสิกของ caching ที่โผล่มาแน่นอน 2 อย่าง:

**Stale Set** – คือ cache มีข้อมูลที่เก่าแล้ว แต่ไม่มีวิธี invalidate ง่าย ๆ  
**Thundering Herd** – เกิดเวลาเจอ cache miss แล้วมี request จำนวนมหาศาลวิ่งไปหา database พร้อมกัน

ในไดอะแกรม (จากต้นฉบับ) จะเห็นภาพชัดขึ้นว่า 2 ปัญหานี้หน้าตาเป็นยังไง

![](/2025/05/5719f9ad-dca7-4842-8588-6dcd10b56407.webp)

เพื่อรับมือกับปัญหานี้ Facebook ใช้เทคนิคที่เรียกว่า **leasing**

**Leasing** ช่วยแก้ได้ทั้ง stale set และ thundering herd ทำให้ Facebook ลด load บน database ตอนพีค ๆ จาก **17,000 queries/sec เหลือแค่ 1,300 queries/sec**

## Stale Sets

ลองนึกภาพว่า client ขอข้อมูลจาก memcache ด้วย key หนึ่ง แล้วเจอ cache miss

ในกรณีแบบนี้ client จะต้องเป็นคนไปดึงข้อมูลจาก database เอง แล้ว update เข้า memcache ด้วย เพื่อให้ request ต่อไปไม่เจอ cache miss อีก

ฟังดูโอเคใช่มั้ย แต่ในระบบที่ concurrent สูง ๆ ข้อมูลที่ client กำลังจะเซตเข้า cache อาจ **เก่าไปแล้ว** ตอนที่มันเขียนเข้าไปจริง ๆ

Facebook เลยใช้เทคนิคที่เรียกว่า **leasing** เพื่อกันปัญหานี้

เวลามี cache miss, Memcache จะออก **lease** (เป็น token แบบ 64-bit ผูกกับ key นั้น) ให้ client หนึ่งราย เพื่อให้มีสิทธิ์เซตข้อมูลกลับเข้าไปใน cache

พอ client จะเซตข้อมูล มันต้องแนบ lease token ไปด้วย Memcache ก็จะเช็คว่า token ยังใช้ได้มั้ย ถ้า key นั้นถูก invalidate ไปก่อนแล้ว Memcache จะปฏิเสธการเซต และถือว่า lease token นั้นใช้ไม่ได้อีก

ในไดอะแกรม (ของต้นฉบับ) จะเห็นภาพว่า leasing ทำงานยังไง
![](/2025/05/5634649e-3bb0-4028-ab8c-d9e0eed405bf.webp)

## Thundering Herds

Facebook ยังใช้การดัดแปลงเล็ก ๆ ของ **leasing** เพื่อแก้ปัญหา **thundering herd** ด้วย

ใน version  นี้ Memcache จะคอยควบคุมว่า key แต่ละอันจะออก lease token ได้บ่อยแค่ไหน เช่น อาจจะให้แค่ทุก 5 วินาทีต่อ key

ถ้ามี request เข้ามาหลายตัวภายใน 5 วินาทีหลังจาก token ตัวแรกถูกออก Memcache จะตอบกลับไปว่า “รอก่อนนะ” เพื่อให้ client เหล่านั้นไม่รีบยิง request เข้า database ทันที  
เพราะมีโอกาสสูงมากว่า client ที่ถือ lease อยู่จะเซตข้อมูลเข้า cache เร็ว ๆ นี้ และ client ที่รอก็จะได้ cache hit ไปเลยตอน retry

## 3 - Handling Failures

ในระบบขนาดใหญ่มหาศาลแบบ Facebook การเจอ failure เป็นเรื่องปกติมาก

พอมีผู้ใช้เป็นล้าน ๆ คน ถ้ามีปัญหาแค่ดึงข้อมูลจาก Memcache ไม่ได้ ก็อาจลาก backend พังได้ง่าย ๆ เพราะ request จะวิ่งไปที่ server backend เต็ม ๆ จนกลายเป็น **cascading failure**

### Two Levels of Failure

Facebook เจอกับ failure สองระดับหลัก ๆ เวลาใช้ Memcache:

- **Small-Scale Outages**: host จำนวนหนึ่งอาจเจอปัญหา เช่น network ล่มเฉพาะบางเครื่อง ถึงจะเป็นแค่บางจุด แต่ก็ส่งผลกับ performance ได้เหมือนกัน  
- **Widespread Outages**: ถ้าหนักกว่านั้นคือทั้ง cluster ล่ม ส่งผลกับ Memcache hosts จำนวนมาก ซึ่งกระทบกับความเสถียรของระบบแบบชัดเจนเลย

### Handling Widespread Outages

เวลา cluster ล่มแบบรุนแรง Facebook จะใช้วิธี **redirect request ไปที่ cluster อื่นแทน**  
เพื่อให้ cluster ที่เจอปัญหาได้พักจนกว่าจะกู้ระบบกลับมาได้

### Automated Remediation for Small Outages

สำหรับกรณีที่เกิด **outage ขนาดเล็ก**, Facebook ใช้ระบบ **automated remediation**  
ซึ่งสามารถตรวจเจอปัญหาระดับ host ได้อัตโนมัติ แล้วสร้าง instance ใหม่ขึ้นมาแทนตัวที่มีปัญหา

แต่การ remediate แบบนี้ **ไม่ใช่ทันทีทันใด** — อาจใช้เวลาสักพักกว่าระบบจะกลับมาเป็นปกติ  
ระหว่างนั้น backend services อาจต้องรับโหลดมหาศาล เพราะ client พยายามดึงข้อมูลจาก Memcache ที่ล่มอยู่

แนวทางทั่วไปที่มักใช้คือ **rehash key แล้วกระจายไปยัง server ที่เหลือ**

แต่ทีม engineers ของ Facebook พบว่า วิธีนี้ยังเสี่ยงต่อ **cascading failure** อยู่ดี  
ในระบบของพวกเขา key บางอันอาจกิน traffic ถึง **20% ของ request ทั้งหมดใน server เดียว**  
ถ้าย้าย key ที่มี traffic หนัก ๆ แบบนี้ไปยัง server อื่นระหว่างเกิดปัญหา มันอาจทำให้ server นั้นพังต่ออีก

เพื่อจัดการกับความเสี่ยงนี้ Facebook เลยใช้แนวทางที่เรียกว่า **Gutter machines**  
ในแต่ละ cluster จะมีการกันเครื่องไว้ประมาณ **1% ของ Memcache servers**  
ให้เป็นกลุ่มพิเศษที่เรียกว่า **Gutter pool** ซึ่งพร้อมจะเข้ามารับงานแทน Memcache ที่ล่ม

- ถ้า client ยิง request แล้วไม่ได้ response กลับมาเลย (แม้แต่ cache miss) — ระบบจะถือว่า server พัง แล้ว redirect ไปที่ **Gutter pool**
- ถ้า Gutter pool ก็ยัง cache miss, client จะไป query จาก database แล้วเอาข้อมูลใส่ไว้ใน Gutter pool
- ข้อมูลใน Gutter จะ **expire เร็วมาก** เพื่อลดความซับซ้อน ไม่ต้องมีการ invalidate ทีหลัง

แม้ว่าแนวทางนี้อาจทำให้ user เจอข้อมูลที่ stale บ้าง แต่ข้อดีคือ **backend ไม่โดน overload**  
และสำหรับ Facebook แล้ว นี่เป็น trade-off ที่ยอมรับได้เพื่อแลกกับ **availability**

ในไดอะแกรม (ต้นฉบับ) จะอธิบาย flow การทำงานของ Gutter pool ได้ชัดเจน

![](/2025/05/90f5c038-a4a6-4036-8fe6-a949d742d714.webp)

เพื่อป้องกันปัญหาแบบนี้ Facebook เลยใช้แนวทางที่เรียกว่า **Gutter machines**

ในแต่ละ cluster จะมีเครื่องสำรองไว้ประมาณ 1% ของ Memcache server ทั้งหมด เพื่อใช้เป็น Gutter pool  
Gutter จะทำหน้าที่แทน Memcache ที่ล่มในช่วงนั้น

วิธีทำงานคือ:

- ถ้า client ส่ง request แล้วไม่เจอแม้แต่ cache miss ก็ถือว่า Memcache server ล่ม แล้วยิง request ไปที่ Gutter pool แทน
- ถ้า Gutter pool ก็ไม่มีข้อมูล (cache miss) client จะไป query จาก database แล้วเอาข้อมูลมาใส่ใน Gutter pool เพื่อให้ request รอบหน้าจะได้ข้อมูลจาก cache ได้เลย
- ข้อมูลใน Gutter จะ **หมดอายุเร็ว** เพื่อลดความซับซ้อนเรื่องการ invalidate

ในไดอะแกรม (ของต้นฉบับ) จะเห็นภาพว่า Gutter pool ทำงานยังไง

แม้ว่าการใช้ Gutter อาจจะเสี่ยงให้ user เห็นข้อมูลเก่าบ้าง แต่ backend ก็ปลอดภัยจาก overload  
และ Facebook ก็ถือว่าเป็น trade-off ที่ยอมรับได้ เพื่อแลกกับ **availability**

## Region Level Challenges

ในระดับ region มีหลาย frontend cluster ที่ต้องจัดการ และหนึ่งในความท้าทายหลักคือเรื่องการทำ **Memcache invalidation** ให้ครอบคลุมทุก cluster

เวลาผู้ใช้ request ข้อมูล พวกเขาอาจถูกส่งไปที่ frontend cluster คนละอัน ขึ้นอยู่กับ load balancer  
ซึ่งผลลัพธ์คือ ข้อมูลชุดเดียวกันอาจถูก **cache ซ้ำ** อยู่ในหลาย ๆ cluster ภายใน region เดียวกัน

พูดง่าย ๆ ก็คือ key เดียวกัน อาจถูก cache อยู่ใน Memcached server หลายชุดใน region นั้น  
ดูจากไดอะแกรม (ในต้นฉบับ) จะเห็นภาพชัดขึ้น

![](/2025/05/56e9844c-451f-43d8-b713-46287ee3d94f.webp)

เช่น key “abc” กับ “xyz” ถูก cache อยู่ในหลาย frontend cluster ใน region เดียวกัน  
ถ้า key พวกนี้มีการ update ก็ต้องมีการ **invalidate พร้อมกันทุก cluster**


### Cluster Level Invalidation

การ invalidate ข้อมูลในระดับ cluster ทำได้ง่ายกว่าเยอะ  
web server ที่แก้ไขข้อมูลจะเป็นคนจัดการ invalidate cache ใน cluster นั้นเองเลย

วิธีนี้ทำให้เกิดสิ่งที่เรียกว่า **read-after-write consistency** — คือผู้ใช้ที่เพิ่ง update ข้อมูลไป พอกดโหลดใหม่ ก็จะเห็นข้อมูลใหม่ทันที  
และยังช่วยลดเวลาที่ข้อมูล stale อยู่ใน cache ด้วย

*Note*: **read-after-write consistency** หมายถึงการที่ user เห็นข้อมูลที่ตัวเองเพิ่งเปลี่ยนแปลงหลังจาก reload โดยไม่ต้องรอ

### Region Level Invalidation

แต่ถ้าเป็นระดับ region การ invalidate จะซับซ้อนขึ้นหน่อย และ webserver จะไม่รับหน้าที่นี้โดยตรง

Facebook เลยสร้างระบบที่เรียกว่า **invalidation pipeline** ขึ้นมา ซึ่งทำงานแบบนี้:

- มี daemon ตัวหนึ่งชื่อว่า **mcsqueal** ทำงานอยู่ในทุก database server ใน storage cluster
- ตัว mcsqueal จะอ่าน **commit log** แล้วดูว่ามี delete อะไรเกิดขึ้นบ้าง แล้ว broadcast คำสั่งพวกนั้นออกไปให้ Memcache ทุก cluster ใน region
- เพื่อให้เร็วขึ้น mcsqueal จะ batch คำสั่ง delete หลาย ๆ อันรวมเป็น packet ใหญ่ ๆ แล้วส่งไปให้ server ที่รัน **mcrouter**
- mcrouter จะ iterate ผ่าน delete แต่ละอันใน batch แล้ว route ไปยัง Memcache server ที่เหมาะสม

ดูไดอะแกรม (ในต้นฉบับ) จะช่วยให้เข้าใจ flow นี้มากขึ้น

![](/2025/05/d18d21ac-1bb4-4f54-bbf1-244578e7e7ad.webp)

## Challenges with Global Regions

ในระดับ Facebook ที่ต้องรองรับผู้ใช้ทั่วโลก ระบบก็ต้องมี data center หลายที่กระจายไปทั่วโลก

แต่การขยายไปหลาย region แบบนี้ก็มีปัญหาใหม่ตามมาด้วย โดยเฉพาะเรื่อง **ความสอดคล้องของข้อมูล (consistency)** ระหว่าง Memcache กับ persistent storage ใน region ต่าง ๆ

ในโครงสร้างของ Facebook, จะมี region หนึ่งเป็น **primary database**  
ส่วน region อื่น ๆ จะเป็น **read-only replica** ซึ่ง sync ข้อมูลจาก primary ผ่านระบบ replication ของ MySQL

แต่พอมี replication เข้ามา ก็ต้องเจอกับสิ่งที่เรียกว่า **replication lag** คือ replica อาจตามข้อมูลของ primary ไม่ทัน

ซึ่งพอเป็นแบบนี้ ก็จะมี case ใหญ่ ๆ 2 แบบที่ต้องพิจารณาเกี่ยวกับเรื่อง **consistency**

## Writes from the Primary Region

สมมุติว่า web server ใน primary region (เช่น US) ได้รับ request จากผู้ใช้ให้เปลี่ยนรูปโปรไฟล์

เพื่อให้ข้อมูล consistent การเปลี่ยนแปลงนี้ต้องถูก **propagate** ไปยัง region อื่นด้วย  
นั่นหมายถึง replica databases ก็ต้อง ** update **  
และ Memcache ใน secondary region ทั้งหลายก็ต้อง **invalidate**

จุดที่ยากคือการจัดการ **invalidations ให้ sync กับ replication**

ถ้าเกิดว่า invalidation มาถึง secondary region (เช่น Europe) **เร็วกว่าที่ replication  update เสร็จ** อาจทำให้เกิด race condition แบบนี้:

1. ผู้ใช้ที่อยู่ Europe พยายามดูรูปโปรไฟล์  
2. ระบบไปดึงข้อมูลจาก cache — แต่โดน invalidate ไปแล้ว  
3. เลยไปดึงจาก replica database ที่ยังไม่ sync — ได้รูปเก่า  
4. ระบบเอารูปเก่านั้นกลับมาเซตใน cache อีกครั้ง  
5. ถึงแม้ replication จะเสร็จในภายหลัง แต่ cache ดันเก็บรูปเก่าไว้แล้ว  
6. ผลคือ request ต่อ ๆ ไปจะยังได้รูปเก่าจาก cache

ในไดอะแกรม (ต้นฉบับ) จะอธิบายสถานการณ์นี้ให้ชัดเจน

![](/2025/05/aadebcb8-f2cf-4c33-9479-6b01b4d4fc68.webp)

เพื่อป้องกัน race condition แบบนี้ Facebook ใช้แนวทางให้ **storage cluster ที่ข้อมูลใหม่สุดเป็นคนส่ง invalidation** ภายใน region โดยใช้ระบบ **mcsqueal** เหมือนที่เล่าไปก่อนหน้านี้

แนวทางนี้ช่วยให้มั่นใจว่า invalidation จะไม่ถูกส่งไปยัง replica region **ก่อน** ที่ข้อมูลจะ sync เสร็จ

## Writes from the Non-Primary Region

เวลาเขียนข้อมูล (write) จาก region ที่ **ไม่ใช่ primary**, ลำดับของเหตุการณ์จะเป็นแบบนี้:

- ผู้ใช้ใน region รอง (secondary) เช่น Europe เปลี่ยนรูปโปรไฟล์  
- ถึงแม้ว่า reads จะอ่านจาก replica ได้ แต่ **writes จะถูกส่งไป primary region**  
- พอ write สำเร็จ ข้อมูลต้องถูก replicate กลับมายัง region รอง  
- ระหว่างที่ replication ยังไม่ทัน บางที read request ที่วิ่งมาที่ region รอง อาจเจอ cache miss แล้วไปดึงข้อมูลเก่าจาก database มา cache ไว้ ซึ่งไม่ update 

Facebook แก้ปัญหานี้ด้วยการใช้แนวคิดชื่อว่า **remote marker**

### Remote Marker คืออะไร

เป็นตัวบอกว่า ข้อมูลใน replica region อาจจะยัง **ไม่ update ** ถ้ามี marker นี้อยู่ — ให้ระบบไปดึงจาก primary แทน

### วิธีทำงาน:

1. เมื่อ client ส่ง request เพื่อ update  key `K`  
2. มันจะตั้ง **remote marker `R`** สำหรับ key `K` ไว้ใน replica region  
3. จากนั้นก็ส่ง write ไปที่ primary region  
4. พร้อมกับลบ key `K` ออกจาก Memcache ใน region นั้น  
5. พอมี read request เข้ามา มันจะเจอ cache miss  
6. ระบบเช็คว่า marker `R` มีอยู่มั้ย — ถ้ามี ก็ส่ง query ไปที่ primary region แทน

ในไดอะแกรม (ต้นฉบับ) จะเห็นภาพทุก step ชัดเจน

อาจมีบางคนคิดว่า แบบนี้ดู **ช้าเกินไป** เพราะต้องเช็ค cache → เช็ค marker → ค่อยยิงไป primary  
แต่ Facebook ยอมแลก **latency เพิ่มขึ้น** เพื่อให้โอกาสที่จะอ่านข้อมูล stale **ลดลงอย่างมาก**

## Single Server Optimizations

จากที่เห็น Facebook ลงทุนกับสถาปัตยกรรมใหญ่ ๆ เยอะมากเพื่อ scale Memcached  
แต่ในขณะเดียวกัน พวกเขาก็ไม่มองข้ามการ **optimize performance ของ Memcache server แบบรายตัว** ด้วย

ถึงแม้การปรับพวกนี้ดูเล็ก ๆ แต่พอเอามาคูณกับ scale ของ Facebook แล้ว มัน impact ใหญ่มาก

### Automatic Hash Table Expansion

พอมี item ใน hash table เยอะขึ้น ความเร็วในการค้นหาอาจลดลงจาก O(1) ไปเป็น O(n) ถ้า table ยังมีขนาดเท่าเดิม  
นั่นแปลว่า performance จะค่อย ๆ แย่ลง

Facebook เลยเพิ่มระบบ **ขยาย hash table อัตโนมัติ**  
พอจำนวน item เกิน threshold ที่กำหนด ระบบจะขยายขนาด table เป็น 2 เท่า เพื่อให้ lookup ยังคงเร็วเหมือนเดิมแม้ข้อมูลจะโตขึ้นเรื่อย ๆ

## Multi-Threaded Server Architecture

การรับ request จำนวนมากบน thread เดียว อาจทำให้ latency เพิ่มขึ้นและ throughput ลดลง

Facebook เลยปรับ Memcache server ให้ **รองรับ multi-thread** เพื่อสามารถจัดการ request หลาย ๆ ตัวพร้อมกันได้แบบ concurrent

### Dedicated UDP Port for Each Thread

ถ้า thread หลายตัว share UDP port เดียวกัน จะเกิด **contention** (แย่งกันใช้) ซึ่งส่งผลให้ performance แย่ลง

Facebook เลยเพิ่มระบบให้แต่ละ thread ใช้ **UDP port แยกกันคนละอัน** ทำให้แต่ละ thread ทำงานได้เต็มที่ ไม่มีแย่งกัน

### Adaptive Slab Allocator

ถ้าการจัดการ memory ทำได้ไม่ดี อาจเกิด fragmentation หรือใช้ resource ได้ไม่คุ้ม

Facebook เลยใช้เทคนิคที่เรียกว่า **Adaptive Slab Allocator** เพื่อ optimize การใช้ memory ในแต่ละ Memcache server

โดย allocator จะแบ่ง memory เป็นก้อนใหญ่ ๆ เรียกว่า **slab** ซึ่ง slab แต่ละก้อนจะถูกแบ่งย่อยออกมาอีกเป็น block ที่มีขนาดคงที่

ที่พิเศษคือ **ขนาดของ slab จะถูกปรับแบบ dynamic** ตาม pattern ของ request ที่ระบบเจอ เพื่อให้ใช้ memory ได้คุ้มค่าที่สุด

## Conclusion

การเดินทางของ Facebook ในการ scale Memcached เป็น case study ที่ดีมากสำหรับนักพัฒนาและ engineers ทุกคน  
มันโชว์ให้เห็นถึงความท้าทายของการสร้าง social network ที่กระจายอยู่ทั่วโลก ต้องรองรับข้อมูลมหาศาล และ user เป็น billions คน

จากการออกแบบและ optimize Memcache ของ Facebook เราจะเห็นเลยว่า ถ้าจะรับมือกับปัญหา **scalability** จริง ๆ  
ต้องลงมือแก้ทั้งในระดับสถาปัตยกรรมภาพรวม และระดับลึก ๆ ใน server ทุกจุดมีผลต่อ performance และ reliability ของระบบทั้งหมด

1. การยอมรับ **eventual consistency** คือหัวใจของการสร้างระบบที่เร็วและ available  
   แต่อย่าลืมว่า ทุกการตัดสินใจต้องเข้าใจ **trade-off** ให้ดี
2. **Failure เป็นเรื่องที่เลี่ยงไม่ได้** ต้องออกแบบระบบให้รับมือกับมันได้
3. การ optimize ทำได้หลายระดับ — ตั้งแต่ระบบใหญ่ยัน detail เล็ก ๆ ใน server

#### References:
- [blog.bytebytego.com](https://blog.bytebytego.com/p/how-facebook-served-billions-of-requests)
- [facebook.com](https://research.facebook.com/publications/scaling-memcache-at-facebook/)