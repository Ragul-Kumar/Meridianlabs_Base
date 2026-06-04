import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          // Architectural: transparent, bottom-border only, lime focus
          "flex w-full rounded-none border-0 border-b border-outline-variant bg-transparent px-0 py-2 font-body-md text-body-md text-primary",
          "placeholder:text-on-surface-variant/60",
          "focus-visible:outline-none focus-visible:border-primary-fixed",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
