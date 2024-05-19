import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const subscription = await prisma.subscription.create({
    data: {
      type: "Pro",
      description: "Best way to grow up",
      price: "50000.00",
      benefit: {
        createMany: {
          data: [
            {
              value: "Unlimited Posts, Pages, Tags and Subscribers",
            },
            {
              value: "10GB Media Storage",
            },
            {
              value: "Developer Supports",
            },
          ],
        },
      },
    },
  });

  console.log("subscription:", { subscription });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
