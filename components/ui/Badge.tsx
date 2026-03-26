import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary",
    {
        variants: {
            variant: {
                tech:
                    "border-transparent bg-electric/20 text-blue-200 hover:bg-electric/30",
                category:
                    "border-transparent bg-accent/20 text-accent hover:bg-accent/30",
                priority:
                    "border-transparent bg-error/20 text-error hover:bg-error/30",
                outline:
                    "border-white/20 bg-white/10 text-white backdrop-blur-md",
            },
        },
        defaultVariants: {
            variant: "tech",
        },
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    )
}

export { Badge, badgeVariants }
