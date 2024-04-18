import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const posts = await prisma.posts.createMany({
    data: [
      {
        title: "Example Post 1",
        excerpt: "this is example post",
        content: "<p>This is example post</p>",
        published: "upload",
        featured: true,
        thumbnail_url: "https://picsum.photos/480/260",
        thumbnail_alt: "Thmbnail",
        thumbnail_width: "480",
        thumbnail_height: "260",
      },
      {
        title: "Example Post 2",
        excerpt: "this is example post",
        content: "<p>This is example post</p>",
        published: "upload",
        featured: true,
        thumbnail_url: "https://picsum.photos/480/260",
        thumbnail_alt: "Thmbnail",
        thumbnail_width: "480",
        thumbnail_height: "260",
      },
      {
        title: "Example Post 3",
        excerpt: "this is example post",
        content: "<p>This is example post</p>",
        published: "upload",
        featured: true,
        thumbnail_url: "https://picsum.photos/480/260",
        thumbnail_alt: "Thmbnail",
        thumbnail_width: "480",
        thumbnail_height: "260",
      },
    ],
  });

  const tags = await prisma.tags.createMany({
    data: [
      {
        name: "Next.js",
      },
      {
        name: "React",
      },
      {
        name: "MySQL",
      },
    ],
  });

  console.log({ posts, tags });
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
