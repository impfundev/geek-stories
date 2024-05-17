"use client";
import { useFormState } from "react-dom";
import "./syntax.css";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { testAPi, testComment } from "@/lib/action/testApi";
import { SubmitButton } from "../../auth/SubmitButton";
import { syntaxHighlight } from "./syntaxHighlight";
import { Badge } from "@/components/ui/badge";

type ApiTest = {
  label: string;
  description: string;
  endpoint: string;
  method: "POST" | "GET";
  isComment?: boolean;
};

export function ApiTest({
  label,
  description,
  endpoint,
  method,
  isComment = false,
}: ApiTest) {
  const handleAction = isComment ? testComment : testAPi;
  const [state, action] = useFormState(handleAction, undefined);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{label}</CardTitle>
        <CardDescription>{description}</CardDescription>
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
