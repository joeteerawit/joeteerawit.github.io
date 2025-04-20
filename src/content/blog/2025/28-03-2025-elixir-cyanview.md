---
title: 'Cyanview ยกระดับงานถ่ายทอดสด Super Bowl ด้วย Elixir'
description: 'Cyanview ยกระดับงานถ่ายทอดสด Super Bowl ด้วย Elixir'
pubDate: 'Mar 03 2025'
heroImage: '/2025/0ff58b62-7b03-4076-9960-b238826a6d0f.jpg'
draft: true
---

ในการถ่ายทอดสดระดับโลกอย่าง Super Bowl การควบคุมความสม่ำเสมอของภาพจากกล้องกว่า 200 ตัวเป็นเรื่องใหญ่ จะทำอย่างไรให้ภาพจากทุกมุมกล้องแสดงสีหญ้าเขียวเฉดเดียวกัน โทนผิวของนักกีฬาไม่ผิดเพี้ยน และทุกภาพดูกลมกลืน?

คำตอบคือการใช้ “camera shading” ซึ่งเป็นเทคนิคการปรับค่ากล้อง เช่น สี แสง ความสว่าง ฯลฯ ให้กล้องทุกตัวแสดงภาพในแนวทางเดียวกัน — และนี่คือสิ่งที่บริษัท Cyanview เชี่ยวชาญ

Cyanview คือบริษัทเล็ก ๆ จากเบลเยียม ที่พัฒนาอุปกรณ์ควบคุมกล้องสำหรับ live video broadcast โดยเฉพาะด้าน shading และความแม่นยำของภาพ ทุกมุมกล้องต้อง “เป๊ะ” ไม่ว่าจะเป็นกล้อง broadcast ขนาดใหญ่, drone, PTZ, หรือ mirrorless บน gimbal

Broadcast ที่ต้องไม่มีข้อผิดพลาด

โลกของ broadcast ไม่มีโอกาสที่สอง ทุกอย่างต้อง “work flawlessly” ตั้งแต่แรก อุปกรณ์ของ Cyanview โดยเฉพาะ Remote Control Panel (RCP) ได้กลายเป็นเครื่องมือสำคัญที่มืออาชีพเลือกใช้ในงานระดับโลก เช่น Olympics, NFL, NBA, Amazon, ESPN และแม้แต่งานแฟชั่นโชว์ที่ปารีส

สิ่งที่น่าสนใจคือ เบื้องหลังความสำเร็จนั้นมี Elixir อยู่ใน “critical path” ของระบบทั้งหมด

![ada5eb8d-7e72-4e82-a053-d6ff32a1bde4](/2025/ada5eb8d-7e72-4e82-a053-d6ff32a1bde4.jpg)

## ทำไม Cyanview เลือก Elixir?

ทีมผู้ก่อตั้ง Cyanview มีพื้นฐานด้าน embedded development เป็นหลัก และอุปกรณ์ของพวกเขาก็เต็มไปด้วย low-level C code และการใช้ FPGA เนื่องจากงานที่ต้องการ precision สูง

แต่เมื่อเป้าหมายคือการสื่อสารอุปกรณ์นับร้อยผ่าน network ที่ไม่แน่นอน Erlang VM ซึ่งอยู่เบื้องหลัง Elixir จึงตอบโจทย์อย่างยิ่ง เพราะถูกออกแบบมาเพื่อรองรับ distributed system ขนาดใหญ่

Elixir ถูกนำเข้ามาโดย Ghislain ซึ่งเป็น developer ที่ต้องพัฒนา integration กับกล้องและอุปกรณ์ video ต่าง ๆ ที่ใช้ protocol หลายแบบบน network เขาเลือก Elixir เพราะมันมีฟีเจอร์สำหรับการ encode/decode binary แบบ bit-level และช่วยให้พัฒนาได้รวดเร็ว

![33b005cc-539b-4b2a-ad57-0d51fde0ad05](/2025/33b005cc-539b-4b2a-ad57-0d51fde0ad05.jpg)
![29be0074-395c-4090-a7c5-f850bb8e2e9e](/2025/29be0074-395c-4090-a7c5-f850bb8e2e9e.jpg)
![0a5ebabe-7893-4911-83f5-4e0e7f357adf](/2025/0a5ebabe-7893-4911-83f5-4e0e7f357adf.jpg)

## เบื้องหลังระบบของ Cyanview

ระบบทั้งหมดใช้ Linux (Yocto) เป็น OS บน RCP โดย logic หลักพัฒนาใน Elixir และ C มีการใช้ MQTT เป็น protocol สำหรับสื่อสารระหว่างอุปกรณ์ โดยเฉพาะกับอุปกรณ์ที่อยู่หน้างาน เช่น RIO ซึ่งควบคุมกล้องแบบ low-latency และยังมี cloud relay สำหรับ forwarding network ports ระหว่างจุดต่าง ๆ

UI ของระบบบางส่วนใช้ Elm และบางส่วนกำลังย้ายไป Phoenix LiveView เพื่อลดภาระการดูแลหลายภาษา UI ทั้งหมดรันบน embedded Linux ที่สเปกต่ำมาก แต่ทำงานได้ลื่นไหล

ใช้งานจริงในสถานการณ์จริง

ตัวอย่างที่ชัดเจนที่สุดคือช่วง Olympics ที่จีน ทีมโปรดักชันอยู่ที่ปารีส แต่กล้อง PTZ ของ Panasonic ติดตั้งอยู่ในปักกิ่ง ซึ่ง protocol ของ Panasonic ไม่ได้ออกแบบมาสำหรับ internet และต้องการ timing ที่แม่นยำมาก ทำให้เกิด timeout และปัญหาเชื่อมต่อบ่อย

Cyanview แก้ปัญหาโดยวางอุปกรณ์ RIO ไว้ใกล้กล้อง แล้วควบคุมจากปารีสผ่าน IP ได้อย่างเสถียร — ตรงตาม design เลย

⸻

พลังของ Elixir ในงาน broadcast

การควบคุมกล้องหลายร้อยตัวด้วย protocol ที่แตกต่างกันคือสิ่งที่ Cyanview ทำได้ และ Elixir คือหัวใจสำคัญของความสามารถนี้ ด้วยความสามารถในการ recover จาก error, การจัดการ process ด้วย supervision tree และการ scale ได้ง่าย

อุปกรณ์ทั้งหมดสามารถทำงานเป็น cluster บน IP network ด้วย custom MQTT-based protocol

⸻

ทีมเล็กที่สร้าง Impact ใหญ่

Cyanview มีทีมเพียง 9 คน แต่รองรับงานระดับโลกแบบ real-time
มี Elixir developer เพียง 2 คนคือ Ghislain (integration) และ Daniil (UI + cloud) แต่สามารถพัฒนาและ maintain ระบบที่ใช้ใน Olympics, Super Bowl และอีกมากมาย

ทีม embedded คนอื่น ๆ อาจไม่ได้ใช้ Elixir โดยตรงในงานประจำวัน แต่สามารถ implement protocol ต่าง ๆ ใน Elixir ได้อย่างสบาย เพราะ architecture ของระบบถูกออกแบบมาให้ยืดหยุ่น

⸻

สร้างความเปลี่ยนแปลงในอุตสาหกรรม

จากการเปลี่ยนระบบควบคุมกล้องจาก proprietary protocol และ serial connection มาเป็น IP network ทำให้ Cyanview เปิดโลกใหม่ให้กับวงการ broadcast

ฟีเจอร์ที่ระบบรองรับนั้นโดดเด่นมาก:
• Unlimited multicam
• Tally light
• Pan & Tilt control
• Integration กับ color corrector
• Remote production แบบข้ามทวีป

แม้แต่บริษัทกล้องอย่าง Canon หรือ RED ที่ไม่มี shading remote ของตัวเอง ก็ยังแนะนำให้ลูกค้าใช้ Cyanview แทน

⸻
David Bourgeois ผู้ก่อตั้งกล่าวไว้ว่า:

“เราเลือก Elixir แล้วก็ไม่ผิดหวังเลย มันมีของดีให้มากกว่าที่เราคาดไว้ และเราเพิ่งจะรู้คุณค่าของมันเมื่อใช้งานจริง”

Cyanview วางแผนจะเติบโตอย่างค่อยเป็นค่อยไป และยังมีโปรเจกต์ cloud และ hardware ใหม่ ๆ ที่กำลังจะเปิดตัว ซึ่งแน่นอนว่า Elixir จะยังคงเป็นเทคโนโลยีหลักที่ขับเคลื่อนสิ่งเหล่านี้ต่อไป

⸻

สรุป

ในยุคที่ทีมเล็ก ๆ ต้องการ productivity สูงสุด Cyanview คือกรณีศึกษาที่ดีเยี่ยมของการใช้ Elixir ให้เกิดประโยชน์สูงสุด ไม่ใช่แค่เพื่อลด complexity ของ distributed system แต่ยังเพื่อสร้าง integration ที่เสถียรและรวดเร็ว บนโลกของการถ่ายทอดสดที่ไม่มีที่ว่างให้ความผิดพลาด

reference:
- https://elixir-lang.org/blog/2025/03/25/cyanview-elixir-case