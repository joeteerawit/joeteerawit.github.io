---
title: '2. Compilation and Go Runtime'
description: '2. Compilation and Go Runtime'
pubDate: 'Apr 27 2025'
heroImage: '/books/functional-programming-in-js-with-categories/5f58c4b0-71d0-4983-87e0-8d30dbdf9e5e.jpg'
---

# Compilation and Go Runtime

โพสต์นี้มีการ walkthrough source code เยอะมาก ดังนั้นการเข้าใจเบื้องต้นว่า Go ทำงานยังไงตั้งแต่ compile จนถึงรัน จะช่วยให้ตามทันมากขึ้น  
เวลาที่ Go program ถูก build มันจะมี 3 ขั้นตอนหลัก ๆ:

**Compilation**: ไฟล์ Go (*.go) จะถูก compile ให้กลายเป็น assembly (*.s)  
**Assembling**: ไฟล์ assembly (*.s) จะถูก assemble ให้เป็น object file (*.o)  
**Linking**: ไฟล์ object (*.o) หลาย ๆ ตัวจะถูก link รวมกันกลายเป็น executable binary ตัวเดียว

![](/tutorial/go-scheduler/4cb2ef2d-a101-4bb8-a81c-b4c11807e8f5.png)

เพื่อจะเข้าใจ **Go scheduler**, คุณต้องเข้าใจ **Go runtime** ก่อน

Go runtime คือ core ของภาษา Go ที่ให้ความสามารถสำคัญ ๆ อย่างเช่น scheduling, memory management และ data structures  
จริง ๆ แล้วมันก็คือ collection ของฟังก์ชันกับ data structure ที่ทำให้ Go ทำงานได้

Implementation ของ Go runtime อยู่ใน package ที่ชื่อว่า `runtime`  
Go runtime เขียนด้วย Go ผสมกับ assembly โดยส่วนที่เป็น assembly จะใช้กับงานระดับล่างมาก ๆ เช่น register manipulation

![](/tutorial/go-scheduler/a05b1b1a-5bb8-4b4c-a287-39a7caa6c58e.png)

ตอน compile, Go compiler จะ **แทนที่** keyword และ built-in function บางตัว ด้วย function call จาก Go runtime  
เช่น keyword `go` ที่เอาไว้สร้าง goroutine ใหม่ จะถูกแทนที่ด้วย `runtime.newproc()`  
หรือ function `new` ที่เอาไว้ allocate object ใหม่ จะถูกแทนที่ด้วย `runtime.newobject()`

คุณอาจจะแปลกใจว่า บางฟังก์ชันใน Go runtime ไม่มี implementation เป็น Go code เลย  
อย่างเช่น `getg` ที่ compiler รู้จักและจะถูกแทนด้วย assembly code ตอน compile  
ส่วนฟังก์ชันอย่าง `gogo` เป็น platform-specific และเขียนด้วย assembly ล้วน ๆ

Go linker จะรับหน้าที่ **เชื่อม** ระหว่าง Go declaration กับ assembly implementation ให้เอง

ในบางกรณี ฟังก์ชันอาจดูเหมือนไม่มี implementation ใน package ของมัน  
แต่จริง ๆ แล้วมันถูก link ไปยัง Go runtime ผ่าน directive ที่ชื่อว่า `//go:linkname`

เช่นฟังก์ชันที่ใช้บ่อยอย่าง `time.Sleep` จริง ๆ แล้ว link ไปยัง implementation ที่ runtime.timeSleep
