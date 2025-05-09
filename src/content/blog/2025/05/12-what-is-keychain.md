---
title: 'What is Keychain??'
description: 'What is Keychain??'
pubDate: 'May 12 2025'
heroImage: '/2025/05/d161eae3-ebd1-405b-96a4-4db33871cf74.png'
draft: true
---

## Keychain และ Keystore

ในยุคที่การใช้งาน smart phone และ tablet เป็นเรื่องปกติ การจัดการ secret data เช่น รหัสผ่าน encryption key และโทเคนการยืนยันตัวตน กลายเป็นสิ่งจำเป็น ระบบปฏิบัติการอย่าง iOS และ Android ได้พัฒนาระบบจัดการ secret data ของตนเองขึ้นมาเพื่อรองรับความต้องการนี้ โดย iOS ใช้ระบบที่เรียกว่า **Keychain** ส่วน Android ใช้ระบบที่เรียกว่า **Keystore**

## History & Evolution
### 🔐 iOS Keychain

Keychain เริ่มต้นในช่วงต้นทศวรรษ 1990 โดยเป็นส่วนหนึ่งของระบบอีเมล PowerTalk ของ Apple ซึ่งใช้ในการจัดการ secret data ของผู้ใช้ เช่น password และ encryption key ต่อมาในปี 1999 Apple ได้รวม Keychain เข้ากับ Mac OS 8.6 และพัฒนาต่อเนื่องมาจนถึง macOS และ iOS ปัจจุบัน

ในปี 2013 Apple เปิดตัว **iCloud Keychain** ซึ่งช่วยให้สามารถ sync secret data ระหว่างอุปกรณ์ Apple ได้อย่างปลอดภัย

### 🔐 Android Keystore

Android เริ่มพัฒนา Keystore ใน Android 4.0 (API level 14) เพื่อให้ application สามารถจัดเก็บ encryption key ได้อย่างปลอดภัย ใน Android 4.3 (API level 18) ได้เพิ่มฟีเจอร์ Android Keystore provider เพื่อรองรับการใช้งานที่หลากหลายมากขึ้น

ใน Android 6.0 (API level 23) Keystore ได้รับการปรับปรุงให้รองรับการ encrypt แบบสมมาตร (AES และ HMAC) และเพิ่มระบบควบคุมการเข้าถึง key ที่รองรับการยืนยันตัวตนของผู้ใช้

## 🎯 วัตถุประสงค์และความสำคัญ

ทั้ง Keychain และ Keystore มีวัตถุประสงค์หลักในการจัดเก็บ secret data ของผู้ใช้อย่างปลอดภัย โดยมีเป้าหมายเพื่อ:

* ป้องกันการเข้าถึง secret data โดยไม่ได้รับอนุญาต
* รองรับการยืนยันตัวตนของผู้ใช้
* สนับสนุนการ encrypt และ decrypt ข้อมูล
* รองรับการ sync ข้อมูลระหว่างอุปกรณ์ (ในกรณีของ iCloud Keychain)


## 🔐 กลไกการทำงานและความปลอดภัย
### iOS Keychain

Keychain ใช้การ encrypt แบบ AES-256-GCM โดยมีการแยก key สำหรับ metadata และ secret data ข้อมูล metadata จะถูก encrypt ด้วย key ที่จัดเก็บใน Secure Enclave ซึ่งเป็น hardware ที่ออกแบบมาเพื่อความปลอดภัย ส่วน secret data จะต้องผ่านการ encrypt และ decrypt ผ่าน Secure Enclave ทุกครั้ง

Keychain ยังรองรับระดับการเข้าถึงที่แตกต่างกัน เช่น `kSecAttrAccessibleWhenUnlocked` และ `kSecAttrAccessibleAfterFirstUnlock` เพื่อควบคุมว่า application สามารถเข้าถึง secret data ได้เมื่อใด

### Android Keystore

Keystore ของ Android ออกแบบมาเพื่อป้องกันการเข้าถึง encryption key โดยไม่ได้รับอนุญาต key จะถูกจัดเก็บใน hardware ที่ปลอดภัย เช่น Trusted Execution Environment (TEE) หรือ Secure Element (SE) และไม่สามารถนำออกจากอุปกรณ์ได้

Keystore ยังรองรับการกำหนดนโยบายการใช้งาน key เช่น การกำหนดให้ต้องมีการยืนยันตัวตนของผู้ใช้ก่อนใช้งาน key และการจำกัดการใช้งาน key เฉพาะในโหมดการ encrypt บางประเภท

## การ sync ข้อมูลและการใช้งานข้ามอุปกรณ์
### iCloud Keychain

iCloud Keychain ช่วยให้ผู้ใช้สามารถ sync secret data เช่น รหัสผ่านและ encryption key ระหว่างอุปกรณ์ Apple ได้อย่างปลอดภัย ข้อมูลจะถูก encrypt แบบ end-to-end และสามารถเข้าถึงได้เฉพาะผู้ใช้ที่ได้รับอนุญาตเท่านั้น

### Android Keystore

Keystore ของ Android ไม่รองรับการ sync encryption key ระหว่างอุปกรณ์โดยตรง เนื่องจาก key ถูกผูกกับ hardware ของอุปกรณ์นั้นๆ อย่างไรก็ตาม developer สามารถออกแบบระบบของตนเองเพื่อจัดการกับการ sync secret data ระหว่างอุปกรณ์ได้

## ความท้าทายและข้อควรระวัง

แม้ว่า Keychain และ Keystore จะออกแบบมาเพื่อความปลอดภัย แต่ก็ยังมีความท้าทายที่ต้องพิจารณา:

* **การเจลเบรกหรือรูทอุปกรณ์**: การเจลเบรก iOS หรือรูท Android อาจทำให้ระบบความปลอดภัยของ Keychain หรือ Keystore ถูกละเมิด
* **การจัดการ key ที่ไม่เหมาะสม**: การจัดการ encryption key ที่ไม่ถูกต้องอาจทำให้ secret data ถูกเปิดเผย
* **การพึ่งพาอุปกรณ์เดียว**: การจัดเก็บ encryption key เฉพาะในอุปกรณ์เดียวอาจเป็นปัญหาเมื่ออุปกรณ์สูญหายหรือเสียหาย

## สรุป

Keychain และ Keystore เป็นระบบที่มีความสำคัญในการรักษาความปลอดภัยของ secret data บนอุปกรณ์พกพา การเข้าใจการทำงานและข้อจำกัดของระบบเหล่านี้จะช่วยให้ผู้ใช้และ developer สามารถใช้งานได้อย่างปลอดภัยและมีประสิทธิภาพ

### References:
- [Passwords (Apple)](https://en.wikipedia.org/wiki/Passwords_%28Apple%29?utm_source=chatgpt.com)
- [Android Keystore system | Security - Android Developers](https://developer.android.com/privacy-and-security/keystore?utm_source=chatgpt.com)
- [Hardware-backed Keystore](https://source.android.com/docs/security/features/keystore?utm_source=chatgpt.com)
- [Reddit](https://www.reddit.com/r/ios/comments/17m2ymi/do_you_use_icloud_keychain_whats_your_experience/?utm_source=chatgpt.com)
- [medium](https://medium.com/%40omar.saibaa/local-storage-in-ios-keychain-668240e2670d?utm_source=chatgpt.com)
- [Apple Support](https://support.apple.com/guide/security/keychain-data-protection-secb0694df1a/web?utm_source=chatgpt.com)
- [ICloud](https://en.wikipedia.org/wiki/ICloud?utm_source=chatgpt.com)
