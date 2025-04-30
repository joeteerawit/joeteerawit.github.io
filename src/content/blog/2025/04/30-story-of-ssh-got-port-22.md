---
title: 'Story ของการได้มาซึ่ง port 22 ของ SSH'
description: 'Story ของการได้มาซึ่ง port 22 ของ SSH'
pubDate: 'Apr 30 2025'
heroImage: '/2025/04/6e23f9e8-ef07-4d0b-a330-319274931123.png'
---
[Tatu Ylonen](https://fi.wikipedia.org/wiki/Tatu_Yl%C3%B6nen) ได้เขียน version แรกของ SSH (Secure Shell) ในฤดูใบไม้ผลิปี 1995 ซึ่งเป็นช่วงเวลาที่ telnet และ FTP ยังถูกใช้งานอย่างกว้างขวาง

เขาออกแบบ SSH เพื่อมาแทนที่ทั้ง telnet (port 23) และ ftp (port 21) และพบว่า port 22 ยังคงว่างอยู่ ซึ่งมันอยู่ตรงกลางระหว่าง port ของ telnet และ ftp อย่างพอดิบพอดี เขาคิดว่าการมีหมายเลข port แบบนี้อาจเป็นสิ่งเล็กๆ ที่ช่วยเพิ่มความน่าเชื่อถือให้กับ program ใหม่ แต่ปัญหาคือจะได้หมายเลข port นั้นมาอย่างไร เขาไม่เคยขอ port มาก่อน แต่รู้จักคนที่เคยทำเรื่องนี้มาแล้ว

กระบวนการขอหมายเลข port ในเวลานั้นค่อนข้างเรียบง่าย internet ยังเล็กมาก และเป็นช่วงเริ่มต้นของยุคบูม internet หมายเลข port ถูกจัดสรรโดย IANA (Internet Assigned Numbers Authority) ซึ่งในตอนนั้นประกอบด้วย Internet pioneer อย่าง [Jon Postel](https://en.wikipedia.org/wiki/Jon_Postel) และ [Joyce K. Reynolds](https://en.wikipedia.org/wiki/Joyce_K._Reynolds) เคยเป็นบรรณาธิการของมาตรฐานโปรโตคอลสำคัญๆ เช่น IP (RFC 791), ICMP (RFC 792), และ TCP (RFC 793) ซึ่งหลายคนอาจเคยได้ยินชื่อ

สำหรับ Tatu แล้ว Jon ดูน่าเกรงขามมาก เพราะเขาเป็นผู้เขียน RFC หลักๆ ของ internet แทบทั้งหมด

ก่อนที่เขาจะประกาศเปิดตัว ssh-1.0 ในเดือนกรกฎาคม 1995 Tatu ได้ส่ง email ถึง IANA ว่า:

```
From: Tatu Ylonen <ylo@cs.hut.fi>
To: Internet Assigned Numbers Authority <iana@isi.edu>
Subject: request for port number
Organization: Helsinki University of Technology, Finland

Dear Sir,

I have written a program to securely log from one machine into another over an insecure network. It provides major improvements in security and functionality over existing telnet and rlogin protocols and implementations. In particular, it prevents IP, DNS and routing spoofing.

My plan is to distribute the software freely on the Internet and to get it into as wide use as possible. I would like to get a registered privileged port number for the software.

The number should preferably be in the range 1-255 so that it can be used in the WKS field in name servers. I'll enclose the draft RFC for the protocol below. The software has been in local use for several months, and is ready for publication except for the port number.

If the port number assignment can be arranged in time, I'd like to publish the software already this week. I am currently using port number 22 in the beta test.

It would be great if this number could be used (it is currently shown as Unassigned in the lists). The service name for the software is "ssh" (for Secure Shell).

Yours sincerely,
Tatu Ylonen <ylo@cs.hut.fi>
```

แปล 👇👇👇👇

```
ผมเพิ่งเขียน program ที่ช่วยให้ login จากเครื่องหนึ่งไปอีกเครื่องหนึ่งได้แบบปลอดภัย ผ่าน network ที่ไม่ปลอดภัย program นี้ช่วยเพิ่มทั้งความปลอดภัยและ feature จาก telnet กับ rlogin ที่ใช้อยู่เดิมได้เยอะทีเดียว โดยเฉพาะช่วยป้องกันการปลอมแปลง IP, DNS และ routing

ผมตั้งใจจะแจก software นี้ให้ใช้ฟรีบน internet และอยากให้มีคนใช้งานกว้างที่สุดเท่าที่จะเป็นไปได้ เลยอยากขอ port number privileged ที่ลงทะเบียนอย่างเป็นทางการให้กับ program นี้หน่อยครับ

อยากได้ port number ที่อยู่ในช่วง 1-255 จะดีมาก เพราะจะได้ใช้งานกับฟิลด์ WKS ของ name servers ได้ ผมแนบร่าง RFC ของโปรโตคอลไว้ด้านล่างนี้ด้วย ตอนนี้ program ก็ใช้งานในวงในมาหลายเดือนแล้ว พร้อมปล่อยสู public ทันที เหลือแค่ยังไม่ได้ port number ถ้าได้ port ทันเวลา ผมอยากปล่อย software ภายในสัปดาห์นี้เลย ตอนนี้ตอน beta test ผมใช้เบอร์ 22 อยู่

ถ้าอนุญาตให้ใช้ port number นี้ได้ (ตอนนี้เห็นในลิสต์ว่ายัง Unassigned อยู่) ก็จะเยี่ยมมากเลย ชื่อบริการของ program ก็คือ "ssh" (ย่อมาจาก Secure Shell)

ขอบคุณมากครับ, 
Tatu Ylonen <ylo@cs.hut.fi>
```

เขาได้แนบ draft RFC ของโปรโตคอล ssh-1.0 ไปด้วย

วันต่อมา Tatu พบว่า Joyce ได้ส่ง email ตอบกลับมาว่า:

```
Date: Mon, 10 Jul 1995 15:35:33 -0700
From: jkrey@ISI.EDU
To: ylo@cs.hut.fi
Subject: Re: request for port number
Cc: iana@ISI.EDU

Tatu,

We have assigned port number 22 to ssh, with you as the point of contact.

Joyce
```

แปล 👇👇👇👇

```
Tatu,

เราอนุมัติให้ใช้ port 22 สำหรับ ssh แล้วนะ คุณเป็น contact หลักของบริการนี้เรียบร้อย

Joyce
```

และนั่นคือสิ่งที่เกิดขึ้น — SSH ได้หมายเลข port 22 อย่างเป็นทางการแล้ว!

ในวันที่ 12 กรกฎาคม 1995 เวลา 2:32am, Tatu ประกาศ beta version สุดท้ายให้กับกลุ่มผู้ทดสอบภายใน Helsinki University of Technology และในเวลา 5:23pm เขาได้ประกาศ package ssh-1.0.0 ต่อผู้ทดสอบ และในเวลา 5:51pm ของวันเดียวกัน เขาได้ส่งประกาศเกี่ยวกับ SSH (Secure Shell) ไปยังรายชื่อ email cypherpunks@toad.com นอกจากนี้ยังโพสต์ไปยัง newsgroups, mailing lists อื่นๆ และส่งตรงให้กับผู้ที่เคยอภิปรายเรื่องที่เกี่ยวข้องบน internet

#### References:
- [ssh.com](https://www.ssh.com/academy/ssh/port)
