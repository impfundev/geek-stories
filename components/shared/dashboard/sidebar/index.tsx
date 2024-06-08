import { Account } from "./account";
import { MainMenu, SecondMenu } from "./menu";
import { Separator } from "@/components/ui/separator";

export function Sidebar() {
  return (
    <aside className="w-full h-screen md:min-w-[260px] max-w-[16vw] md:max-w-[20vw] overflow-y-auto bg-background flex flex-col border-r p-2 md:p-6">
      <div className="p-2 w-full">
        <Account />
      </div>
      <Separator />
      <div className="p-2 w-full">
        <MainMenu />
      </div>
      <Separator />
      <div className="p-2 w-full">
        <SecondMenu />
      </div>
    </aside>
  );
}
