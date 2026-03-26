This is a Next.js 15 travel agency site with destination pages, package pages, and three inquiry flows:

- package booking
- contact form
- custom package requests

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your SMTP credentials:

```bash
cp .env.example .env.local
```

Required:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`

Optional:

- `MAIL_TO`
- `SITE_NAME`

All form submissions send email through the SMTP configuration in [mail.ts](/Users/parikshitdahal/travel-agency/src/app/lib/mail.ts).

## Build

```bash
npm run build
```

## Launch

Use the checklist in [LAUNCH_CHECKLIST.md](/Users/parikshitdahal/travel-agency/LAUNCH_CHECKLIST.md) before deploying to production.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
