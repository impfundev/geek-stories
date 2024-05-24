import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TestPostsApi,
  TestPagesApi,
  TestTagsApi,
  TestCommentsApi,
  TestSiteInfoApi,
  TestMediaApi,
} from "./doc";

export function ApiDoc() {
  return (
    <Tabs defaultValue="posts">
      <TabsList>
        <TabsTrigger value="posts">Posts</TabsTrigger>
        <TabsTrigger value="pages">Pages</TabsTrigger>
        <TabsTrigger value="tags">Tags</TabsTrigger>
        <TabsTrigger value="site">Site Info</TabsTrigger>
        <TabsTrigger value="media">Media</TabsTrigger>
        <TabsTrigger value="comments">Comments</TabsTrigger>
      </TabsList>
      <TestPostsApi />
      <TestPagesApi />
      <TestTagsApi />
      <TestSiteInfoApi />
      <TestMediaApi />
      <TestCommentsApi />
    </Tabs>
  );
}
