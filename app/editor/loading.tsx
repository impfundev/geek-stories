import { Skeleton } from "@/components/ui/skeleton";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <Skeleton className="w-full h-screen flex flex-col items-center justify-center">
      <Loader2 className="w-8 h-8 animate-spin" />
    </Skeleton>
  );
}
