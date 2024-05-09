import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Subscription } from "@prisma/client";
import type { Benefit } from "@/lib/type";

export function Plans({ plans }: { plans: Subscription[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {plans.map((plan, i) => {
        const benefit = plan.benefit as Benefit;
        return (
          <Card
            key={i}
            className="flex flex-col justify-between drop-shadow-lg"
          >
            <div>
              <CardHeader className="gap-1">
                <CardTitle className="capitalize">{plan.type}</CardTitle>
                <CardTitle>
                  <span className="text-3xl">
                    {plan.type === "enterprise"
                      ? plan.price
                      : `Rp. ${plan.price}`}
                  </span>{" "}
                  {plan.type !== "hobby" && (
                    <span className="text-lg text-muted-foreground">
                      per user / month
                    </span>
                  )}
                </CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <ul>
                  {benefit.data.map((benefit, i) => (
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
            <CardFooter>
              {plan.type === "enterprise" ? (
                <div className="w-full flex justify-between gap-4">
                  <Button className="w-full">Contact Sales</Button>
                  <Button variant={"outline"} className="w-full">
                    Request Demo
                  </Button>
                </div>
              ) : (
                <Button className="w-full">Start Now</Button>
              )}
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
