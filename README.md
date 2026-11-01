# Shubham Tiwari – Portfolio (React + Vite)

## Run locally
```
npm install
npm run dev
```
This runs the site only. The contact form calls `/api/contact`, which needs the Vercel runtime:
```
npm i -g vercel
vercel dev
```

## Send contact-form messages to your Gmail
Messages are emailed to **shubhamtiwari9508@gmail.com** by `api/contact.js` (Nodemailer + Gmail).

1. Google Account → Security → turn on **2-Step Verification**.
2. Google Account → Security → **App passwords** → create one (name it "Portfolio"). Copy the 16-character password.
3. In Vercel → Project → Settings → Environment Variables, add:
   - `GMAIL_USER` = the Gmail address that sends the mail (can be shubhamtiwari9508@gmail.com)
   - `GMAIL_APP_PASSWORD` = the 16-character app password
4. Redeploy. For local testing, copy `.env.example` to `.env.local` and fill it in.

Never commit the app password. Replying to a message in Gmail goes to the visitor's address (Reply-To is set).

## Deploy
Push to GitHub, import the repo in Vercel (framework: Vite). `vercel.json` handles page routes like `/projects/loanx`.

## To finish
- Replace the drawn project previews in `src/components.jsx` (`Thumb`) with real images in `public/`.
- Point each project's GitHub button to its repo (`GH` in `src/pages.jsx`).
