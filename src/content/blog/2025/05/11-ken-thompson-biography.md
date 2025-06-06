---
title: 'Ken Thompson: ตำนานผู้สร้าง Unix'
description: 'Ken Thompson: ตำนานผู้สร้าง Unix'
pubDate: 'May 11 2025'
heroImage: '/2025/05/631ebdc9-4868-4295-9424-477fcade9b8f.png'
---

![96f6b7f5-68bf-4f3b-b779-421543529b0f](/2025/05/96f6b7f5-68bf-4f3b-b779-421543529b0f.png)

Ken Thompson เกิดเมื่อวันที่ 4 กุมภาพันธ์ ค.ศ. 1943 ที่เมือง New Orleans รัฐ Louisiana สหรัฐอเมริกา ตั้งแต่วัยเยาว์เขาแสดงให้เห็นถึงความสามารถด้านเทคโนโลยี ซึ่งนำไปสู่การศึกษาต่อในสาขา Electrical Engineering and Computer Science ที่ University of California, Berkeley และจบการศึกษาระดับปริญญาโทในปี 1966

หลังเรียนจบ Thompson เข้าทำงานที่ Bell Labs ซึ่งเป็นแหล่งรวมของนักวิจัยหัวก้าวหน้าในยุคนั้น ที่นั่นเขามีส่วนร่วมในโครงการ Multics ซึ่งตั้งใจจะเป็นระบบปฏิบัติการแห่งอนาคต แต่ด้วยความซับซ้อนและปัญหาด้านการจัดการ โปรเจกต์นี้จึงถูกยกเลิกในปี 1969 Thompson ไม่ยอมแพ้ เขานำแนวคิดบางส่วนจาก Multics มาสร้างระบบปฏิบัติการใหม่ที่เน้นความเรียบง่ายและใช้งานได้จริง เขาร่วมมือกับ Dennis Ritchie พัฒนา **Unix** บนเครื่อง PDP-7 ด้วยภาษา Assembly และยังสร้าง Unix shell รุ่นแรกขึ้นในปีเดียวกัน

Thompson ยังได้ออกแบบภาษาโปรแกรมใหม่ชื่อ **B** ซึ่งต่อมาเป็นรากฐานของภาษา **C** ที่ Dennis Ritchie พัฒนาต่อ และกลายเป็นภาษาหลักของโลกการเขียนโปรแกรมมาจนถึงปัจจุบัน

ในปี 1971 เขาและทีมงานได้ย้าย Unix ไปยังเครื่อง PDP-11 ซึ่งมีขีดความสามารถสูงขึ้น ช่วยให้ Unix เริ่มได้รับความนิยมในวงการวิชาการและอุตสาหกรรมมากขึ้น

ปี 1973 ถือเป็นจุดเปลี่ยนของ Unix อย่างแท้จริง เมื่อ Thompson และ Ritchie เขียน Unix ใหม่ทั้งหมดโดยใช้ภาษา C ซึ่งทำให้ Unix สามารถ **port** ไปยัง hardware อื่น ๆ ได้ง่าย กลายเป็นระบบปฏิบัติการที่ "ยืดหยุ่น" และ "พกพาได้" มากที่สุดในเวลานั้น Thompson ยังได้เผยแพร่บทความวิชาการเรื่อง *The UNIX Time-Sharing System* ที่อธิบายหลักการออกแบบของ Unix ไว้อย่างละเอียด

ช่วงกลางยุค 1970s Unix เริ่มถูกเผยแพร่ไปยังมหาวิทยาลัยต่าง ๆ โดยเฉพาะ University of California, Berkeley ซึ่งต่อมาได้พัฒนา **BSD (Berkeley Software Distribution)** ซึ่งต่อยอดเป็นระบบที่พัฒนามาจาก Unix (Unix derivatives) และมีอิทธิพลอย่างลึกซึ้งต่อระบบปฏิบัติการสมัยใหม่ เช่น Linux และ macOS

ปี 1979 Thompson ได้ตีพิมพ์บทความในตำนานชื่อ *Reflections on Trusting Trust* ซึ่งเป็นบทวิเคราะห์ด้าน compiler security โดยแสดงให้เห็นว่าการฝัง backdoor เข้าไปใน compiler สามารถทำให้ software ดูปลอดภัยจาก source code แต่จริง ๆ แล้วอาจไม่ใช่ ความคิดนี้กลายเป็นหลักการสำคัญในวงการ cybersecurity ที่ยังถูกอ้างอิงถึงทุกวันนี้

ปี 1983 Thompson และ Ritchie ได้รับรางวัล **Turing Award** ซึ่งเปรียบได้กับรางวัลโนเบลของวงการ Computer Science จากผลงานการพัฒนา Unix และทฤษฎีระบบปฏิบัติการสมัยใหม่

เมื่อเข้าสู่ยุค 1990 Thompson ยังคงเดินหน้าค้นหาแนวทางใหม่ในการออกแบบระบบปฏิบัติการ เขาเริ่มโครงการ **Plan 9 from Bell Labs** ในปี 1992 ซึ่งเป็นระบบแบบ distributed ที่มีเป้าหมายเพื่อปรับปรุงทุกแง่มุมของ Unix ให้ดียิ่งขึ้น ทั้งเรื่อง namespace, file system, และ network transparency แม้จะไม่ประสบความสำเร็จในเชิงการใช้งานจริง แต่แนวคิดจาก Plan 9 ก็ถูกนำไปใช้ในหลายเทคโนโลยีภายหลัง เช่น Linux namespace และ containerization

ในปี 1995 Thompson ยังได้ร่วมสร้างระบบปฏิบัติการอีกตัวชื่อ **Inferno** ซึ่งออกแบบมาสำหรับ embedded systems และ networked devices โดยใช้ภาษาโปรแกรมที่ชื่อว่า **Limbo**

หลังจากสร้างผลงานมายาวนาน เขาเกษียณจาก Bell Labs ในปี 2000 แต่ไม่ได้หายไปจากวงการ ในปี 2006 เขาเข้าร่วมทีม Google และมีส่วนร่วมในการออกแบบแนวคิดของภาษาโปรแกรม **Go (Golang)** โดยเน้นความเรียบง่าย ประสิทธิภาพ และความสามารถในการทำ concurrent programming

ในปี 2011 Thompson ได้รับรางวัล **Japan Prize** ในสาขา Information and Communications Technology จากผลงานที่มีอิทธิพลยาวนานต่อโครงสร้างของอินเทอร์เน็ตและระบบคอมพิวเตอร์สมัยใหม่

แม้ว่าเขาจะไม่ใช่นักเทคโนโลยีที่เป็นที่รู้จักในวงกว้างเท่ากับบางชื่อในยุคหลัง แต่ผลงานของ Ken Thompson ได้กลายเป็นรากฐานของเทคโนโลยีที่เราทุกคนใช้ในชีวิตประจำวัน ไม่ว่าจะเป็น Unix, ภาษา C, Linux, macOS, หรือแม้แต่โทรศัพท์มือถือ Android ที่มีรากมาจากแนวคิดของเขา
