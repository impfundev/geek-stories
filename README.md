# GEEK STORIES

Fullstack headless CMS for publishing content build with Next.js. (suitable for Blogs and Personal Porfolio website)

## Get in touch with me:

- [Github](https://github.com/impfundev)
- [LinkedIn](https://linkedin.com/in/ilhammp)
- [Email](mailto:ilhammaulana.dev@gmail.com)

## Tech Stack

![Next.js](/public/next.svg)

- Node.js
- Next.js 14 (App Router)
- Typescript
- Support MySQL or PostgreSQL database
- Prisma ORM
- Midtrans (Payment Gateaway)
- shadcn/ui or Radix UI
- Novel Rich Text Editor (Titap Editor)
- and more (see package.json)

## Cloud (used on live demo)

![Vercel](/public/vercel.svg)

- Vercel PostgreSQL
- Vercel Blob

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Setup `.env`

How to integrated with Vercel PostgreSQL & Vercel Blob:

- [Vercel PostgreSQL](https://vercel.com/docs/storage/vercel-postgres)
- [Vercel Blob](https://vercel.com/docs/storage/vercel-blob/using-blob-sdk)

```bash
cp .env.example .env
```

inside `.env`:

```bash
# BASE URL
NEXT_PUBLIC_BASE_URL="http://localhost:3000"

# DATABASE
DATABASE_URL="mysql://username:password@host:port/database"

# MEDIA STORAGE
BLOB_READ_WRITE_TOKEN="" # YOUR VERCEL BLOB TOKEN

# AUTH
SESSION_SECRET="" # STRONG RANDOM SECRET

# MIDTRANS SERVER KEY
NEXT_PUBLIC_SERVER_KEY="SB-Mid-server-example"
NEXT_PUBLIC_CLIENT_KEY="SB-Mid-client-example"
```

### 3. Setup database with prisma

```bash
npx prisma generate
npx prisma db push
```

### 4. Seeding Required Data

We need to seed dummy data for testing subscription services.

```bash
node prisma/seed.mjs
```

You can check seed data with prisma studio

```bash
npx prisma studio
```

### 5. Run the the app on local:

#### Development mode:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

#### Staging/Production:

```bash
npm run build
npm run start
```

## Learn More About Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
