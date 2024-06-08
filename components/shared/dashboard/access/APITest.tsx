"use client";

import { useFormState } from "react-dom";
import "./syntax.css";
import { syntaxHighlight } from "./syntaxHighlight";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { testAPi } from "@/lib/action/testApi";
import { SubmitButton } from "../../auth/SubmitButton";
import { Badge } from "@/components/ui/badge";
import { useApiTest } from "@/hooks/useApiTest";

type ApiTest = {
  label: string;
  description: string;
  endpoint: string;
  method: "POST" | "GET";
  type?: "pagination" | "search";
};

export function ApiTest({
  label,
  description,
  endpoint,
  method,
  type,
}: ApiTest) {
  const [state, action] = useFormState(testAPi, undefined);
  const { setQuery, setLimit, setSkip } = useApiTest();

  return (
    <Card>
      <CardHeader className="gap-4">
        <CardTitle>{label}</CardTitle>
        <CardDescription>{description}</CardDescription>
        {type === "search" && (
          <CardDescription>
            <Input
              placeholder="keyword"
              type="text"
              defaultValue={"New Post"}
              onChange={(e) => setQuery(e.target.value)}
            />
          </CardDescription>
        )}
        {type === "pagination" && (
          <CardDescription className="flex gap-6">
            <Input
              type="number"
              placeholder="limit"
              className="max-w-xs"
              defaultValue={2}
              onChange={(e) => setLimit(Number(e.target.value))}
            />
            <Input
              type="number"
              placeholder="skip"
              className="max-w-xs"
              defaultValue={1}
              onChange={(e) => setSkip(Number(e.target.value))}
            />
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <Label htmlFor="API_ENDPOINT">Endpoint:</Label>
        <form
          action={action}
          className="flex w-full items-center space-x-2 max-w-md pb-6"
        >
          <Input
            disabled
            id="API_ENDPOINT"
            type="text"
            placeholder="API Key"
            readOnly
            value={endpoint}
          />
          <input
            id="endpoint"
            name="endpoint"
            value={endpoint}
            hidden
            readOnly
          />
          <input id="method" name="method" value={method} hidden readOnly />
          <SubmitButton type="submit">Try</SubmitButton>
        </form>
        {state && (
          <div className="border rounded-xl p-6 grid gap-6">
            <div className="flex gap-4 items-center">
              <Badge>status: {state.status}</Badge>
              <Badge variant={"outline"}>message: {state.message}</Badge>
            </div>
            <pre
              dangerouslySetInnerHTML={{
                __html: syntaxHighlight(
                  JSON.stringify(state.result, undefined, 4)
                ),
              }}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
