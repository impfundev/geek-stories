import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <Card>{children}</Card>
    </div>
  );
}
