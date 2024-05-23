"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
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
import { createPlan } from "@/lib/action";
import { Minus, Plus } from "lucide-react";

export function CreatePlanDialog() {
  const [newBenefit, setNewBenefit] = useState<number[]>([1]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Create Plan</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] max-h-[90vh] overflow-y-auto">
        <form action={createPlan}>
          <DialogHeader>
            <DialogTitle>Create Plan</DialogTitle>
            <DialogDescription>
              Create a profitable subscription plan for your website&lsquo;s
              premium content.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-4">
              <Label htmlFor="name">Name</Label>
              <Input
                required
                id="name"
                name="name"
                placeholder="e.g. Pro, Hobby, etc."
                className="col-span-3"
              />
            </div>
            <div className="grid gap-4">
              <Label htmlFor="price">Price (in rupiah)</Label>
              <Input
                required
                placeholder="Rp."
                type="number"
                id="price"
                name="price"
                className="col-span-3"
              />
            </div>
            <div className="grid gap-4">
              <Label htmlFor="description">Description</Label>
              <Textarea
                required
                id="description"
                name="description"
                className="col-span-3"
                placeholder="e.g. Best way to get premium content."
              />
            </div>
            <div className="grid gap-4">
              <Label className="flex items-center justify-between pt-6">
                <span>Benefit</span>
                <div className="flex items-center gap-2">
                  <Button
                    disabled={newBenefit.length === 1}
                    size={"icon"}
                    type="button"
                    onClick={() => {
                      setNewBenefit(newBenefit.slice(0, -1));
                    }}
                  >
                    <Minus className="w-5 h-5" />
                  </Button>
                  <Button
                    size={"icon"}
                    type="button"
                    disabled={newBenefit.length === 5}
                    onClick={() => {
                      setNewBenefit([...newBenefit, newBenefit.length++]);
                    }}
                  >
                    <Plus className="w-5 h-5" />
                  </Button>
                </div>
              </Label>
              {newBenefit.length <= 5 &&
                newBenefit.map((benefit) => (
                  <Textarea
                    id={`benefit-${benefit}`}
                    name={`benefit-${benefit}`}
                    key={`benefit-${benefit}`}
                    required
                    placeholder={`e.g. Premium Content`}
                  />
                ))}
            </div>
          </div>
          <DialogFooter>
            <DialogClose>
              <Button variant={"outline"} type="button">
                Close
              </Button>
            </DialogClose>
            <SubmitButton className="w-full">Create</SubmitButton>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
