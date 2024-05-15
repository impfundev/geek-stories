# GEEK STORIES

Fullstack headless CMS for publishing content build with Next.js. (suitable for Blogs and Personal Porfolio website)

## Tech Stack

- Node.js
- Next.js latest version (App Router)
- Typescript
- MySQL database
- Prisma ORM
- Midtrans (Payment Gateaway)
- shadcn/ui or Radix UI
- Novel Rich Text Editor (Titap Editor)

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

We need to seed subcription plan for testing subscription services.

```bash
node prisma/plan.seed.mjs
```

You can check seed data with prisma studio

```bash
npx prisma studio
```

### 5. Run the development server:

\*this project still works proper on development mode, not staging or production.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More About Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
