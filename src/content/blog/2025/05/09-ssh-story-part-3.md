---
title: 'SSH history: Part 3'
description: 'SSH history: Part 3'
pubDate: 'May 09 2025'
heroImage: '/2025/05/443480e9-baa4-4b0f-b5fe-09fd3b83636f.png'
---

## อินเทอร์เน็ตถ้าไม่มี SSH จะเป็นยังไงนะ?
ในปี 2024 เนี่ย SSH ถือว่าเป็นหนึ่งใน brand ที่คนเชื่อถือที่สุดด้าน cyber security แล้วนะ มีลูกค้าตั้งแต่บริษัทใหญ่ระดับ Fortune 500 ไปจนถึงธุรกิจขนาดเล็ก รวมถึงหลากหลายวงการเลย ทั้ง Finance, Retail, อุตสาหกรรม, ระบบโครงสร้างพื้นฐานสำคัญ, Healthcare ไปจนถึง Government

บริษัทพวกนี้รวมถึงหน่วยงานรัฐบาลจากทั่วโลก เค้าก็ใช้ SSH เป็น partner ในการแก้ปัญหาด้าน security ระดับใหญ่ ๆ กันทั้งนั้น

> “มุมมองของ SSH เรื่อง cryptography มันไม่ธรรมดาเลย”
Sam Curry พูดไว้ 
> “บริษัทนี้เขียน crypto code ได้คุณภาพสูงมาก ซึ่งในยุคที่บริษัทส่วนใหญ่ทำไม่ได้ นี่แหละที่ทำให้มันพิเศษจริง ๆ”

ส่วนตัว protocol เองก็สุดยอดเลยนะ – มันถูกใช้ในการจัดการ web server กว่าครึ่งของทั้งโลก รวมถึงเครื่อง Unix หรือ Linux แทบจะทุกเครื่อง ไม่ว่าจะอยู่ใน on-prem หรือ cloud ก็ตาม
คนที่ทำงานด้าน Information security หรือ system admin ก็ใช้ SSH ในการ config, manage, maintain, และ operate อุปกรณ์ต่าง ๆ เช่น firewall, router, switch, server ซึ่งอยู่ใน network ที่สำคัญระดับ mission-critical เป็นล้าน ๆ แห่งทั่วโลก
และจริง ๆ แล้ว SSH ก็ถูกฝังอยู่ใน solution พวก file transfer หรือ systems management อีกเพียบด้วย

พอคิดดูแล้ว ถ้าไม่มี SSH อินเทอร์เน็ตมันจะหน้าตาเป็นยังไงกันนะ?

> “เออ นั่นสิ เป็นคำถามที่ดีเลย มันคงจะต่างจากที่เห็นทุกวันนี้แบบสุด ๆ แหละ แต่จะต่างยังไง ก็ไม่มีใครรู้แน่ ๆ หรอก”
Ylönen พูดไว้ 
> “ถ้าเราไม่ได้คิด protocol นี้ขึ้นมา ก็คงมีคนอื่นที่คิดอะไรบางอย่างขึ้นมาแทน แต่จะหน้าตาเป็นยังไง – เราก็ได้แค่จินตนาการเอาเองแหละ”

## เกือบ 30 ปีแห่งการพัฒนา – ไปพร้อมกับลูกค้าและ partner ของเรา

ตลอด 28 ปีที่ผ่านมา SSH ก็ทำของเจ๋ง ๆ ด้าน cybersafety ที่ใช้งานง่าย และคุณภาพระดับท็อปให้กับลูกค้าหลากหลายกลุ่ม
แนวคิดหลักของบริษัทก็ยังเหมือนเดิมมาตลอด: **encrypt และจัดการการเข้าถึง**ของระบบ IT สำคัญ ๆ อย่าง database, application หรือ network device ทั้งหลาย

แม้ว่า product รุ่นเก๋าอย่าง **Tectia** กับ **UKM** จะยังจำเป็นในอนาคต แต่ SSH ก็ไม่ได้หยุดแค่นั้น
เราพัฒนาเครื่องมือใหม่ ๆ ที่ **รองรับอนาคต** โดยเฉพาะในยุค cloud ที่อะไร ๆ ก็ไม่ถาวรเหมือนแต่ก่อน และที่สำคัญคือไม่ควรใช้พวก digital key แบบถาวรแล้ว — เปลี่ยนมาใช้ **policy-based access control** แทน

เรื่อง encryption ในอนาคตก็ต้องเตรียมรับมือกับ quantum tech ด้วยเหมือนกัน
SSH เลยเปิดตัว **NQX** — ซอฟต์แวร์ encryption ที่ต้าน quantum ได้ เอาไว้ป้องกันข้อมูลลับที่ถูกส่งระหว่างทาง
จากนั้นก็ค่อย ๆ เอา quantum-safe algorithm ไปใส่ใน product อื่น ๆ ด้วย เพื่อให้ **ความลับระยะยาวไม่โดนเจาะ**จาก quantum computer ในอนาคต

ล่าสุดเราก็มี **Secure Collaboration 2024** มาเสริมทัพอีกตัว เอาไว้ปกป้องการสื่อสารธุรกิจที่ sensitive สุด ๆ

ตัว **SSH protocol** เองยังอยู่แน่นอน แต่ทิศทางการใช้งานมันจะเปลี่ยนไปเรื่อย ๆ — มุ่งไปทาง **key-less** และ **credential-less** มากขึ้น
ฟังดูสมเหตุสมผลดีใช่มั้ย?

เมื่อก่อนโลกยังไม่มีอะไรปลอดภัย เลยต้องมีการ **encrypt data traffic** — ก็เลยมี SSH protocol เกิดขึ้น และตามมาด้วย **Tectia** ที่กลายเป็นมาตรฐานทองคำของการส่งไฟล์แบบปลอดภัย

แต่พอใช้ไปนาน ๆ กลับกลายเป็นว่า **SSH key** ที่ใช้เข้าถึงระบบมันกลายเป็นจุดเสี่ยง เพราะใครจะสร้าง key ก็ได้ ใช้มั่วก็มี และบริษัทก็ไม่สามารถควบคุมหรือจัดการ key พวกนี้ได้
เลยมีการสร้าง **UKM** ขึ้นมา — เป็นระบบจัดการ SSH key ที่ครบเครื่องที่สุดในตลาดตอนนี้

แล้วพอโลกหมุนมาถึงยุค cloud ที่ server ต่าง ๆ มันไม่ได้อยู่ถาวร แต่ถูกสร้างมาใช้แป๊บ ๆ แล้วก็หายไป
มันก็ make sense ว่าเราควรจะมีระบบเข้าถึงที่ **on-demand** โดยไม่ต้องมี credential หรือ key ถาวร

ตรงนี้แหละที่ทำให้เกิด **PrivX** — เครื่องมือจัดการ access แบบ **passwordless** ใช้งานง่าย น้ำหนักเบา แถมยัง **คุ้มค่า (ROI ดี)** อีกต่างหาก

พวกเราที่ SSH รู้สึกภูมิใจมากกับสิ่งที่ทำมาตลอด
เรามีโอกาสได้ทำงานกับลูกค้าและเทคโนโลยีระดับโหด ๆ จากทั่วโลกตลอดเกือบ 30 ปีที่ผ่านมา
ซึ่งไม่ใช่เรื่องง่ายเลยในโลก IT ที่เปลี่ยนเร็วแบบนี้ — มันต้องใช้ทั้งความรู้ระดับสูง วัฒนธรรมองค์กรที่เน้นนวัตกรรม และความมุ่งมั่นล้วน ๆ

เราคงมาไม่ถึงตรงนี้ถ้าไม่มีลูกค้าที่คอยสนับสนุน คอย feedback และผลักดันให้เราพัฒนา product ให้ดีขึ้นเสมอ
เราก็ทำไม่ได้แน่ถ้าไม่มี partner ที่ช่วยขยายสิ่งที่เราทำออกไปไกลกว่าที่เราทำคนเดียวได้
และแน่นอน — เราไม่ใช่ SSH ที่เป็นอยู่ทุกวันนี้ ถ้าไม่มีทีมงานเจ๋ง ๆ หลายร้อยคนจากทั่วโลกที่ตั้งใจทำให้โลกนี้ปลอดภัยขึ้นทุกวัน

มาสู้ต่อกันอีก 30 ปีกับ SSH protocol, บริษัทเบื้องหลังมัน และอินเทอร์เน็ตที่ปลอดภัยยิ่งขึ้นไปอีก! 🚀

#### References
- [ssh.com](https://www.ssh.com/about/history/part-3)