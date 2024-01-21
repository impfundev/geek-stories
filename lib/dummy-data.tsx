import { ReactElement } from "react";

export type Data = {
  id?: string;
  title?: string;
  status?: "draft" | "publish";
  author?: string;
  authorAvatar?: string;
  date?: string;
};

export const posts: Data[] = [
  {
    id: "00000001",
    status: "publish",
    title: "Example Post 1",
    author: "Olivia Martin",
    authorAvatar: "/avatars/01.png",
    date: "2024-01-27T23:15:30.000Z",
  },
  {
    id: "00000002",
    status: "publish",
    title: "Example Post 2",
    author: "James Smith",
    authorAvatar: "/avatars/02.png",
    date: "2024-02-27T23:15:30.000Z",
  },
  {
    id: "00000003",
    status: "draft",
    title: "Example Post 3",
    author: "Levina Martin",
    authorAvatar: "/avatars/03.png",
    date: "2024-03-27T23:15:30.000Z",
  },
  {
    id: "00000004",
    status: "draft",
    title: "Example Post 4",
    author: "Kevin Nash",
    authorAvatar: "/avatars/04.png",
    date: "2024-04-27T23:15:30.000Z",
  },
  {
    id: "00000005",
    status: "publish",
    title: "Example Post 5",
    author: "Niki Jackson",
    authorAvatar: "/avatars/05.png",
    date: "2024-05-27T23:15:30.000Z",
  },
  {
    id: "00000006",
    status: "publish",
    title: "Example Post 6",
    author: "Olivia Martin",
    authorAvatar: "/avatars/01.png",
    date: "2024-01-27T23:15:30.000Z",
  },
  {
    id: "00000007",
    status: "publish",
    title: "Example Post 7",
    author: "James Smith",
    authorAvatar: "/avatars/02.png",
    date: "2024-02-27T23:15:30.000Z",
  },
  {
    id: "00000008",
    status: "draft",
    title: "Example Post 8",
    author: "Levina Martin",
    authorAvatar: "/avatars/03.png",
    date: "2024-03-27T23:15:30.000Z",
  },
  {
    id: "00000009",
    status: "draft",
    title: "Example Post 9",
    author: "Kevin Nash",
    authorAvatar: "/avatars/04.png",
    date: "2024-04-27T23:15:30.000Z",
  },
  {
    id: "00000010",
    status: "publish",
    title: "Example Post 10",
    author: "Niki Jackson",
    authorAvatar: "/avatars/05.png",
    date: "2024-05-27T23:15:30.000Z",
  },
  {
    id: "00000011",
    status: "publish",
    title: "Example Post 11",
    author: "Niki Jackson",
    authorAvatar: "/avatars/05.png",
    date: "2024-05-27T23:15:30.000Z",
  },
];

export const pages: Data[] = [
  {
    id: "00000001",
    status: "publish",
    title: "Example Page 1",
    author: "Olivia Martin",
    authorAvatar: "/avatars/01.png",
    date: "2024-01-27T23:15:30.000Z",
  },
  {
    id: "00000002",
    status: "publish",
    title: "Example Page 2",
    author: "James Smith",
    authorAvatar: "/avatars/02.png",
    date: "2024-02-27T23:15:30.000Z",
  },
  {
    id: "00000003",
    status: "draft",
    title: "Example Page 3",
    author: "Levina Martin",
    authorAvatar: "/avatars/03.png",
    date: "2024-03-27T23:15:30.000Z",
  },
  {
    id: "00000004",
    status: "draft",
    title: "Example Page 4",
    author: "Kevin Nash",
    authorAvatar: "/avatars/04.png",
    date: "2024-04-27T23:15:30.000Z",
  },
  {
    id: "00000005",
    status: "publish",
    title: "Example Page 5",
    author: "Niki Jackson",
    authorAvatar: "/avatars/05.png",
    date: "2024-05-27T23:15:30.000Z",
  },
  {
    id: "00000006",
    status: "publish",
    title: "Example Page 6",
    author: "Olivia Martin",
    authorAvatar: "/avatars/01.png",
    date: "2024-01-27T23:15:30.000Z",
  },
  {
    id: "00000007",
    status: "publish",
    title: "Example Page 7",
    author: "James Smith",
    authorAvatar: "/avatars/02.png",
    date: "2024-02-27T23:15:30.000Z",
  },
  {
    id: "00000008",
    status: "draft",
    title: "Example Page 8",
    author: "Levina Martin",
    authorAvatar: "/avatars/03.png",
    date: "2024-03-27T23:15:30.000Z",
  },
  {
    id: "00000009",
    status: "draft",
    title: "Example Page 9",
    author: "Kevin Nash",
    authorAvatar: "/avatars/04.png",
    date: "2024-04-27T23:15:30.000Z",
  },
  {
    id: "00000010",
    status: "publish",
    title: "Example Page 10",
    author: "Niki Jackson",
    authorAvatar: "/avatars/05.png",
    date: "2024-05-27T23:15:30.000Z",
  },
  {
    id: "00000011",
    status: "publish",
    title: "Example Page 11",
    author: "Niki Jackson",
    authorAvatar: "/avatars/05.png",
    date: "2024-05-27T23:15:30.000Z",
  },
];

export const tags: Data[] = [
  {
    id: "00000001",
    status: "publish",
    title: "Example Tags 1",
    author: "Olivia Martin",
    authorAvatar: "/avatars/01.png",
    date: "2024-01-27T23:15:30.000Z",
  },
  {
    id: "00000002",
    status: "publish",
    title: "Example Tags 2",
    author: "James Smith",
    authorAvatar: "/avatars/02.png",
    date: "2024-02-27T23:15:30.000Z",
  },
  {
    id: "00000003",
    status: "draft",
    title: "Example Tags 3",
    author: "Levina Martin",
    authorAvatar: "/avatars/03.png",
    date: "2024-03-27T23:15:30.000Z",
  },
  {
    id: "00000004",
    status: "draft",
    title: "Example Tags 4",
    author: "Kevin Nash",
    authorAvatar: "/avatars/04.png",
    date: "2024-04-27T23:15:30.000Z",
  },
  {
    id: "00000005",
    status: "publish",
    title: "Example Tags 5",
    author: "Niki Jackson",
    authorAvatar: "/avatars/05.png",
    date: "2024-05-27T23:15:30.000Z",
  },
  {
    id: "00000006",
    status: "publish",
    title: "Example Tags 6",
    author: "Olivia Martin",
    authorAvatar: "/avatars/01.png",
    date: "2024-01-27T23:15:30.000Z",
  },
  {
    id: "00000007",
    status: "publish",
    title: "Example Page 7",
    author: "James Smith",
    authorAvatar: "/avatars/02.png",
    date: "2024-02-27T23:15:30.000Z",
  },
  {
    id: "00000008",
    status: "draft",
    title: "Example Page 8",
    author: "Levina Martin",
    authorAvatar: "/avatars/03.png",
    date: "2024-03-27T23:15:30.000Z",
  },
  {
    id: "00000009",
    status: "draft",
    title: "Example Page 9",
    author: "Kevin Nash",
    authorAvatar: "/avatars/04.png",
    date: "2024-04-27T23:15:30.000Z",
  },
  {
    id: "00000010",
    status: "publish",
    title: "Example Page 10",
    author: "Niki Jackson",
    authorAvatar: "/avatars/05.png",
    date: "2024-05-27T23:15:30.000Z",
  },
  {
    id: "00000011",
    status: "publish",
    title: "Example Page 11",
    author: "Niki Jackson",
    authorAvatar: "/avatars/05.png",
    date: "2024-05-27T23:15:30.000Z",
  },
];
