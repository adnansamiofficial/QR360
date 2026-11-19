# QR360 — Next.js Project

QR360-কে Next.js project structure-এ আনা হয়েছে এবং আগের QR360 v1.1-এর কাজ করা module-গুলো অক্ষত রাখার জন্য সেগুলোকে `public/qr360-app.html`-এ রাখা হয়েছে। Next.js landing page থেকে `/workspace` route-এ গেলে সেই workspace খুলবে। এটি একটি migration-friendly Next.js shell; পুরোনো frontend-কে এখনো React component-এ সম্পূর্ণ rewrite করা হয়নি।

## কী আছে

- Next.js App Router + TypeScript project
- QR360-এর আগের dark green / emerald theme অক্ষত রাখা হয়েছে; শুধু logo ও brand artwork সবুজ palette-এ update করা হয়েছে।
- নতুন responsive landing page
- `/workspace` route-এ আগের complete QR360 app
- Personal QR, Business QR, QR Scanner, Digital Card
- Business Profile, Invoice, Payment/Activity History, Analytics
- Admin demo panel, local user list, backup/restore
- আগের HTML-এর unmodified backup `backup/` folder-এ রাখা আছে

## চালানোর নিয়ম

**প্রয়োজন:** Node.js 20.9 বা তার পরের সংস্করণ এবং npm।

1. ZIP extract করে project folder-এ Terminal খোলো।
2. Dependency install করো:

```bash
npm install
```

3. Development server চালাও:

```bash
npm run dev
```

4. Browser-এ খোলো:

```text
http://localhost:3000
```

Landing page থেকে **Launch QR360** চাপলে workspace খুলবে। সরাসরি `http://localhost:3000/workspace`-ও খোলা যাবে।

Production build পরীক্ষা:

```bash
npm run build
npm start
```

## Demo Admin

```text
Email: admin@qr360.local
Password: QR360Admin!2026
```

এই credentials কেবল demo-এর জন্য। Public deployment-এ এগুলো ব্যবহার করা নিরাপদ নয়।

## গুরুত্বপূর্ণ সীমাবদ্ধতা

- এখনকার account ও app data browser-এর `localStorage`-এ থাকে; আলাদা device/browser-এ synchronize হয় না।
- এটি production authentication নয়। Real user accounts, secure admin roles, password hashing, database ও payment integration-এর জন্য backend/database এবং server-side security যোগ করতে হবে।
- QR generator library CDN থেকে load হয়, তাই QR তৈরি করতে internet দরকার হতে পারে।
- Camera scanner-এর জন্য camera permission এবং HTTPS (অথবা localhost) প্রয়োজন; browser support অনুযায়ী কাজ করবে।
- QR share URL-এ profile তথ্য encode থাকে, encrypted নয়। QR-এ private/sensitive তথ্য দেবে না।
- `public/qr360-app.html` হলো আগের frontend-এর preservation layer; Next.js shell-এর সঙ্গে জুড়ে দেওয়া হয়েছে, কিন্তু সব legacy logic এখনো React component-এ rewrite করা হয়নি।

## Project structure

```text
QR360_NextJS/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── workspace/page.tsx
├── public/
│   ├── qr360-app.html
│   ├── qr360-logo.svg
│   ├── qr360-icon.svg
│   └── qr360-brand-artwork.svg
├── backup/QR360_COMPLETE_FINAL_v1.1_original.html
├── backup/qr360-brand-artwork-blue-purple-old.png (পুরোনো artwork backup)
├── package.json
├── next.config.mjs
└── tsconfig.json
```


## Green Theme consistency update
- Landing Page, Dashboard, Sidebar, active navigation, buttons and panels now use the same emerald/mint palette.
- Workspace navigation uses consistent inline SVG line icons instead of the old geometric text symbols.
- Existing workspace HTML and its application logic are preserved; only visual styles, theme metadata and navigation icon markup were updated.
