---
title: 'Bash: for loop'
description: 'Bash: for loop'
pubDate: 'May 13 2025'
heroImage: '/share/76f0914a-146d-454b-9732-6a6a5b297e8f.png'
---

## พื้นฐานการใช้ลูปใน Bash Scripting

การใช้ **ลูป (loop)** ใน Bash script เป็นหนึ่งในเครื่องมือสำคัญที่ช่วยให้เราสามารถทำงานซ้ำ ๆ ได้อย่างมีประสิทธิภาพ ภาพด้านบนสรุปรูปแบบการใช้ลูปต่าง ๆ ที่นิยมใช้ใน Bash เอาไว้อย่างครบถ้วน เรามาดูความหมายและการใช้งานของแต่ละแบบกัน

### Bash for loop

```bash
for i in /etc/*; do
  echo $i
done
```

ใช้สำหรับวนลูปผ่านรายการ เช่น รายการไฟล์ในไดเรกทอรี หรือคำที่อยู่ในลิสต์ โดยตัวแปร `$i` จะเก็บค่าแต่ละรายการในแต่ละรอบ

### C-like for loop

```bash
for ((i = 0; i < 100; i++)); do
  echo $i
done
```

เขียนในสไตล์ของภาษา C ซึ่งเหมาะกับการนับเลขที่ต้องการระบุจุดเริ่มต้น เงื่อนไข และวิธีเพิ่มค่า

### For loop แบบช่วง (Range)

```bash
for i in {1..10}; do
  echo "Number: $i"
done
```

ใช้สำหรับวนค่าจากตัวเลขหนึ่งไปยังอีกตัวเลขหนึ่ง และสามารถกำหนด step ได้ด้วย เช่น `{5..50..5}`


### While loop

```bash
i=1
while [[ $i -lt 4 ]]; do
  echo "Number: $i"
  ((i++))
done
```

วนลูปตราบใดที่เงื่อนไขยังเป็นจริง เหมาะกับกรณีที่ไม่รู้จำนวนรอบที่แน่นอน

### While true loop

```bash
while true; do
  # ทำงานตลอดไป
done
```

หรือเขียนแบบ shorthand:

```bash
while :; do
  # ทำงานตลอดไป
done
```

มักใช้ร่วมกับคำสั่ง `break` เพื่อจบลูปเมื่อถึงเงื่อนไขที่ต้องการ


### อ่านไฟล์แบบบรรทัดต่อบรรทัด

```bash
cat file.txt | while read line; do
  echo $line
done
```

หรือใช้อีกแบบหนึ่ง:

```bash
while read line; do
  echo $line
done < "/path/to/txt/file"
```

เหมาะสำหรับประมวลผลไฟล์ทีละบรรทัด

### คำสั่ง continue

```bash
for number in $(seq 1 3); do
  if [[ $number == 2 ]]; then
    continue
  fi
  echo "$number"
done
```

ข้ามรอบปัจจุบันของลูปและเริ่มรอบถัดไปทันที

### คำสั่ง break

```bash
for number in $(seq 1 3); do
  if [[ $number == 2 ]]; then
    break
  fi
  echo "$number"
done
```

หยุดลูปทันทีเมื่อเงื่อนไขเป็นจริง

### Until loop

```bash
count=0
until [[ $count -gt 10 ]]; do
  echo "$count"
  ((count++))
done
```

หรือใช้เพื่อลดค่า:

```bash
count=10
until [[ $count -eq 0 ]]; do
  echo "$count"
  ((count--))
done
```

ลูปจะทำงาน **จนกว่าเงื่อนไขจะเป็นจริง**
