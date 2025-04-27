---
title: 'categories'
description: 'categories'
pubDate: 'Apr 27 2025'
heroImage: '/2025/3a913882-55a4-4629-9ef0-08a299843dc6.jpg'
---
# A quick glance at Lambda And basic category theory

## 1 Categories

Category Theory เป็นสาขาวิชาทางคณิตศาสตร์ที่มีขอบเขตการประยุกต์ใช้อย่างกว้างขวางใน theoretical computer science แนวคิดเช่น Category, Functor, Monad และอื่นๆ ซึ่งถูกกำหนดไว้ในตอนแรกใน Category Theory ได้กลายเป็นสิ่งสำคัญสำหรับความเข้าใจของภาษาและกระบวนทัศน์ใน Functional Programming (FP) สมัยใหม่

Category เป็นเพียงการขยายของแนวคิดดั้งเดิมของ Set of Objects หมวดหมู่ C ประกอบด้วยสิ่งที่เป็นคณิตศาสตร์สามประการต่อไปนี้:

1. class ob(C) ซึ่งสมาชิกของมันถูกเรียกว่า objects นักเขียนโปรแกรมแบบ object-oriented จะพบว่านี่เป็นวิธีที่ดีในการเริ่มต้นคำจำกัดความ

![53eb4bba-471c-4cf2-83de-8cfa56c23721](/public/books/functional-programming-in-js-with-categories/53eb4bba-471c-4cf2-83de-8cfa56c23721.png)

หมวดหมู่ที่เราชื่นชอบในการเขียนโปรแกรมคือ category of types เช่น int, bool, char, etc. มีหมวดหมู่ที่น่าสนใจมากมายในการเขียนโปรแกรมและในหนังสือเล่มนี้ เราจะสำรวจบางส่วนของพวกมัน

![53eb4bba-471c-4cf2-83de-8cfa56c23721](/public/books/functional-programming-in-js-with-categories/cd9cfbc2-386e-4bff-b383-79c742811299.png)


2. การรวบรวมของส่วนประกอบที่เรียกว่า morphisms หรือ arrows แต่ละ morphism f มีวัตถุต้นทาง a และวัตถุปลายทาง b

![53eb4bba-471c-4cf2-83de-8cfa56c23721](/public/books/functional-programming-in-js-with-categories/a59c4211-c2ab-42ce-a302-22ada01ff1b3.png)

ลูกศรเดี่ยวที่เชื่อมต่อวัตถุถูกเรียกว่า morphism หรือ arrow

ใน Type category ของเรา ลูกศรจาก number ไปยัง boolean ตัวอย่างเช่น แทนฟังก์ชัน number→boolean ตัวอย่างบางส่วนอาจเป็น:

```js
var isEven = a => a % 2 === 0;
```

หรืออันนี้:

```js
var isLessThan10 = a => a < 10;
```

![53eb4bba-471c-4cf2-83de-8cfa56c23721](/public/books/functional-programming-in-js-with-categories/83944761-5d5d-4f0c-85ee-1a0faa3944d6.png)

จุดเน้นพื้นฐานของ category theory คือความสัมพันธ์ระหว่างวัตถุ และไม่ใช่ตัววัตถุเอง ซึ่งตรงข้ามกับ Set theory ที่มุ่งเน้นไปที่เซตของวัตถุเป็นหลัก นักเขียนโปรแกรมแบบ Functional รับรองมุมมองที่เป็นเอกลักษณ์นี้ของ category theory อย่างรวดเร็ว