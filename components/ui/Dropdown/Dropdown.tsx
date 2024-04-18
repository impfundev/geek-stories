import { cn } from "@/lib/utils";

export const DropdownCategoryTitle = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="text-[.65rem] font-semibold mb-1 uppercase px-1.5">
      {children}
    </div>
  );
};

export const DropdownButton = ({
  children,
  isActive,
  onClick,
  disabled,
  className,
}: {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}) => {
  const buttonClass = cn(
    "flex items-center gap-2 p-1.5 text-sm font-medium text-left w-full rounded",
    !isActive && !disabled,
    "hover:bg-foreground hover:text-background dark:hover:bg-foreground",
    disabled && "text-neutral-400 cursor-not-allowed",
    className
  );

  return (
    <button className={buttonClass} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};
