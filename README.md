# Web Resume

นี่คือเรซูเม่ออนไลน์ของผม ทำเป็นเว็บเพจแทนไฟล์ PDF แบบเดิม ๆ เพราะอยากให้ดูมีชีวิตชีวาขึ้นมาหน่อย มีแอนิเมชันเวลาเลื่อนดู สลับโหมด Light/Dark ได้ และยังมีลิงก์ดาวน์โหลดไฟล์ PDF ไว้เผื่อใครอยากเก็บไว้แบบเดิมด้วย

เบื้องหลังใช้ [Next.js](https://nextjs.org) + React + Tailwind CSS สำหรับหน้าเว็บ และ Framer Motion สำหรับความลื่นไหลของแอนิเมชัน

## โครงสร้างโปรเจกต์

```
src/
  app/            # หน้าเว็บหลัก (Next.js App Router)
  components/     # คอมโพเนนต์ต่าง ๆ เช่น ProfileSection, ExperienceSection, ContactSection
public/
  profile/        # รูปโปรไฟล์
  resume/         # ไฟล์เรซูเม่ (PDF)
```

## อยากลองรันดูเองไหม

ก่อนอื่นต้องมี [Node.js](https://nodejs.org) เวอร์ชัน 18 ขึ้นไปในเครื่องก่อนนะ (npm ก็ติดมาด้วยอยู่แล้ว)

ขั้นตอนก็ง่าย ๆ ประมาณนี้:

```bash
# 1. โคลนโปรเจกต์มาก่อน (เลือกใช้ HTTPS หรือ SSH อันไหนก็ได้)
git clone https://github.com/sethawutoff56334/web-resume.git
# หรือ
git clone git@github.com:sethawutoff56334/web-resume.git

cd web-resume

# 2. ติดตั้ง dependencies
npm install

# 3. รันเซิร์ฟเวอร์ dev
npm run dev
```

เสร็จแล้วเปิด [http://localhost:3000](http://localhost:3000) ได้เลย จะเห็นหน้าเรซูเม่ขึ้นมา

ถ้าอยากแก้เนื้อหา ไปแก้ที่ `src/app/page.tsx` หรือคอมโพเนนต์ต่าง ๆ ใน `src/components/` ได้เลย พอเซฟไฟล์หน้าเว็บจะรีเฟรชให้อัตโนมัติ ไม่ต้องกด reload เอง

## คำสั่งอื่น ๆ ที่มี

- `npm run dev` — รันแบบ dev เอาไว้แก้ ๆ ดูผล
- `npm run build` — build เป็นเวอร์ชัน production
- `npm run start` — รันเวอร์ชันที่ build แล้ว
- `npm run lint` — เช็คโค้ดด้วย ESLint
