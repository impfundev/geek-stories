"use client";

import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitButton } from "../../auth/SubmitButton";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Subscription } from "@prisma/client";
import { SubmitHandler, useForm } from "react-hook-form";
import { updatePlan } from "@/lib/action";
import { Benefit } from "@/lib/type";

export function EditPlanDialog({ plan }: { plan: Subscription }) {
  const benefit = plan.benefit as Benefit[];
  const [newBenefit, setNewBenefit] = useState<Benefit[]>(benefit);

  const { register, handleSubmit, setValue } = useForm<Subscription>({
    defaultValues: plan,
  });

  console.log(newBenefit);

  const onSubmit: SubmitHandler<Subscription> = (data) =>
    updatePlan(data, newBenefit);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full" variant="outline">
          Edit Plan
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] max-h-[90vh] overflow-y-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Edit Plan</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-4">
              <Label htmlFor="name">Name</Label>
              <Input
                required
                {...register("type")}
                placeholder="e.g. Pro, Hobby, etc."
                className="col-span-3"
                defaultValue={plan.type}
              />
            </div>
            <div className="grid gap-4">
              <Label htmlFor="price">Price (in rupiah)</Label>
              <Input
                {...register("price")}
                required
                placeholder="Rp."
                type="number"
                className="col-span-3"
                defaultValue={Number(plan.price)}
              />
            </div>
            <div className="grid gap-4">
              <Label htmlFor="description">Description</Label>
              <Textarea
                required
                {...register("description")}
                className="col-span-3"
                placeholder="e.g. Best way to get premium content."
                defaultValue={plan.description}
              />
            </div>
            {newBenefit && (
              <div className="grid gap-4">
                <Label className="flex items-center justify-between pt-6">
                  <span>Benefit</span>
                  <div className="flex items-center gap-2">
                    <Button
                      disabled={newBenefit.length === 0}
                      size={"icon"}
                      type="button"
                      onClick={() => {
                        setNewBenefit(newBenefit.slice(0, -1));
                        setValue("benefit", newBenefit);
                      }}
                    >
                      <Minus className="w-5 h-5" />
                    </Button>
                    <Button
                      size={"icon"}
                      type="button"
                      disabled={newBenefit.length === 5}
                      onClick={() => {
                        setNewBenefit([
                          ...newBenefit,
                          {
                            value: "",
                          },
                        ]);
                        setValue("benefit", newBenefit);
                      }}
                    >
                      <Plus className="w-5 h-5" />
                    </Button>
                  </div>
                </Label>
                {newBenefit.length <= 5 &&
                  newBenefit.map((benefit, i) => (
                    <Textarea
                      required
                      key={`benefit-${benefit}`}
                      placeholder={`e.g. Premium Content`}
                      defaultValue={benefit?.value || ""}
                      onChange={(e) =>
                        setNewBenefit([
                          ...newBenefit.filter(
                            (b) => b?.value !== benefit?.value
                          ),
                          {
                            value: e.target.value,
                          },
                        ])
                      }
                    />
                  ))}
              </div>
            )}
          </div>
          <DialogFooter>
            <DialogClose>
              <Button variant={"outline"} type="button">
                Close
              </Button>
            </DialogClose>
            <SubmitButton className="w-full">Save Changes</SubmitButton>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
