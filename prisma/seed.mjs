import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
function generateApiKey() {
  let length = 64;
  let result = "";
  let charset =
    "!@#$^&*abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    result += charset[randomIndex];
  }

  return result;
}

async function main() {
  const password = bcrypt.hashSync("Ilhammaulana13!!", 8);
  const apiKey1 = generateApiKey();
  const apiKey2 = generateApiKey();
  const apiKey3 = generateApiKey();
  const seed1 = await prisma.user.create({
    data: {
      userName: "ilhammaulana",
      password,
      email: "ilhammp1213@gmail.com",
      firstName: "Ilham Maulana",
      lastName: "Pratama",
      bio: "Full-stack web developer with over 5 years experience building web application using React & Next.js.",
      role: "admin",
      subscribeStartAt: "2024-05-22T15:41:33.900Z",
      subscribeEndAt: "2024-06-22T15:41:33.900Z",
      api_key: {
        create: {
          value: apiKey1,
        },
      },
      site_info: {
        create: {
          name: "Ilham Maulana Portfolio",
          description:
            "Full-stack web developer with over 5 years experience building web application using React & Next.js.",
        },
      },
      posts: {
        create: {
          title: "New Post",
          excerpt: "Write the description of your post here.",
          content:
            "<p>Start write your content here. Press '/' to browse text editor tool</p>",
          jsonContent: {
            type: "doc",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    text: "Start write your content here. Press '/' to browse text editor tool",
                    type: "text",
                  },
                ],
              },
            ],
          },
          published: "draft",
          featured: false,
          tags: {
            create: {
              name: "example",
            },
          },
        },
      },
      pages: {
        create: {
          title: "New Pages",
          content:
            "<p>Start write your content here. Press '/' to browse text editor tool</p>",
          jsonContent: {
            type: "doc",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    text: "Start write your content here. Press '/' to browse text editor tool",
                    type: "text",
                  },
                ],
              },
            ],
          },
          published: "draft",
        },
      },
      subscription: {
        create: {
          type: "Premium",
          price: "50000",
          description: "Best plan if you realy enjoy our content",
          benefit: [
            { value: "Permium Content" },
            { value: "Email Notification" },
            { value: "Enjoy content without ads" },
          ],
        },
      },
    },
  });

  const seed2 = await prisma.user.create({
    data: {
      userName: "syahrulvikar",
      password,
      email: "syahrulvikar@demo.com",
      firstName: "Syahrul",
      lastName: "Vikar",
      bio: "This is just demo account",
      role: "admin",
      subscribeStartAt: "2024-05-22T15:41:33.900Z",
      subscribeEndAt: "2024-06-22T15:41:33.900Z",
      api_key: {
        create: {
          value: apiKey2,
        },
      },
      site_info: {
        create: {
          name: "Demo Website 1",
          description: "This is just demo website",
        },
      },
      posts: {
        create: {
          title: "New Post",
          excerpt: "Write the description of your post here.",
          content:
            "<p>Start write your content here. Press '/' to browse text editor tool</p>",
          jsonContent: {
            type: "doc",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    text: "Start write your content here. Press '/' to browse text editor tool",
                    type: "text",
                  },
                ],
              },
            ],
          },
          published: "draft",
          featured: false,
          tags: {
            create: {
              name: "demo",
            },
          },
        },
      },
      pages: {
        create: {
          title: "New Pages",
          content:
            "<p>Start write your content here. Press '/' to browse text editor tool</p>",
          jsonContent: {
            type: "doc",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    text: "Start write your content here. Press '/' to browse text editor tool",
                    type: "text",
                  },
                ],
              },
            ],
          },
          published: "draft",
        },
      },
      subscription: {
        create: {
          type: "Suporter",
          price: "10000",
          description:
            "Best way if you just want to support the platform & our amazing author",
          benefit: [
            { value: "Premium Content" },
            { value: "Email Notification" },
          ],
        },
      },
    },
  });

  const seed3 = await prisma.user.create({
    data: {
      userName: "zahrahanifah",
      password,
      email: "zahrahanifah@demo.com",
      firstName: "Zahra",
      lastName: "Hanifah",
      bio: "This is just demo account",
      role: "admin",
      subscribeStartAt: "2024-05-22T15:41:33.900Z",
      subscribeEndAt: "2024-06-22T15:41:33.900Z",
      api_key: {
        create: {
          value: apiKey3,
        },
      },
      site_info: {
        create: {
          name: "Demo Website 2",
          description: "This is just demo website",
        },
      },
      posts: {
        create: {
          title: "New Post",
          excerpt: "Write the description of your post here.",
          content:
            "<p>Start write your content here. Press '/' to browse text editor tool</p>",
          jsonContent: {
            type: "doc",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    text: "Start write your content here. Press '/' to browse text editor tool",
                    type: "text",
                  },
                ],
              },
            ],
          },
          published: "draft",
          featured: false,
          tags: {
            create: {
              name: "website",
            },
          },
        },
      },
      pages: {
        create: {
          title: "New Pages",
          content:
            "<p>Start write your content here. Press '/' to browse text editor tool</p>",
          jsonContent: {
            type: "doc",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    text: "Start write your content here. Press '/' to browse text editor tool",
                    type: "text",
                  },
                ],
              },
            ],
          },
          published: "draft",
        },
      },
      subscription: {
        create: {
          type: "Sponsor",
          price: "1000000",
          description: "Become our sponsor and grow your business with us",
          benefit: [
            {
              value: "Ads Unit to display your advertisement in our content",
            },
            { value: "Highlight your brand in list-type content" },
            { value: "Endorsement content is created especially for you" },
          ],
        },
      },
    },
  });

  console.log("Data Seed: ", seed1, seed2, seed3);
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
