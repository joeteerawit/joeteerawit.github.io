---
title: 'สรุป Story การ Ported Typescript ไป Golang'
description: 'สรุป Story การ Ported Typescript ไป Golang'
pubDate: 'May 10 2025'
heroImage: '/2025/05/9314ab71-f446-4b48-9b14-6f80fa54976c.png'
draft: true
---

# Microsoft ประกาศ ported  TypeScript Compiler ไป Go เพื่ออนาคตที่เร็วยิ่งขึ้น

ไม่นานมานี้ Microsoft ได้ประกาศการตัดสินใจครั้งใหญ่: **TypeScript Compiler กำลังถูก ported ไปยังภาษา Go** สร้างความฮือฮาอย่างมากในชุมชนนักพัฒนา ไม่ว่าจะบน GitHub, Reddit, Hacker News หรือ YouTube หลายคนตั้งคำถามว่าทำไมต้อง Go? ทำไมไม่ใช้ programming language ในเครือ Microsoft เองอย่าง C# หรือ programming language ยอดนิยมอย่าง Rust?

**Anders Hejlsberg** (Lead Architect ของ TypeScript และผู้สร้างภาษา C# ในตำนาน) ได้ออกมาอธิบายแนวคิดเบื้องหลังการตัดสินใจครั้งนี้อย่างละเอียด ซึ่งไม่เพียงไขข้อสงสัยเท่านั้น แต่ยังเป็นบทเรียนชั้นดีว่าการเลือก programming language ในระบบระดับองค์กร (enterprise grade) ต้องพิจารณาหลายแง่มุมกว่าที่หลายคนคิด

## ทำไมต้อง Go?

Anders อธิบายว่าเป้าหมายหลักของโปรเจกต์ที่มีชื่อรหัสว่า `Corsa` คือการ ported  ไม่ใช่การเขียนใหม่ตั้งแต่ต้น — พวกเขาต้องการย้ายโค้ด TypeScript Compiler ปัจจุบัน (ที่เขียนด้วย TypeScript เอง) ไปยัง native code โดยคง **semantic** และ **behavior** ทุกอย่างให้เหมือนเดิม

Go จึงเหมาะสมที่สุดด้วยเหตุผลดังนี้:
- เป็นภาษา native-first ที่รันบนทุกแพลตฟอร์มได้อย่างมีประสิทธิภาพ
- ควบคุม data layout ได้ดี รองรับ cyclic data structures
- มี garbage collection อัตโนมัติ
- สนับสนุน shared-memory concurrency อย่างยอดเยี่ยม
- สไตล์ของ Go (functions + data structures) ใกล้เคียงกับโครงสร้างปัจจุบันของ TypeScript Compiler ที่แทบไม่ใช้ class เลย

นอกจากนี้ Go ยังมีข้อได้เปรียบทางด้าน **memory layout** และ **bit manipulation** เช่น การจัดเก็บข้อมูลลงใน struct และใช้ integer ขนาดต่าง ๆ (byte, short int, int64) ได้อย่างมีประสิทธิภาพ ซึ่ง JavaScript ไม่สามารถทำได้เพราะตัวเลขทุกตัวเป็น floating point หมด

## แล้วทำไมไม่ C# หรือ Rust?

### C#
ถึงแม้ C# จะเป็นภาษาในเครือ Microsoft เอง แต่ Anders ชี้ว่า
- C# เป็นภาษา bytecode-first มี Ahead-Of-Time Compilation เฉพาะบางแพลตฟอร์ม
- การย้ายไป C# จะบังคับให้เปลี่ยน paradigm เป็น OOP (Object-Oriented Programming) เต็มรูปแบบ ซึ่งต่างจากสไตล์เดิมของ TypeScript Compiler
- Go จึงมี `แรงเสียดทาน` น้อยกว่าสำหรับการ ported 

### Rust
ในขณะที่ Rust ก็ได้รับการพิจารณาอย่างจริงจังเช่นกัน Ryan Cavanaugh (หัวหน้าทีมพัฒนา) เปิดเผยว่าทีมลอง prototype หลายแบบแล้ว แต่พบว่า:
- Rust ไม่เหมาะกับ codebase ที่มี cyclic data structures หนาแน่น เพราะ Borrow Checker ของ Rust อนุญาตให้ทำแบบนั้นได้ยาก
- ถ้าจะทำให้ Rust  ported ได้ ต้องเขียน unsafe code เยอะมาก หรือไม่ก็ต้องทำ garbage collection เอง ซึ่งขัดกับเป้าหมายที่อยากให้การ ported ง่ายที่สุด
- ในขณะที่ Go แม้จะไม่ได้ออกแบบมาเพื่อ ` ported จาก JavaScript` แต่ในทางปฏิบัติก็ทำได้ค่อนข้างดี

สุดท้าย Go จึง `ได้คะแนนรวมดีที่สุด` เมื่อพิจารณาหลายปัจจัยพร้อมกัน

## Project Corsa:  ported  ไม่เขียนใหม่

สิ่งสำคัญที่ Anders เน้นย้ำคือ นี่ไม่ใช่การเขียนใหม่ (rewrite)  
**แต่เป็นการย้ายโค้ดทีละไฟล์ ทีละฟังก์ชัน อย่างระมัดระวัง**  
เป้าหมายคือให้ Compiler ใหม่สามารถ:
- ใช้งานได้เหมือนเดิม
- ตรวจสอบ error แบบเดียวกับของเดิม
- รองรับฟีเจอร์ทั้งหมดที่มีอยู่แล้ว
- และสำคัญที่สุด: เร็วขึ้นอย่างมีนัยสำคัญ

จากการทดสอบเบื้องต้น ทีมสามารถทำให้การ compile Visual Studio Code (~1.5 ล้านบรรทัด) ใช้เวลาเพียง **5 วินาที** เทียบกับ Compiler ปัจจุบันที่ใช้เวลามากกว่าหนึ่งนาที — **เร็วขึ้นมากกว่า 10 เท่า**

นอกจากนี้ Memory Consumption ยังลดลงเหลือ **ประมาณครึ่งหนึ่ง** ของเวอร์ชันเก่าอีกด้วย

## ความท้าทายเบื้องหลัง

แน่นอนว่าเส้นทางนี้ไม่ได้ราบรื่น:
- ต้องจัดการการเรียงลำดับ type union ให้ deterministic เพราะ concurrency ทำให้ลำดับไม่คงที่
- ต้องวางแผน API ใหม่สำหรับเชื่อมต่อกับระบบภายนอกแทนการเรียก function ตรงแบบ JavaScript เดิม
- ต้องคิดวิธีเชื่อมต่อกับเครื่องมือและ library ใน ecosystem เดิม เช่น ESLint, Prettier, และ VS Code extensions
- ต้องวางแผนการ transition ที่ปลอดภัย โดยยังคง maintain codebase ปัจจุบัน (Strada) ไปอีกอย่างน้อย 2 ปี

โชคดีที่ TypeScript Compiler ถูกออกแบบมาในลักษณะ functional-immutable ตั้งแต่ต้น จึงเหมาะกับการเพิ่ม concurrency อย่างยิ่ง การทำ parallel parsing และ parallel checking สามารถเร่งความเร็วขึ้นได้อีกหลายเท่า

## อนาคตใหม่ของ TypeScript

การย้ายไป Go เปิดประตูสู่นวัตกรรมใหม่ ๆ ที่แต่ก่อนทำไม่ได้ เช่น
- การผนวกกับ LLM หรือ AI agent ที่สามารถเรียก TypeChecker แบบ real-time
- การตรวจสอบ semantic correctness ของโค้ดที่ AI สร้างขึ้น
- การลดเวลา project loading และ language service initialization ลงจากนาทีเหลือเพียงวินาที

Hejlsberg บอกอย่างชัดเจนว่า:
> เราไม่ได้เลือก Go เพราะมันแฟนซี แต่เพราะมันเหมาะสมทางวิศวกรรม และช่วยให้เราส่งมอบอนาคตที่เร็วกว่าหลายเท่าได้จริง

## สรุป

การตัดสินใจ ported  TypeScript Compiler ไป Go เป็นก้าวกระโดดที่น่าจับตามองที่สุดครั้งหนึ่งในประวัติศาสตร์ของโครงการ นี่ไม่ใช่แค่การเปลี่ยนภาษา แต่เป็นการวางรากฐานใหม่เพื่อตอบโจทย์โลกที่กำลังเปลี่ยนแปลง — ทั้งในด้าน size ของ project, performance , และการใช้งานร่วมกับ AI ในอนาคต

Microsoft แสดงให้เห็นว่า ในโลกของการพัฒนาซอฟต์แวร์ `การเลือกเครื่องมือที่เหมาะสม` สำคัญกว่าความยึดติดกับ brand หรือ technology ที่คุ้นเคยเสมอ

> You can't argue with a 10x outcome. — Anders Hejlsberg

#### References:
- [youtube.com](https://www.youtube.com/watch?v=pNlq-EVld70)
- [youtube.com](https://www.youtube.com/watch?v=10qowKUW82U)
