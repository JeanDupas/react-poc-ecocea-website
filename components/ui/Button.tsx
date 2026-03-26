import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                primary:
                    "bg-accent text-primary hover:bg-accent/90 hover:scale-105 active:scale-95 transition-all duration-200",
                secondary:
                    "bg-electric text-white hover:bg-electric/90",
                ghost:
                    "hover:bg-white/10 hover:text-white bg-transparent border border-transparent",
                outline:
                    "border border-accent text-accent hover:bg-accent/10 focus-visible:ring-accent",
            },
            size: {
                sm: "h-9 rounded-md px-3 text-xs",
                md: "h-10 rounded-md px-4 py-2",
                lg: "h-11 rounded-md px-8 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
    loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, loading = false, children, ...props }, ref) => {
        if (asChild) {
            return (
                <Slot
                    className={cn(buttonVariants({ variant, size, className }))}
                    ref={ref}
                    {...props} // Note: disabled is usually passed natively to the slotted element, or omitted.
                >
                    {children}
                </Slot>
            )
        }

        return (
            <button
                type="button"
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                disabled={loading || props.disabled}
                {...props}
            >
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {!loading && children}
            </button>
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
