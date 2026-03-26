import * as React from "react"
import { cn } from "@/lib/utils"

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
    orientation?: "horizontal" | "vertical"
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
    ({ className, orientation = "horizontal", ...props }, ref) => {
        return (
            <div
                ref={ref}
                role="separator"
                aria-orientation={orientation}
                className={cn(
                    "shrink-0",
                    orientation === "horizontal"
                        ? "h-[1px] w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent"
                        : "h-full w-[1px] bg-gradient-to-b from-transparent via-accent/30 to-transparent",
                    className
                )}
                {...props}
            />
        )
    }
)
Divider.displayName = "Divider"

export { Divider }
