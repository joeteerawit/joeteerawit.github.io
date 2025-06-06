--- 
title: 'กำเนิด Javascript แบบย่อ..'
description: 'กำเนิด Javascript'
pubDate: 'May 05 2025'
heroImage: '/2025/05/68c6a022-65e7-42a7-863b-d366891ce084.png'
---

## จาก idea 10 วันสู่ภาษาหลักของโลก Web development

ในปี 1995 ขณะที่ internet ยังอยู่ในยุคเริ่มต้น website ต่าง ๆ ยังเป็นเพียงหน้าข้อมูลแบบ Static ซึ่งแสดงผลเหมือนเดิมทุกครั้งที่เปิด Brendan Eich, Software engineer ของบริษัท Netscape Communications ได้รับมอบหมายให้สร้างภาษา scripting ที่สามารถทำให้ web กลายเป็นแบบ Interactive ได้ ภายในเวลาเพียง **10 วัน** เขาได้พัฒนาภาษาใหม่ขึ้นมาและตั้งชื่อมันว่า **Mocha**

## จาก Mocha สู่ LiveScript และ JavaScript
![8dff2fa1-3808-4deb-a79d-72d9282cfb26](/2025/05/8dff2fa1-3808-4deb-a79d-72d9282cfb26.png)

หลังจากที่ภาษา scripting ตัวใหม่ของ Netscape ถือกำเนิดขึ้นภายใต้ชื่อ **Mocha** ในช่วงต้นปี 1995 โดยฝีมือของ **Brendan Eich** ซึ่งในขณะนั้นเขาเพิ่งเข้าร่วมทีมได้ไม่ถึงเดือน ทางบริษัทก็เริ่มทดสอบภาษานี้กับ Netscape Navigator version แรก ๆ และได้เปลี่ยนชื่อภาษานี้เป็น **LiveScript** ในช่วงปลายปีเดียวกัน

LiveScript ถูกออกแบบมาเพื่อ `"เพิ่มชีวิต"` ให้กับหน้า Web ที่ในขณะนั้นยังคงเป็นเพียงหน้าข้อความแบบ Static ที่ไม่สามารถโต้ตอบกับผู้ใช้งานได้

ทีมบริหารของ Netscape ต้องการภาษาใหม่ที่เบา เร็ว เรียนรู้ได้ง่าย และมีโครงสร้าง syntax คล้ายกับภาษา Java เพื่อให้ developer สามารถปรับตัวได้รวดเร็ว แต่ภายใต้ข้อจำกัดด้านเวลา Eich มีเพียง **10 วัน** ในการเขียน prototype แรกของภาษา และนั่นคือจุดเริ่มต้นของสิ่งที่ต่อมากลายเป็น JavaScript

ช่วงเวลานั้น ภาษา **Java** ของ Sun Microsystems กำลังกลายเป็นดาวรุ่งพุ่งแรงในวงการ ด้วยแนวคิด "write once, run anywhere" ผ่าน JVM (Java Virtual Machine) ทำให้สามารถรัน codeเดียวกันได้ในหลายระบบปฏิบัติการ ความนิยมของ Java ทำให้ทีมการตลาดของ Netscape ตัดสินใจเปลี่ยนชื่อ LiveScript ให้กลายเป็น **JavaScript** ในการเปิดตัวจริงใน Netscape Navigator 2.0 beta

แม้ชื่อจะคล้ายกัน แต่ในความเป็นจริง **JavaScript กับ Java เป็นคนละภาษาที่แตกต่างกันอย่างสิ้นเชิง** ทั้งในด้าน syntax, execution model และเป้าหมายการใช้งาน โดย Java เป็นภาษาแบบ compiled ที่ทำงานผ่าน JVM ขณะที่ JavaScript เป็น interpreted language ที่รันอยู่ภายใน Browser 

แม้การตั้งชื่อ JavaScript จะสร้างความสับสนให้กับผู้เรียนและ Developer มาหลายยุค แต่ก็ปฏิเสธไม่ได้ว่าเป็นหนึ่งในกลยุทธ์ทางการตลาดที่ทำให้ภาษาใหม่นี้แจ้งเกิดอย่างรวดเร็ว และกลายเป็นส่วนหนึ่งของ Browser เกือบทุกตัวในเวลาต่อมา

## JavaScript กับยุคทองของ Web Browser

หนึ่งในจุดแข็งที่ทำให้ JavaScript กลายเป็นภาษาหลักของโลก Web ก็คือความสามารถในการทำงานได้โดยตรงบน Browser โดยไม่ต้องติดตั้ง plugin หรือ Software เสริมเพิ่มเติมใด ๆ นั่นทำให้ JavaScript สามารถเปลี่ยน Website ที่เคยเป็นเพียงหน้า Static ให้กลายเป็น Website แบบ Interactive ได้อย่างมีประสิทธิภาพ ไม่ว่าจะเป็นการคลิกปุ่มแล้วข้อมูลเปลี่ยนทันทีโดยไม่ต้อง refresh หน้า การกรอก form ที่แสดงข้อความแจ้งเตือนทันทีเมื่อข้อมูลไม่ถูกต้อง หรือการโหลดเนื้อหาใหม่แบบ dynamic ทำให้ประสบการณ์ผู้ใช้ดีขึ้นอย่างก้าวกระโดด

ความสามารถเหล่านี้ไม่ได้เป็นเพียงลูกเล่นเล็ก ๆ แต่กลายเป็น มาตรฐานใหม่ของการออกแบบ Website ในยุคถัดมา และเมื่อ Web Browser ทุกตัวรองรับ JavaScript เป็นมาตรฐาน ความนิยมของภาษานี้จึงแพร่กระจายไปอย่างรวดเร็ว จนกลายเป็นรากฐานสำคัญของการพัฒนา Web application ยุคใหม่ ไม่ว่าจะเป็น Website ขนาดเล็กหรือระบบระดับองค์กร

## กำเนิด ECMAScript
![e6a51c95-2d42-4786-a5ee-9a012f7f1210](/2025/05/e6a51c95-2d42-4786-a5ee-9a012f7f1210.png)

เมื่อ JavaScript เริ่มได้รับความนิยมมากขึ้นในช่วงปลายยุค 90s และถูกใช้งานอย่างแพร่หลายโดย Web Developer ทั่วโลก ความท้าทายก็เริ่มตามมาอย่างรวดเร็ว หนึ่งในปัญหาหลักคือความ compatibility กันระหว่าง **web browser** แต่ละตัว เช่น Netscape Navigator และ Internet Explorer ที่แปล JavaScript แตกต่างกัน ส่งผลให้ code JavaScript ที่ทำงานได้ใน Browser หนึ่ง อาจทำงานผิดพลาดในอีก Browser หนึ่งได้

เพื่อแก้ปัญหานี้ จึงเกิดความร่วมมือในการวางมาตรฐานกลางสำหรับภาษา JavaScript ซึ่งนำไปสู่การสร้างสิ่งที่เรียกว่า **ECMAScript** โดยองค์กรมาตรฐานชื่อ **ECMA International** เป็นผู้ดูแล มาตรฐานนี้มีเป้าหมายเพื่อกำหนดโครงสร้างของภาษาให้ชัดเจน และให้ทุก Browser สามารถอ้างอิงและพัฒนาการรองรับ JavaScript ได้อย่างสอดคล้องกัน

Version แรกของ ECMAScript คือ **ES1** เปิดตัวในปี **1997** และได้รับการ update ต่อเนื่องในปีต่อ ๆ มา เช่น **ES3 (1999)** ที่เริ่มได้รับการใช้งานจริงอย่างแพร่หลาย ในขณะที่ **ES4** ถูกยกเลิกเนื่องจากขัดแย้งกันในด้านการออกแบบและความซับซ้อนเกินไป

จุดเปลี่ยนสำคัญเกิดขึ้นในปี **2015** เมื่อมีการเปิดตัว **ES6 (หรือ ECMAScript 2015)** ซึ่งเป็น version ที่เปลี่ยนแปลงโครงสร้างภาษาอย่างมีนัยสำคัญ โดยเพิ่ม feature ระดับ modern programming มากมาย เช่น:

* **let และ const** สำหรับการประกาศตัวแปรที่มีขอบเขตชัดเจน
* **arrow functions** ที่ทำให้การเขียน function กระชับขึ้น
* **template literals** สำหรับการจัดการ string แบบ dynamic
* **destructuring assignment** เพื่อแยกข้อมูลจาก object หรือ array ได้สะดวก
* **modules** เพื่อจัดการการ import/export code ระหว่าง file
* **Promises และ async/await** สำหรับการเขียน asynchronous code อย่างอ่านง่ายและ maintain ได้ดีขึ้น

ตั้งแต่นั้นเป็นต้นมา ECMAScript ได้มีการ update **ปีละ version ** เช่น **ES2016**, **ES2017**, ไปจนถึง **ES2022** และ **ES2023** ซึ่งเป็น version ล่าสุดในปัจจุบัน โดยมุ่งเน้นที่การเพิ่ม feature ที่มีประโยชน์จริงในงานพัฒนา, การปรับปรุง performance, และการเพิ่มความสามารถใหม่ ๆ ที่สอดคล้องกับพฤติกรรมการเขียน code ยุคใหม่ เช่น `optional chaining`, `nullish coalescing`, `BigInt`, และ `top-level await`

มาตรฐาน ECMAScript ไม่ได้เป็นเพียง technical document เท่านั้น แต่กลายเป็นแรงผลักดันหลักที่ทำให้ **JavaScript พัฒนาได้อย่างมีทิศทาง และกลายเป็นภาษาที่ทันสมัย มีประสิทธิภาพ และเหมาะสำหรับงานทั้ง frontend และ backend ในยุคปัจจุบัน**

## เมื่อทุกอย่างคือ Object

หนึ่งในแนวคิดหลักที่อยู่เบื้องหลังการออกแบบของ **JavaScript** คือแนวคิด **Object-Oriented Programming (OOP)** หรือการเขียนโปรแกรมเชิงวัตถุ ซึ่งช่วยให้เราสามารถจำลองสิ่งต่าง ๆ จากโลกแห่งความเป็นจริงมาใช้ในโปรแกรมได้อย่างเป็นระบบ ไม่ว่าจะเป็นสิ่งของที่จับต้องได้ เช่น “คน”, “รถยนต์”, “สัตว์เลี้ยง” ไปจนถึงสิ่งที่จับต้องไม่ได้อย่าง “อากาศ”, “เสียง”, หรือแม้แต่ “การเคลื่อนไหว”

ใน JavaScript ทุกอย่างสามารถเป็น **object** ได้ ไม่ว่าจะเป็นตัวแปร, function, array หรือแม้แต่ค่าต่าง ๆ ที่ดูเหมือน primitive ก็สามารถมีพฤติกรรมแบบ object ได้ผ่านการ wrap โดยอัตโนมัติ ตัวอย่างเช่น object ที่เป็น "คน" อาจมี **property** อย่าง `name`, `age`, และมี **method** เช่น `walk()`, `run()` ที่บ่งบอกพฤติกรรมของ object นั้น ในขณะที่ object ที่แทน "อากาศ" อาจมีเพียง property เช่น `temperature`, `humidity` โดยไม่มี method ใด ๆ ก็ได้ เพราะมันเป็นการแทนสถานะ (state) มากกว่าการกระทำ (behavior)

สิ่งที่ทำให้ JavaScript มีความยืดหยุ่นสูงคือความสามารถในการสร้าง object ได้หลายวิธี เช่น การใช้ object literal (`{}`), การสร้างผ่าน constructor function, หรือการใช้ class (ซึ่งถูกเพิ่มเข้ามาใน ES6 เพื่อรองรับการเขียน code เชิง object ได้อย่างเป็นระบบมากขึ้น) นอกจากนี้ยังสามารถใช้ **prototype** ในการสร้าง inheritance ได้ ซึ่งถือเป็นอีกหนึ่งกลไกสำคัญของ JavaScript ที่แม้จะต่างจาก OOP แบบคลาสสิก แต่ก็มีความทรงพลังและยืดหยุ่นมาก

ด้วยแนวคิดที่ว่า `“แทบทุกอย่างคือ object”` JavaScript จึงสามารถใช้ในการสร้างระบบที่ซับซ้อน เช่น UI component, data model, หรือแม้แต่ระบบ logic ที่มีความสัมพันธ์ระหว่าง object ต่าง ๆ ได้อย่างมีประสิทธิภาพ ทำให้มันกลายเป็นภาษาที่เหมาะกับการพัฒนา Web application ในทุกรูปแบบ

## JavaScript Everywhere: การเกิดขึ้นของ Node.js
![89a322da-479b-445b-aca7-e2575a983d21](/2025/05/89a322da-479b-445b-aca7-e2575a983d21.png)

แม้ว่า **JavaScript** จะประสบความสำเร็จอย่างมากในฝั่ง **frontend** และกลายเป็นภาษาหลักสำหรับการพัฒนา Web แบบโต้ตอบได้ (interactive) มานานหลายปี แต่ก็ยังถูกจำกัดให้อยู่เฉพาะภายใน **web browser** เท่านั้น Developer สามารถใช้ JavaScript เพื่อจัดการ UI, event, และ DOM แต่หากต้องการทำงานฝั่ง server เช่น เชื่อมต่อ database หรือประมวลผลข้อมูลบน server-side พวกเขายังต้องใช้ภาษาอื่น เช่น PHP, Python หรือ Java

จุดเปลี่ยนสำคัญเกิดขึ้นในปี **2009** เมื่อ **ไรอัน ดาห์ล (Ryan Dahl)** เปิดตัว **Node.js** ซึ่งเป็น **runtime environment** ที่ออกแบบมาเพื่อให้สามารถรัน JavaScript ได้บน **ฝั่ง server (server-side)** โดยอาศัย **V8 JavaScript Engine** ของ Google Chrome ซึ่งเป็น engine ที่มีประสิทธิภาพสูงในการแปลง JavaScript ให้กลายเป็น machine code ที่สามารถทำงานได้อย่างรวดเร็ว

Node.js ไม่เพียงแต่ทำให้ JavaScript รันบน server ได้ แต่ยังมาพร้อมกับระบบ module ที่ยืดหยุ่น, event loop ที่รองรับ asynchronous I/O, และแนวคิดแบบ **non-blocking** ซึ่งทำให้สามารถสร้าง application ที่ **มีประสิทธิภาพสูง รองรับผู้ใช้จำนวนมาก** ได้อย่างมีประสิทธิภาพ

การมาของ Node.js เปรียบเสมือนการ

> "ปลดล็อก" JavaScript จากกรอบของ browser Developer สามารถใช้ภาษาเดียวในการสร้างทั้งฝั่ง frontend และ backend ได้อย่างครบวงจร ตั้งแต่การสร้าง **REST APIs**, การจัดการฐานข้อมูล, ไปจนถึงการทำงานร่วมกับระบบต่าง ๆ บน server ซึ่งทั้งหมดนี้กลายเป็นแนวคิดที่เรียกว่า **"JavaScript everywhere"** – โลกที่ภาษาเดียวสามารถครอบคลุมทุกส่วนของการพัฒนา Web application 

## JavaScript Everywhere: เขียนได้ทุกที่ ใช้งานได้ทุกอย่าง
หลังจากที่ **JavaScript** สามารถครอบคลุมงานฝั่ง **frontend** และ **backend** ได้อย่างเต็มรูปแบบผ่านการมาของ **Node.js** โลกของ JavaScript ก็ไม่ได้หยุดอยู่แค่นั้น แต่กลับขยายตัวอย่างรวดเร็ว กลายเป็นหนึ่งใน ecosystem ที่เติบโตเร็วที่สุดในประวัติศาสตร์การพัฒนาซอฟต์แวร์

ภายในเวลาไม่กี่ปี มี **framework** และ **เครื่องมือใหม่ ๆ** เกิดขึ้นอย่างต่อเนื่อง เพื่อรองรับความต้องการในการพัฒนา application รูปแบบต่าง ๆ บนหลาย platform ไม่ว่าจะเป็น:

* **React**, **Vue**, และ **Svelte** ซึ่งช่วยให้การสร้าง UI ที่ซับซ้อนบน Web กลายเป็นเรื่องง่ายขึ้น ด้วยแนวคิดแบบ declarative และ component-based ทำให้ Developer สามารถสร้าง app ที่ maintain ได้ง่ายและปรับขยายได้ดี
* **Next.js** (สำหรับ React) และ **Nuxt.js** (สำหรับ Vue) ซึ่งพัฒนาให้รองรับทั้ง **server-side rendering (SSR)** และ **static site generation (SSG)** อย่างมีประสิทธิภาพ เหมาะกับ app ที่ต้องการความเร็ว ความปลอดภัย และ SEO ที่ดี
* **Electron** เปิดประตูให้ JavaScript ถูกใช้สร้าง ** application desktop** บน Windows, macOS และ Linux โดยใช้เทคโนโลยี Web ที่ Developer คุ้นเคยอยู่แล้ว
* **React Native** และ **Expo** ทำให้ JavaScript กลายเป็นเครื่องมือสำคัญในการสร้าง ** app มือถือ native** ที่สามารถรันได้ทั้งบน iOS และ Android ด้วย codebase เดียว

การเติบโตอย่างต่อเนื่องของ JavaScript ทำให้มันกลายเป็นมากกว่าภาษา scripting บน Web แบบที่เคยเป็นในยุคแรก ๆ ทุกวันนี้ JavaScript กลายเป็นภาษาหลักสำหรับการพัฒนา ** Web app **, ** app มือถือ**, ** app desktop**, และแม้กระทั่งระบบ backend หรือ CLI tools ในหลาย ๆ โครงการระดับองค์กร

จากความสามารถที่หลากหลายและชุมชน Developer ที่เติบโตอย่างต่อเนื่อง JavaScript จึงกลายเป็น **ecosystem ขนาดใหญ่** ที่เปลี่ยนโฉมหน้าของวงการ software ไปอย่างสิ้นเชิง และยังคงเดินหน้าต่อไปอย่างไม่หยุดยั้ง

#### References:
- [dl.acm.org](https://dl.acm.org/doi/pdf/10.1145/3386327)
- [auth0.com](https://auth0.com/blog/a-brief-history-of-javascript/)
- [piyush-dubey.medium.com](https://piyush-dubey.medium.com/the-journey-of-javascript-from-mocha-to-a-web-powerhouse-63e4ee533b53)
- [youtube.com](https://www.youtube.com/watch?v=9gNCWUEvLAI)
