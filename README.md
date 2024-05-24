# GEEK STORIES

<figure style="display: flex;align-items:center;"><img src="https://raw.githubusercontent.com/impfundev/geek-stories/main/public/screenshoot.png" width="400" style="border-radius:1rem;"></figure>

Empower your content creation with GEEK STORIES, a fullstack headless CMS built with Next.js. Perfect for bloggers and portfolio creators.

## Get in touch with me:

- [Github](https://github.com/impfundev)
- [LinkedIn](https://linkedin.com/in/ilhammp)
- [Email](mailto:ilhammaulana.dev@gmail.com)

## Features:

- Easy content management
- Flexible headless architecture
- Notion style rich text editor
- Monetize your audience with subscription plan management, secure payments with Midtrans payment gateaway integration
- and more

## Tech Stack

<img src="https://raw.githubusercontent.com/impfundev/geek-stories/main/public/next.svg" width="200" style="margin: 1rem;padding:1rem;background-color:#fff;border-radius:1rem;">

- Node.js
- Next.js 14 (App Router)
- Typescript
- Support MySQL or PostgreSQL database
- Prisma ORM
- Midtrans (Payment Gateaway)
- shadcn/ui or Radix UI
- Novel Rich Text Editor (Titap Editor)
- and more (see package.json)

## Deployment

<img src="https://raw.githubusercontent.com/impfundev/geek-stories/main/public/vercel.svg" width="200" style="margin: 1rem;padding:1rem;background-color:#fff;border-radius:1rem;">

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/impfundev/geek-stories&project-name=cms-geek-stories&repository-name=geek-stories&env=NEXT_PUBLIC_BASE_URL,DATABASE_URL,BLOB_READ_WRITE_TOKEN,NEXT_PUBLIC_SERVER_KEY,NEXT_PUBLIC_CLIENT_KEY)

How to integrate with Vercel PostgreSQL & Vercel Blob:

- [Vercel PostgreSQL](https://vercel.com/docs/storage/vercel-postgres)
- [Vercel Blob](https://vercel.com/docs/storage/vercel-blob/using-blob-sdk)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Setup `.env`

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

This step populates your database with sample content for testing subscription functionalities. You can utilize Prisma Studio to explore the seeded data

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
