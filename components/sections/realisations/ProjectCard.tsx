"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { type Realisation } from "@/data/realisations"
import { Badge, Card } from "@/components/ui"

interface ProjectCardProps {
    project: Realisation
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
        >
            <Card className="group h-full flex flex-col overflow-hidden border-black/5 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl">
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                        src={project.imageUrl}
                        alt={project.client}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                        <div className="flex items-center gap-2 text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            Voir le projet
                            <ArrowUpRight className="h-5 w-5 text-accent" />
                        </div>
                    </div>
                    {/* Year Badge */}
                    <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-white/90 text-primary backdrop-blur-md border-none font-bold">
                            {project.year}
                        </Badge>
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                    <div className="mb-4">
                        <h4 className="text-secondary font-bold text-sm uppercase tracking-widest mb-2">
                            {project.client}
                        </h4>
                        <h3 className="text-2xl font-bold text-text-main group-hover:text-primary transition-colors">
                            {project.mission}
                        </h3>
                    </div>

                    <p className="text-text-muted mb-6 flex-1 line-clamp-2">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="tech" className="text-[10px] uppercase tracking-wider">
                                {tag}
                            </Badge>
                        ))}
                    </div>

                    {/* Mini Stats/Results if available */}
                    {project.results && project.results.length > 0 && (
                        <div className="pt-6 border-t border-black/5 grid grid-cols-2 gap-4">
                            {project.results.slice(0, 2).map((res, idx) => (
                                <div key={idx}>
                                    <p className="text-xl font-bold text-primary">{res.value}</p>
                                    <p className="text-[10px] text-text-muted uppercase font-medium">{res.label}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </Card>
        </motion.div>
    )
}
