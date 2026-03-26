import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const sectionTitleVariants = cva("flex flex-col space-y-4", {
    variants: {
        align: {
            left: "items-start text-left",
            center: "items-center text-center",
            right: "items-end text-right",
        },
        variant: {
            default: "text-text-main",
            inverse: "text-white",
        }
    },
    defaultVariants: {
        align: "left",
        variant: "default",
    },
})

export interface SectionTitleProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof sectionTitleVariants> {
    title: React.ReactNode
    subtitle?: React.ReactNode
    decorated?: boolean
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

const SectionTitle = React.forwardRef<HTMLDivElement, SectionTitleProps>(
    (
        { className, title, subtitle, align, variant, decorated = true, as: Tag = "h2", ...props },
        ref
    ) => {
        return (
            <div
                ref={ref}
                className={cn(sectionTitleVariants({ align, variant }), className)}
                {...props}
            >
                <div className="space-y-4">
                    <Tag className="text-3xl font-bold tracking-tight sm:text-4xl">
                        {title}
                    </Tag>
                    {decorated && (
                        <div
                            className={cn(
                                "h-1.5 w-20 rounded-full bg-gradient-cta",
                                align === "center" && "mx-auto"
                            )}
                        />
                    )}
                </div>
                {subtitle && (
                    <p className={cn(
                        "max-w-2xl text-lg",
                        variant === "inverse" ? "text-white/70" : "text-text-muted"
                    )}>
                        {subtitle}
                    </p>
                )}
            </div>
        )
    }
)
SectionTitle.displayName = "SectionTitle"

export { SectionTitle }
