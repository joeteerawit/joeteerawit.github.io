---
title: '1.2 SKI combinators'
description: '1.2 SKI combinators'
pubDate: 'Apr 27 2025'
heroImage: '/books/functional-programming-in-js-with-categories/5f58c4b0-71d0-4983-87e0-8d30dbdf9e5e.jpg'
---
## 1.2 SKI combinators   optional

Combinatory logic เป็นระบบสัญลักษณ์เพื่อกำจัดความจำเป็นของตัวแปร quantified ใน mathematical logic combinator คือ λ-term ที่ไม่มี free variables สามารถเข้าใจ combinators ได้ง่ายๆ ว่าเป็นการดำเนินการที่ 'specified อย่างสมบูรณ์' เนื่องจากไม่มี free variables

หนังสือชื่อ `To Mock a Mockingbird` โดยนักคณิตศาสตร์และนักตรรกะ Raymond Smullyan ที่มีปริศนาใน Combinatory Logic ได้สร้าง subculture ของ lambda combinators ในชุมชน functional คุณสามารถหา libraries ของ combinators ใน javascript เช่น combinators-js ที่มี collection กว้างขวางของ combinators หรือที่เรียกว่า `birds` Combinators ไม่ค่อยถูกใช้ในสถานการณ์พัฒนาจริง แต่ช่วยฝึกความเข้าใจ lambda ของเรา อย่างไรก็ตาม functional libraries ยอดนิยมใน js เช่น ramda และ sanctuary สนับสนุน combinators ที่สำคัญที่สุด

ฉันอยากกล่าวถึง classic combinators บางตัวที่มีความหมายลึกซึ้งในการเขียนโปรแกรม:

### 1. I combinator:

```js
const I = x => x;
```

จะพูดอะไรเกี่ยวกับ identity? นี่คือ alpha และ omega อาจจะไม่ใช่ omega ซึ่งคล้ายกับ combinator ω=(λx.xx) ที่เมื่อเราใช้กับ I เราได้ I: ωI → (λx.xx) I → II → I แต่เมื่อใช้กับตัวเอง เราได้ infinite loop: ωω → (λx.xx) ω → ωω ... ถ้าเราแก้ไข ω เล็กน้อยตามแนวคิดของ ωω ที่ copy ตัวเอง เราจะได้ Y combinator ที่ยิ่งใหญ่ [น่าเสียดายที่ไม่ได้อธิบาย Y combinator ในหนังสือเล่มนี้]

### 2. K combinator หรือ constant. Kab = b

```js
const K = a => b => a
```

K เมื่อใช้กับ argument ใดๆ a จะให้ฟังก์ชัน constant ที่รับหนึ่ง argument Ka ซึ่งเมื่อใช้กับ argument ใดๆ จะคืนค่า a K เพียงแค่ discard b

### 3. S combinator หรือ substitution S f g x = f(x)(g(x))

```js
const S = f => g => x => f(x)(g(x));
```

S รับ x และใช้มันกับทั้ง f และ g จากนั้นใช้ g(x) กับ f(x) เราจะพบสิ่งนี้ใน applicative reader functor section x ควรเข้าใจเป็น common environment ของตัวแปร (หรือ configuration) ที่ให้กับทั้ง f และ g จากนั้นเราใช้ผลลัพธ์ของ g(x) กับ f(x) ซึ่งเป็นฟังก์ชัน

```js
const S = f => g => x => f(x)(g(x));
var pricingCalculation =(config =>price =>price - config.discount * price);
var getPrice = (config => config.productPrice);
var config = ({ discount: 0.1, productPrice: 100 });

var discountedPrice = S(pricingCalculation)(getPrice)(config);
console.log(discountedPrice)//90

// Run This: js fiddle
```


TypeScript:

```ts
// (A → (B → C)) → ((A → B) → (A → C)).
type SType<A, B, C> = (f: (a: A) => (b: B) => C) => (g: (a: A) => B) => (a: A) => C
var S = function <A, B, C>(): SType<A, B, C> {
  return (f: (a: A) => (b: B) => C) => (g: (a: A) => B) => (x: A) => f(x)(g(x))
}

interface Config {
  discount: number
  productPrice: number
}

var config: Config = { discount: 0.1, productPrice: 100 }

var discountedPrice = S<Config, Product, number>()
(config => product =>
  product.getFinalPrice(price => price - config.discount * price)
)
(config => ConcreteProduct(config.productPrice))     // g: (A → B)
(config);                                            // A

log(discountedPrice);//90                            //C

// Run This: TS fiddle
```


### 4. B combinator หรือที่รู้จักในชื่อ Compose - B x y z = x (y z)

```js
const B = f => g => x => f(g(x));
```

B คือการทำ function composition แบบคลาสสิก

### 5. Y combinator หรือที่รู้จักในชื่อ fixed point combinator

นี่คือ Y combinator ที่มีชื่อเสียงซึ่งถูกแนะนำโดย Haskell Curry เพื่อแสดง recursion ใน lambda calculus ของเขา น่าเสียดายที่แม้จะมีความสวยงาม Y combinator ไม่ค่อยถูกนำมาใช้บ่อย

น่าอัศจรรย์ที่ S และ K สามารถประกอบกันเพื่อสร้าง combinators ที่มีความเท่ากันในแง่ extensional กับ lambda term ใดๆ และดังนั้น โดย Church's thesis จึงเท่ากับฟังก์ชันที่คำนวณได้ใดๆ ทั้งหมด
