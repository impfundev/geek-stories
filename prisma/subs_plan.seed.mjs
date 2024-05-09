import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const subscription = await prisma.subscription.createMany({
    data: [
      {
        type: "hobby",
        price: "0",
        description: "The right choice to kickstart.",
        benefit: {
          data: [
            { label: "Total 1000 Posts, Pages, Tags and Comments" },
            { label: "10 GB Media Storage" },
            { label: "Basic Theme" },
            { label: "Community Supports" },
          ],
        },
      },
      {
        type: "pro",
        price: "46000.00",
        description: "The plan to help you keep growing.",
        benefit: {
          data: [
            { label: "Total 10000 Posts, Pages, Tags and Comments" },
            { label: "100 GB Media Storage" },
            { label: "Basic Theme" },
            { label: "Premium Theme, Community and Expert Supports" },
          ],
        },
      },
      {
        type: "enterprise",
        price: "Custom",
        description: "The plan to help you keep growing.",
        benefit: {
          data: [
            { label: "Unlimited Posts, Pages, Tags and Comments" },
            { label: "Start from 1 TB Media Storage" },
            { label: "Premium Theme and Custom Theme (by request)" },
            { label: "Custom Dashboard (by request)" },
            { label: "Enterprise Supports" },
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
