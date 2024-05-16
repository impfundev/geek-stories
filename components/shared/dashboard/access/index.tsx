"use client";

import { useState } from "react";
import { ApiTest } from "./APITest";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function AccessPanel({ apiKey }: { apiKey: string }) {
  const [isCopied, setIsCopied] = useState(false);
  const [showApiKey, setShowApiKey] = useState(false);

  const copyApiKeyToClipboard = async () => {
    if ("clipboard" in navigator)
      return await navigator.clipboard.writeText(apiKey);

    return document.execCommand("copy", true, apiKey);
  };

  const handleCopyClick = () => {
    copyApiKeyToClipboard()
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleShowApiKey = () => {
    setShowApiKey(!showApiKey);
  };

  return (
    <Tabs defaultValue="API_KEY" className="py-6">
      <TabsList>
        <TabsTrigger value="API_KEY">API Key</TabsTrigger>
        <TabsTrigger value="API_DOC">API Documentaions</TabsTrigger>
      </TabsList>
      <TabsContent value="API_KEY" className="grid gap-4 py-6">
        <p className="text-muted-foreground">
          Get access to your RESTful API using this API KEY as the authorization
          header.
        </p>
        <div className="flex w-full items-center space-x-2 max-w-md">
          <Input
            disabled
            id="API_KEY"
            type={showApiKey ? "text" : "password"}
            placeholder="API Key"
            readOnly
            value={apiKey}
          />
          <Button onClick={handleShowApiKey} type="button">
            {showApiKey ? "Hide" : "Show"}
          </Button>
          <Button disabled={isCopied} onClick={handleCopyClick} type="button">
            {isCopied ? "Copied!" : "Copy"}
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Warning: This API KEY is confidential, do not show it to anyone
          without consideration.
        </p>
      </TabsContent>
      <TabsContent value="API_DOC" className="grid gap-6 pb-6">
        <ApiTest
          label="GET POSTS"
          endpoint={`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`}
          description="Get post"
          method="GET"
        />
        <ApiTest
          label="GET PAGES"
          endpoint={`${process.env.NEXT_PUBLIC_BASE_URL}/api/pages`}
          description="Get pages"
          method="GET"
        />
        <ApiTest
          label="GET TAGS"
          endpoint={`${process.env.NEXT_PUBLIC_BASE_URL}/api/tags`}
          description="Get tags"
          method="GET"
        />
        <ApiTest
          label="GET SITE INFORMATION"
          endpoint={`${process.env.NEXT_PUBLIC_BASE_URL}/api/site`}
          description="Get site information"
          method="GET"
        />
        <ApiTest
          label="GET COMMENTS"
          endpoint={`${process.env.NEXT_PUBLIC_BASE_URL}/api/comments`}
          description="Get comments"
          method="GET"
        />
      </TabsContent>
    </Tabs>
  );
}