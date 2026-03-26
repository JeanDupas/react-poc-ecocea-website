import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const tagVariants = cva(
    "inline-flex items-center justify-center rounded-full px-4 py-1.5 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary cursor-pointer select-none",
    {
        variants: {
            active: {
                true: "bg-accent text-primary shadow-glow-accent",
                false: "bg-white/5 text-text-muted hover:bg-white/10 hover:text-white border border-white/10",
            },
        },
        defaultVariants: {
            active: false,
        },
    }
)

export interface TagProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "active">,
    VariantProps<typeof tagVariants> {
    label: string
}

const Tag = React.forwardRef<HTMLButtonElement, TagProps>(
    ({ className, active, label, ...props }, ref) => {
        return (
            <button
                type="button"
                ref={ref}
                role="radio"
                aria-checked={active ? "true" : "false"}
                className={cn(tagVariants({ active }), className)}
                {...props}
            >
                {label}
            </button>
        )
    }
)
Tag.displayName = "Tag"

export { Tag, tagVariants }
