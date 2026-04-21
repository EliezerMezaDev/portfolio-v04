import { cn } from "@lib/utils";

interface CodeEffectProps {
  children: React.ReactNode;
  className?: string;
  symbolClassName?: string;
}

export const CodeEffect = ({
  children,
  className,
  symbolClassName = "opacity-50",
}: CodeEffectProps) => {
  return (
    <span className={cn("inline-flex items-center tracking-wide", className)}>
      <span
        className={cn("select-none", symbolClassName)}
        aria-hidden="true"
      >
        &lt;
      </span>

      {children}

      <span
        className={cn("select-none ml-1.5", symbolClassName)}
        aria-hidden="true"
      >
        /&gt;
      </span>
    </span>
  );
};
