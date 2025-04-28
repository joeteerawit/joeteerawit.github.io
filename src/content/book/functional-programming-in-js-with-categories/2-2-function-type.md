---
title: '2.2 Function Types'
description: '2.2 Function Types'
pubDate: 'Apr 27 2025'
heroImage: '/books/functional-programming-in-js-with-categories/5f58c4b0-71d0-4983-87e0-8d30dbdf9e5e.jpg'
---
## 2.2 Function Types  
### 2.2.1 Functions with a single argument  
การเขียนที่เรามักใช้สำหรับ Function ในคณิตศาสตร์ดูเหมือนเช่นนี้:  
`f: A → B`  
ซึ่งหมายความว่า ถ้าคุณให้บางสิ่งที่เป็น Type `A` มันจะให้บางสิ่งที่เป็น Type `B` เช่น Function ที่ยกกำลังเลข  

```js
function square(x) { return x * x;}
```  

มี Type เป็น `square: number → number`  
เราสามารถประกาศ Type อย่างชัดเจนใน TypeScript เช่น `MathFunction` โดยใช้คำสั่ง `Type`:  

```ts
Type MathFunction = (x: number) => number;
```  

### 2.2.2 Functions with multiple arguments  
ตอนนี้เรามาดูกรณีที่ Function มีมากกว่าหนึ่ง arguments สมมติว่าคุณมี Function ที่บวกสองจำนวนใน TypeScript:  

```ts
function add(x: number, y: number): number { return x + y; }
```  

Function นี้มี Type เป็น `(x: number, y: number) => number`  
คุณจะเห็นว่าเราสามารถกำหนด Function `add` ให้กับตัวแปรของ Type `MathFunction` ได้  

```ts
Type MathFunction = (x: number, y: number) => number;
```  

### 2.2.3 Generic Types  
แนวคิดของ generics จะเข้ามาใช้เมื่อเราต้องการให้ Type เปลี่ยนแปลงได้ ตัวอย่างที่ใช้บ่อยคือ Function identity:  

```ts
function id(x: number): number {
  return x;
}
```  

identity ใช้ได้กับทุก Type ไม่ใช่แค่ `number` และเราต้องการใช้มันใหม่โดยไม่ต้องประกาศสำหรับทุก Type ดังนั้นเราจึงต้องทำให้ Type เป็น Generic การประกาศจะตรงไปตรงมาใน TypeScript:  

```ts
function identity<T>(x: T): T {
  return x;
}
```  

จากนั้นเราสามารถใช้ Type เฉพาะแทน `<T>` เพื่อใช้กับ Type นั้นๆ:  

```ts
var y: number = identity<number>(5); // นี่คือ identity สำหรับ number  
var z: string = identity<string>("jim"); // นี่คือ identity สำหรับ string  
```

แน่นอนว่านี่คือตัวอย่างที่ง่ายที่สุด Generics สามารถซับซ้อนขึ้นได้ ตัวอย่างเช่น เราสามารถทำให้ Function `add` เป็น generic ได้  

```ts
function add<T>(x: T, y: T): T {
  return x + y;  
}
```  

อย่างไรก็ตาม เราไม่สามารถกรอกข้อมูลนี้ในวิธีที่ไม่ซับซ้อนสำหรับ `T` ได้ เนื่องจากที่ระดับการอธิบายนี้ การบวกทำได้เฉพาะสำหรับตัวเลข  

ในหนังสือเล่มนี้ เราจะใช้การเขียนแบบ Generics `<T>` เมื่อเราพูดถึง Type  
