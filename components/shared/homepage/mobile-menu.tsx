import { Dot } from "lucide-react";
import { Button } from "@/components/ui/Button";

type MobileMenu = {
  isMenuOpen: boolean;
  handleMenuOpen: () => void;
};

export function MobileMenu({ isMenuOpen, handleMenuOpen }: MobileMenu) {
  return (
    <div className="md:hidden">
      <Button size="icon" variant="ghost" onClick={handleMenuOpen}>
        <span
          className={`group grid grid-cols-2 items-center ${
            isMenuOpen ? "rotate-45 gap-0.5" : "rotate-0 gap-0"
          } transition-all duration-300`}
        >
          <Dot size={isMenuOpen ? 10 : 10} strokeWidth={7} />
          <Dot size={isMenuOpen ? 10 : 10} strokeWidth={7} />
          <Dot size={isMenuOpen ? 10 : 10} strokeWidth={7} />
          <Dot size={isMenuOpen ? 10 : 10} strokeWidth={7} />
        </span>
      </Button>
    </div>
  );
}
