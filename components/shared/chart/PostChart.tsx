"use client";

import { Doughnut } from "react-chartjs-2";
import { PostType } from "@/lib/models/schema";
import "chart.js/auto";
import { useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function PostChart({ posts }: { posts: PostType }) {
  const ref = useRef();

  const totalPost = posts.length;
  const publishedPost = posts.filter(
    (post) => post.published === "upload"
  ).length;
  const draftedPost = posts.filter((post) => post.published === "draft").length;

  const data = {
    labels: ["Published Posts", "Drafted Posts"],
    datasets: [
      {
        label: "count",
        data: [publishedPost, draftedPost],
        backgroundColor: ["#3730a3", "#38bdf8"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <Card className="w-full max-w-xs flex flex-col gap-4 shadow">
      <CardHeader className="text-2xl font-bold">Posts</CardHeader>
      <CardDescription>Total Post: {totalPost}</CardDescription>
      <CardContent>
        {totalPost === 0 ? (
          "You dont have any post yet"
        ) : (
          <Doughnut ref={ref} data={data} />
        )}
        <Button asChild>
          <Link href={"/dashboard/posts"}>Manage Posts</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
