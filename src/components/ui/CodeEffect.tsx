import { cn } from "@/lib/utils";

interface CodeEffectProps {
  children: string;
  className?: string;
  symbolClassName?: string;
}

export const CodeEffect = ({
  children,
  className,
  symbolClassName = "opacity-50",
}: CodeEffectProps) => {
  const formattedText = children
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");

  return (
    <span
      className={cn(
        "inline-flex items-center tracking-wide",
        className,
      )}
    >
      <span
        className={cn("select-none mr-px", symbolClassName)}
        aria-hidden="true"
      >
        &lt;
      </span>

      {formattedText}

      <span
        className={cn("select-none ml-0.5", symbolClassName)}
        aria-hidden="true"
      >
        /&gt;
      </span>
    </span>
  );
};
