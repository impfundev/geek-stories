import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Subscription } from "@prisma/client";
import type { Benefit } from "@/lib/type";

interface PlansProps {
  plan: Subscription;
}

export function ActivePlan({ plan }: PlansProps) {
  const { data } = plan.benefit as Benefit;

  return (
    <Card className="flex flex-col justify-between drop-shadow-lg max-w-md">
      <div>
        <CardHeader className="gap-1">
          <CardTitle className="capitalize">Active Plan: {plan.type}</CardTitle>
          <CardDescription>Your privileges:</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <ul>
            {data.map((benefit, i) => (
              <li
                key={i}
                className="mb-4 grid grid-cols-[25px_1fr] items-center pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 rounded-full bg-sky-500" />
                <span>{benefit.label}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </div>
    </Card>
  );
}
