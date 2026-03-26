import * as React from "react"
import { cn } from "@/lib/utils"

export interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode
    from?: string
    to?: string
    dir?: "to-r" | "to-b" | "to-br" | "to-tr"
}

/**
 * Renders text with a gradient background.
 * Falls back to the default css gradient-text class if custom colors are not provided.
 */
const GradientText = React.forwardRef<HTMLSpanElement, GradientTextProps>(
    ({ className, children, from, to, dir = "to-r", style, ...props }, ref) => {

        // If specific colors are not provided, we use the global Tailwind class `gradient-text`
        if (!from && !to) {
            return (
                <span ref={ref} className={cn("gradient-text", className)} style={style} {...props}>
                    {children}
                </span>
            )
        }

        // Dynamic gradient logic via inline styles if custom colors are provided
        const directionMap = {
            "to-r": "90deg",
            "to-b": "180deg",
            "to-br": "135deg",
            "to-tr": "45deg",
        }

        const gradientStyle = {
            backgroundImage: `linear-gradient(${directionMap[dir]}, ${from || "var(--color-electric)"} 0%, ${to || "var(--color-accent)"} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            ...style,
        }

        return (
            <span
                ref={ref}
                className={cn("inline-block", className)}
                style={gradientStyle}
                {...props}
            >
                {children}
            </span>
        )
    }
)
GradientText.displayName = "GradientText"

export { GradientText }
