import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "flex w-full resize-none rounded-none border-0 border-b border-outline-variant bg-transparent px-0 py-2 font-body-md text-body-md text-primary",
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
Textarea.displayName = "Textarea";

export { Textarea };
