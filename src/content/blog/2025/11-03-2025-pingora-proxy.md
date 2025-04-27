---
title: 'Pingora: Proxy ใหม่ของ Cloudflare ที่เร็วขึ้น ประหยัดขึ้น และปลอดภัยขึ้น 🚀'
description: 'Pingora: Proxy ใหม่ของ Cloudflare ที่เร็วขึ้น ประหยัดขึ้น และปลอดภัยขึ้น 🚀'
pubDate: 'Mar 11 2025'
heroImage: '/2025/ab7f34d7-0d30-4546-9fb0-d9c171a1fc3f.jpg'
---

## Cloudflare ใช้ Rust สร้าง Proxy ที่ดีกว่าเดิม

Pingora เป็น HTTP Proxy ตัวใหม่ ที่ทีม Cloudflare สร้างขึ้นเองโดยใช้ Rust ปัจจุบันมันรองรับการประมวลผลมากกว่า 1 ล้านล้าน requests ต่อวัน และ ใช้ CPU และ memory เพียง 1/3 ของ Proxy เดิม

ก่อนหน้านี้ Cloudflare ใช้ NGINX เป็น Proxy หลัก ซึ่งเป็นเครื่องมือที่ยอดเยี่ยม แต่เมื่อบริษัทเติบโตขึ้น ก็เริ่มเจอกับ ข้อจำกัดด้านประสิทธิภาพ และ ฟีเจอร์ไม่ตอบโจทย์ระบบที่ซับซ้อน ของ Cloudflare อีกต่อไป

ดังนั้น เขาจึงตัดสินใจสร้าง Proxy เองซะเลย

## ทำไมต้องสร้าง Proxy ใหม่?
### ปัญหาของ NGINX

1️⃣ การจัดการ CPU และ Load Balancing ไม่ดีพอ
- NGINX ใช้โครงสร้าง worker-process model ที่ทำให้แต่ละ request ถูกประมวลผลโดย worker ตัวเดียว
- ถ้ามี requests ที่ต้องใช้ CPU หนักหรือทำ I/O นาน ๆ ก็จะทำให้ worker ตัวนั้นช้า และส่งผลกระทบต่อ requests อื่น ๆ

2️⃣ การใช้ Connection Pool ไม่มีประสิทธิภาพ
- NGINX มี connection pool แยกกันในแต่ละ worker
- เมื่อ Cloudflare เพิ่ม worker เพื่อรองรับ traffic ที่มากขึ้น กลับทำให้ reuse connections น้อยลง และทำให้ TTFB (Time-to-First-Byte) ช้าลง

3️⃣ เพิ่มฟีเจอร์ใหม่ ๆ ได้ยาก
- Cloudflare ไม่ได้เป็นแค่ Load Balancer หรือ Web Server แต่ต้องการ Proxy ที่ รองรับฟีเจอร์ที่ซับซ้อน เช่น failover, retry, custom headers
- NGINX เขียนด้วย C ซึ่งมีปัญหาเรื่อง memory safety และ ทำให้เกิดบั๊กยากต่อการแก้ไข

### Cloudflare เลือก Rust และสร้าง Pingora

ทำไมต้อง Rust?

🔹 Memory Safe → ลดปัญหา memory leak และ crash
🔹 Performance ดีเท่า C → แต่ปลอดภัยกว่า
🔹 Multithreading ดีเยี่ยม → แชร์ connection pool ได้ง่าย

### โครงสร้างของ Pingora

- ใช้ Rust → เพื่อให้ได้ performance สูงสุดโดยไม่ต้องกังวลเรื่อง memory safety
- พัฒนา HTTP Library เอง → เพื่อรองรับ traffic ที่ไม่เป็นไปตามมาตรฐาน RFC
- ใช้ Multithreading แทน Multiprocessing → เพื่อแชร์ connection pool ได้ทั่วทั้งระบบ
- ใช้ Tokio async runtime → ทำให้จัดการ request ได้อย่างมีประสิทธิภาพ
- สร้าง Event-based Interface → คล้ายกับ NGINX/OpenResty ทำให้ developer คุ้นเคยและพัฒนา feature ใหม่ได้เร็วขึ้น

### Pingora เร็วขึ้นแค่ไหน?

- ✅ ลด Median TTFB ลง 5ms และ ลด 95th percentile TTFB ลง 80ms
- ✅ ลดการสร้าง connection ใหม่ลง 3 เท่า ทำให้ใช้ TCP/TLS handshake น้อยลง
- ✅ เพิ่ม connection reuse ratio จาก 871% → 9992%
- ✅ ประหยัดเวลา handshake ได้ถึง 434 ปีต่อวัน 😲

### Pingora มีฟีเจอร์ใหม่อะไรบ้าง?

- 🔹 รองรับ HTTP/2 upstream → ทำให้ Cloudflare เปิดตัว gRPC ได้ง่ายขึ้น
- 🔹 Pingora + R2 Storage = Cache Reserve → เพิ่ม caching layer ให้เร็วขึ้น
- 🔹 ปรับแต่งได้ง่าย → พัฒนา feature ใหม่เร็วกว่า NGINX

### Pingora ใช้ทรัพยากรน้อยลง

- 📉 ลดการใช้ CPU ลง 70%
- 📉 ลดการใช้ Memory ลง 67%

Pingora ทำได้เพราะ Rust code ประสิทธิภาพสูงกว่า Lua และ multithreading model ช่วยให้แชร์ data ข้าม requests ได้ดีขึ้น

### Pingora ปลอดภัยขึ้นด้วย Rust

- 🔹 Memory-safe → ลดปัญหาบั๊กและ crash
- 🔹 พัฒนา feature ได้เร็วขึ้น เพราะไม่ต้องกังวลเรื่อง memory safety
- 🔹 ตั้งแต่เปิดใช้งาน Pingora ยังไม่เคย crash จาก service code ของเราเลย!

สรุป: Pingora คือ Proxy ที่ดีที่สุดของ Cloudflare ในตอนนี้

- ✅ เร็วขึ้น → ลด TTFB, ใช้ connection reuse ดีขึ้น
- ✅ มีฟีเจอร์ใหม่เยอะขึ้น → รองรับ HTTP/2, gRPC, Cache Reserve
- ✅ ประหยัดทรัพยากร → ใช้ CPU และ memory น้อยลง
- ✅ ปลอดภัยขึ้น → ใช้ Rust ลดปัญหาความปลอดภัย

มีคนทำ Performance Test เทียบกัน Nginx อยู่เดี่ยวเอามาให้ดูในบทความต่อไป 😁
