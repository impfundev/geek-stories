import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const subscription = await prisma.subscription.createMany({
    data: [
      {
        type: "demo",
        price: "0",
        description: "The right choice to kickstart.",
        benefit: {
          data: [
            { label: "Unlimited Posts, Pages, Tags and Comments" },
            { label: "For testing purposes only, no RESTful API service" },
          ],
        },
      },
      {
        type: "pro",
        price: "46000.00",
        description: "The plan to help you keep growing.",
        benefit: {
          data: [
            { label: "Unlimited Posts, Pages, Tags and Comments" },
            { label: "Expert Supports" },
            { label: "RESTful API service" },
          ],
        },
      },
    ],
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
