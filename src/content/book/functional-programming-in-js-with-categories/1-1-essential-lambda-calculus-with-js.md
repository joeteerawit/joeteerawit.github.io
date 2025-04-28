---
title: '1.1 Essential Lambda calculus with Js'
description: '1.1 Essential Lambda calculus with Js'
pubDate: 'Apr 27 2025'
heroImage: '/books/functional-programming-in-js-with-categories/5f58c4b0-71d0-4983-87e0-8d30dbdf9e5e.jpg'
---
### 1.1 Essential Lambda calculus with Js

Lambda calculus คือ functional language ดั้งเดิม Lambda calculus คือ formal system ใน mathematical logic ซึ่งถูกใช้เพื่อแสดงการคำนวณ มันถูกสร้างโดย Alonzo Church ในช่วงปี 1930s การจัดรูปแบบของ lambda expressions ถูกสร้างขึ้นจากพื้นฐาน - ในลักษณะวนซ้ำโดยใช้ Term เป็นฐาน Term สามารถเป็นหนึ่งในสามสิ่งเหล่านี้:

1. variable: x  
2. abstraction: `(λx. M)` ซึ่ง M คือ Term  
3. Application: `(M N)` ซึ่ง M และ N คือ Terms

> อย่างที่คุณเห็นว่า rule แรกคือบางสิ่งที่ terminating, บางสิ่งที่ไม่สามารถแยกหรือขยายได้ ในขณะที่สองตัวอื่นๆ นั้น recursive เพราะในคำจำกัดความของมันใช้ Term ซึ่งคือสิ่งเดียวกันที่เราต้องการจะนิยาม

ตอนนี้ด้วย 3 rules เหล่านี้ เราสามารถสร้าง expressions แบบไม่สิ้นสุดในภาษา lambda ง่ายๆ ที่มีการสร้างจากพื้นฐาน:

`(M N) → ((λx. M) N) → ((λx. (λy.M)) N) → ....`

หลังจากที่เราได้สร้าง term เราสามารถใช้ rule บางตัวเพื่อประเมินผลมัน

important rule ที่นี่คือ β-reduction

1. `((λx. M) E) →β (M [x := E])` ซึ่งเป็นการ substitution ของ E ใน M ทุกที่ที่มี variable x ใน mathematical logic นี่คือตัวอย่าง inference rule ที่มีชื่อเสียงที่กล่าวว่า ถ้าคุณมีหลักฐานว่า a implies b : a → b และฉันรู้ว่า a เป็นจริง ฉันจึงสามารถอนุมานว่า b เป็นจริงได้

สมมติว่าเรามี expression นี้ใน JS

```js
var discountedPrice = 100 - 0.1 * 100;
```

หากเราต้องการที่จะ abstract การ discount 0.1 เพื่อทำให้มัน generic มากขึ้น เราสามารถใช้ common refactoring ที่เรียกว่า extract method

```js
var discountedPriceCalculation = function (discount) { return 100 - discount * 100 }

var discountedPrice = discountedPriceCalculation(0.1);
```

ใน lambda เราสามารถเขียนอย่างหลวมๆ (เพราะไม่มี integers หรือ -, \* ถูก defined เอาไว้):  

`M = (λ discount. (100 - discount * 100))`

และการคำนวณทั้งหมดเพื่อหาค่า discounted price จะเป็นแบบนี้

`(λ discount. (100 - discount * 100))(0.1)`

ซึ่งใช้ rule 3 ของ Application: (M N) โดยที่เราใช้ 0.1 กับ abstraction ของเรา (λ discount. (100 - discount * 100))

ซึ่งเหมือนกับการเขียนใน JavaScript:

```js
var discountedPrice = (discount => 100 - discount * 100)(0.1);
```

การ abstract ค่า 100 ซึ่งเป็นราคาจะเกิดขึ้นใน abstraction ใหม่:

```js
var discountedPrice = (price => (discount => price - discount * price)(0.1))(100);
```

เราจะทำแบบนี้ในหนังสือเล่มนี้ (ในตัวอย่างข้างต้นเราจะเห็นว่า last expression ถูก curried เช่นที่เราจะพูดถึงในภายหลัง) ใน lambda terms นี่จะเป็น

`M = (λ price. (λ discount. (price - discount * price)))`

ตอนนี้เราสามารถประเมิน expression สำหรับ discount และ price โดยใช้ β-reduction rule ของ substitution

`(λ price. (λ discount. (price - discount * price))) (100) →β (λ discount. (100 - discount * 100))`

นั่นคือ lambda calculus สำหรับตอนนี้
