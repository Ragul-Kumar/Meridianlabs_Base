import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-button text-button uppercase rounded-none transition-all duration-300 active:scale-95 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-fixed",
  {
    variants: {
      variant: {
        // Filled electric-lime primary
        default:
          "bg-primary-fixed text-on-primary-fixed hover:bg-primary accent-glow",
        // 1px white border, fills white on hover
        outline:
          "border border-primary text-primary bg-transparent hover:bg-primary hover:text-background",
        // Solid white
        secondary:
          "bg-primary text-background hover:bg-primary-fixed",
        ghost: "bg-transparent text-primary hover:text-primary-fixed",
        link: "bg-transparent text-primary-fixed normal-case underline-offset-4 hover:underline",
      },
      size: {
        sm: "px-4 py-2",
        default: "px-6 py-3",
        lg: "px-8 py-5",
        xl: "px-10 py-5",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
