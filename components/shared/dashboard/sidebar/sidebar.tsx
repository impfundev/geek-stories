import { Account } from "./account";
import { MainMenu, SecondMenu } from "./menu";
import { Separator } from "@/components/ui/separator";

export function Sidebar() {
  return (
    <aside className="w-[16vw] flex flex-col border-r">
      <div className="flex flex-col p-2 w-full">
        <Account />
      </div>
      <Separator />
      <div className="flex flex-col p-2 w-full">
        <MainMenu />
      </div>
      <Separator />
      <div className="flex flex-col p-2 w-full">
        <SecondMenu />
      </div>
    </aside>
  );
}
