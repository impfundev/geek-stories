import { Card, CardContent, CardDescription } from "@/components/ui/card";
import type { Subscription } from "@prisma/client";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { Benefit } from "@/lib/type";

export function CheckboxPlan({
  plan,
}: {
  plan: Subscription
}) {
  const benefit = plan.benefit as Benefit[]
  return (
    <Card>
      <CardContent className="flex gap-4 pt-4">
        <label htmlFor={plan.type} className="items-top flex space-x-4">
          <RadioGroupItem value={plan.type} id={plan.type} />
          <div className="grid gap-2">
            <h2 className="capitalize">{plan.type}</h2>
            <h3>
              <span className="text-2xl">
                {plan.price === "0" ? "Free" : `Rp. ${plan.price}`}
              </span>{" "}
            </h3>
            <CardDescription>{plan.description}</CardDescription>
            <div className="grid gap-2 text-sm">
              <ul className="list-inside">
                {benefit && benefit.map((benefit, i) => (
                  <li
                    key={i}
                    className="mb-2 grid grid-cols-[25px_1fr] items-center"
                  >
                    <span className="flex h-2 w-2 rounded-full bg-sky-500" />
                    <span>{benefit?.value}</span>
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
