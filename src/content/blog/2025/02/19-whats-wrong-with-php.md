---
title: 'ทำไมคนด่า PHP จังว่ะ??'
description: 'ทำไมคนด่า PHP จังว่ะ??'
pubDate: 'Feb 19 2025'
heroImage: '/2025/02/b1be73de-35d1-4284-b79e-ad612cf52d73.png'
---
ลองมาอ่านเรื่องราวที่น่าสนใจเกี่ยวกับ PHP หน่อยครับ ว่ามันกากเหมือนที่ได้ยิน ได้ฟัง ได้อ่านมาหรือป่าว

## เรื่องราวของบิลลี่และ PHP
มีบริษัทแห่งหนึ่งจ้างนักศึกษาฝึกงานชื่อบิลลี่ บิลลี่นั่งๆ อยู่ไม่มีอะไรทำมากนักเพราะเป็นแค่นักศึกษาฝึกงาน และบริษัทก็ไม่รู้จะให้เขาทำอะไร เขาจึงได้แต่สังเกตการณ์ไปวันๆ

ระหว่างนั้น เขาสังเกตเห็นว่าบริษัทมีระบบจัดการสินค้าคงคลังที่แปลกประหลาดมาก มันเป็นเพียงแค่ไฟล์ Excel ประมาณสิบกว่าไฟล์ที่กระจัดกระจายไปทั่ว เวลาใครต้องการจัดการเรื่องสินค้าคงคลัง ก็ต้องเปิดไฟล์ Excel เฉพาะเรื่องขึ้นมากรอก มันยุ่งยากมาก

และพอถึงสิ้นเดือน ต้องใช้คนสองสามคนมารวบรวม spreadsheet พวกนี้และสร้างรายงาน กินเวลาสองสามวันทุกเดือน มันเป็นความวุ่นวายอย่างแท้จริง

บิลลี่จึงคิดว่า ทำไมพวกเขาไม่มีฐานข้อมูลกลางและหน้าเว็บเล็กๆ สำหรับจัดการเรื่องพวกนี้ทั้งหมด? เขาจึงเริ่มลงมือทำอะไรสักอย่าง ...

## โซลูชันของบิลลี่ - Billy’s PHP Solution
ความจริงแล้ว บิลลี่ไม่ได้รู้ว่ากำลังทำอะไรอยู่ เขาไม่ใช่โปรแกรมเมอร์ แต่เขาดูวิดีโอสอน PHP มาบ้าง และรู้มากพอที่จะเริ่มทำอะไรที่อาจสร้างปัญหาในอนาคตได้

เขาเริ่มสร้างระบบขึ้นมา - ทั้งฐานข้อมูลเล็กๆ, หน้าเว็บอินเตอร์เฟซ, เริ่มประกอบทุกอย่างเข้าด้วยกัน สร้างรายงานสองสามแบบที่แค่กดปุ่มตอนสิ้นเดือนแล้วระบบจะประมวลผลและสร้างรายงานออกมาให้ ... ดูดีทีเดียว

เมื่อบิลลี่โชว์ให้หัวหน้าดู หัวหน้าตื่นเต้นมาก
"เยี่ยมมาก! เราต้องการแบบนี้มาหลายปีแล้ว! ขอบคุณมากบิลลี่! แต่ช่วยเพิ่มรายงานพวกนี้ได้ไหม?"

บิลลี่ตอบว่า "ไม่มีปัญหา"

เขาเปิดโค้ดขึ้นมา โค้ดมีแค่สี่ห้าหน้า ไม่ได้แย่ แต่ค่อนข้างรก ไม่ได้จัด indent ให้ถูกต้องเพราะเขาไม่รู้ว่าควรทำยังไง เว้นบรรทัดเดียวทั้งหมด อ่านยากนิดหน่อย และไม่มี comments เลย แต่บิลลี่อ่านออกเพราะเขาเพิ่งเขียนมันเองกับมือ

## การเติบโตและปัญหา - The Growth and the Problem
ผ่านไปสองสามเดือน ทุกคนใช้ระบบนี้ และมันก็ทำงานได้ดี แต่แล้วก็มีคนพูดขึ้นว่า

"รู้ไหม? เราต้องการรายงานแบบนี้และแบบนี้ด้วย แล้วก็รายงานนี้ด้วยนะ"

บิลลี่ตอบเหมือนเดิม "ไม่มีปัญหา"
บิลลี่เริ่มเขียนโค้ดเพิ่ม
โค้ดขยายจากห้าหกหน้าเป็นเก้าสิบหน้า

......แต่ก็ยังไหว เขาคิดว่าเขารู้ว่ากำลังทำอะไรอยู่
แผนกอื่นได้ยินเรื่องนี้ พวกเขาบอก

"เฮ้ เราขอใช้ระบบนี้ด้วยได้ไหม?"

"ไม่มีปัญหา" บิลลี่ตอบเช่นเคย

ตอนนี้โค้ดมี 20-30 หน้าแล้ว มันเริ่มอ่านยากขึ้นเรื่อยๆ\
ผ่านไปอีกสองสามสัปดาห์ มีคนขอเพิ่มรายงานอีกไม่กี่อัน จู่ๆ โค้ดก็พองขึ้นเป็น 40-50 หน้า

## บิลลี่ออกจากบริษัท
บิลลี่รู้ว่าเขาทำผลงานได้ดีมาก หัวหน้าชอบมาก เขาเอาประสบการณ์นี้ไปใส่ใน resume
ภายใน 30 วินาที เขาได้ข้อเสนองานจากบริษัทอื่นครึ่งโหลที่ให้เงินเดือนเป็นสองเท่าหรือสามเท่าของเงินเดือนนักศึกษาฝึกงาน

> ............บิลลี่ลาออก.............

หนึ่งปีผ่านไป บริษัทได้รับแจ้งจากผู้ผลิต:
"เรากำลังอัปเดตรหัสสินค้าคงคลัง แค่แจ้งให้ทราบนะ"
บริษัทตกใจ
"แย่แล้ว ระบบของบิลลี่จะใช้กับรหัสสินค้าใหม่พวกนี้ไม่ได้ เราต้องอัปเดตมัน บ็อบ นายเป็นโปรแกรมเมอร์อาวุโส (senior programmer) ของเรา ช่วยจัดการหน่อย"
บ็อบเปิดโค้ดของบิลลี่ 40 หน้า ไม่มี comments เลยสักบรรทัด เขารู้สึกจะอ้วก
บ็อบส่ายหัวและพูดว่า "PHP..." 😂😂

## PHP แย่จริงหรือ?
บ็อบคิดว่าแย่ และโปรแกรมเมอร์ตัวจริง (real programmer) คนอื่นๆ ก็คิดเช่นนั้น เพราะพวกเขาต้องมาเจอกับโค้ดจากคนที่ไม่รู้จริงๆ ว่ากำลังทำอะไรอยู่
แต่ PHP ก็แค่เครื่องมือ เหมือนค้อน ถ้าคุณเอาค้อนไปทุบหัวใคร คนโง่คือคุณ ไม่ใช่ความผิดของค้อน

บทสรุป: ???

#### References
- [dev.to](https://dev.to/web_dev-usman/whats-wrong-with-php-why-developers-hate-it-48jn)