"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { type Category } from "@/data/realisations"
import { cn } from "@/lib/utils"

interface ProjectFiltersProps {
    activeCategory: Category | "all"
    onCategoryChange: (category: Category | "all") => void
    projectCount: number
}

const categories: { id: Category | "all"; label: string }[] = [
    { id: "all", label: "Tout" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "mobile", label: "Mobile" },
    { id: "cloud", label: "Cloud" },
    { id: "relation-client", label: "Relation Client" },
]

export function ProjectFilters({ activeCategory, onCategoryChange, projectCount }: ProjectFiltersProps) {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
            <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => onCategoryChange(cat.id)}
                        className={cn(
                            "relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                            activeCategory === cat.id
                                ? "text-white"
                                : "text-text-muted hover:text-text-main bg-white border border-black/5 hover:border-black/10 shadow-sm"
                        )}
                    >
                        {activeCategory === cat.id && (
                            <motion.div
                                layoutId="active-pill"
                                className="absolute inset-0 bg-primary rounded-full z-0"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10">{cat.label}</span>
                    </button>
                ))}
            </div>

            <div className="text-text-muted font-medium">
                <span className="text-primary font-bold">{projectCount}</span> projet{projectCount > 1 ? "s" : ""} affiché{projectCount > 1 ? "s" : ""}
            </div>
        </div>
    )
}
