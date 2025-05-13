# 🚀 Express + TypeScript Manual Setup Guide

دليل شامل لإعداد مشروع Express باستخدام TypeScript يدويًا، خطوة بخطوة، مع ضبط الحزم والملفات الأساسية.

---

## 📦 1. تهيئة المشروع وتثبيت الحزم

```bash
npm init -y
npm install express
npm install -D typescript @types/node @types/express nodemon
npx tsc --init
```

---

## 📁 2. هيكل المجلدات المقترح

```
myapp/
│
├── src/
│   └── app.ts           // نقطة الدخول الأساسية
│
├── dist/                // ملفات JavaScript المترجمة
│
├── package.json
└── tsconfig.json
```

---

## ⚙️ 3. محتوى `package.json`

```json
{
  "name": "myapp",
  "version": "1.0.0",
  "type": "module",
  "main": "dist/app.js",
  "scripts": {
    "start": "npx tsc && npx nodemon dist/app.js",
    "build": "npx tsc",
    "dev": "npx tsc --watch | npx nodemon dist/app.js"
  },
  "dependencies": {
    "express": "^5.1.0"
  },
  "devDependencies": {
    "typescript": "^5.8.3",
    "@types/node": "^22.15.17",
    "@types/express": "^5.0.1",
    "nodemon": "^3.0.0"
  }
}
```

---

## 🛠️ 4. إعداد `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "NodeNext",
    "moduleResolution": "nodenext",
    "outDir": "./dist",
    "rootDir": "./src",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
```

---

## 🧪 5. مثال أولي لملف `src/app.ts`

```ts
import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (_req, res) => {
  res.send("Hello, TypeScript + Express!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

---

## 🚀 6. أوامر التشغيل

```bash
npm run dev     # تطوير: مراقبة التعديلات وتشغيل المشروع
npm run build   # بناء: ترجمة TypeScript فقط
npm start       # تشغيل: بناء وتشغيل التطبيق
```

---

🎉 **مبروك!** أصبح لديك الآن مشروع Express + TypeScript جاهز وقابل للتطوير.
