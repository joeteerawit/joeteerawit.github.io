---
title: '2.1 Basic Type Theory optional'
description: '2.1 Basic Type Theory optional'
pubDate: 'Apr 27 2025'
heroImage: '/books/functional-programming-in-js-with-categories/5f58c4b0-71d0-4983-87e0-8d30dbdf9e5e.jpg'
---
## 2.1 Basic Type Theory  
ในหนังสือเล่มนี้ เราจะใช้การพึ่งพาน้อยที่สุดโดยใช้ Vanilla JavaScript และจะไม่ใช้ dependencies อื่นๆ กลุ่มนี้จะช่วยให้คุณเข้าใจลึกซึ้งถึงแนวคิดใน JavaScript มากขึ้น ความสำคัญของการใส่ใจใน Type ใน Dynamic Type System ยิ่งสำคัญสำหรับ Developer เราจะมาดูเรื่อง Type Theory กันสั้นๆ  

### 2.1.1 Why Types are important  
ใน System of Type Theory (ระบบทฤษฎีของ Type) แต่ละ Term จะมี Type เนื่องจาก JavaScript ไม่ใช่ภาษาที่เข้มงวดในเรื่องของ Type เราจึงไม่สามารถคาดหวังให้ Compiler บังคับการใช้งานที่ถูกต้องสำหรับแต่ละ Term อย่างไรก็ตาม หากคุณใช้ Term ในลักษณะที่ไม่สอดคล้องกัน คุณจะได้รับข้อผิดพลาดระหว่างการทำงาน เช่น ถ้าคุณมี Function JS  

```js
function square(x) { return x * x;}
```  

หากคุณพยายามเรียก Function นี้ด้วย String argument `square("jim")` คุณจะไม่เห็นการแจ้งเตือนใดๆ ว่าการใช้งานนี้ ผิดหลักการการใช้งาน เมื่อคุณพยายามรัน มันจะเกิดข้อยกเว้น Type System พยายามป้องกันโดยการกำหนด Type ให้กับแต่ละ Term และอนุญาตให้ใช้แค่ Type ที่ถูกต้อง  

Terms ถูกสร้างจากพื้นฐานขึ้นมา:  
- Term อาจเป็น Basic Type (Type พื้นฐาน) เช่น string, array, number เป็นต้น  
- Term อาจเป็น Function ระหว่าง terms  
- Term อาจเป็น Class ที่มี Term อื่นๆ เป็น Properties  

เราจะมาดูแต่ละข้อแยกกัน  


### 2.1.2 Variable Types  
สองกรณีที่เกิดบ่อยที่สุดคือ:  
- คุณมีตัวแปรของ Basic Types (Type พื้นฐาน) ที่รองรับโดย JavaScript เช่น string, Boolean, Number เป็นต้น เมื่อเราต้องการบอกว่า ตัวแปร `x` เป็น Type `A` เราใช้การเขียนว่า `x: A`  

```ts
let discountedPrice: number = 5;
let clientName: string = "Jim";
```  

เราสามารถประกาศ Type ที่กำหนดเองใน ECMAScript ได้โดยการใช้การนิยาม `class` แล้วใช้การสร้างใหม่ `new` เพื่อสร้าง Object Type ของ class นั้นๆ:  

```ts
class Client {
    id: number;
    name: string;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

let client: Client = new Client(1, "Jim");

console.log(client.name);
```  
