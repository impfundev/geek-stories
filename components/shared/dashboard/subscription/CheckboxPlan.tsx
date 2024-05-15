import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Benefit } from "@/lib/type";
import type { Subscription } from "@prisma/client";
import { RadioGroupItem } from "@/components/ui/radio-group";

export function CheckboxPlan({ plan }: { plan: Subscription }) {
  const benefit = plan.benefit as Benefit;
  return (
    <Card>
      <CardContent className="flex gap-4 pt-4">
        <label htmlFor={plan.type} className="items-top flex space-x-4">
          <RadioGroupItem value={plan.type} id={plan.type} />
          <div className="grid gap-2">
            <h2 className="capitalize">{plan.type}</h2>
            <h3>
              <span className="text-2xl">
                {plan.type === "demo" ? "Free" : `Rp. ${plan.price}`}
              </span>{" "}
              {plan.type !== "demo" && (
                <span className="text-muted-foreground">per user / month</span>
              )}
            </h3>
            <CardDescription>{plan.description}</CardDescription>
            <div className="grid gap-2 text-sm">
              <ul className="list-inside">
                {benefit.data.map((benefit, i) => (
                  <li
                    key={i}
                    className="mb-2 grid grid-cols-[25px_1fr] items-center"
                  >
                    <span className="flex h-2 w-2 rounded-full bg-sky-500" />
                    <span>{benefit.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </label>
      </CardContent>
    </Card>
  );
}
