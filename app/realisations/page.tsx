"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { realisations, type Category } from "@/data/realisations"
import { ProjectCard, ProjectFilters } from "@/components/sections/realisations"
import { SectionTitle } from "@/components/ui"

// Note: Metadata must be in a separate layout or handled via a server component wrapper
// but for now let's focus on the interactive part.
// I will move metadata to a layout.tsx if needed, or use a separate client component.
// For simplicity and interaction, I'll keep the page as client and assume SEO is handled.

export default function RealisationsPage() {
    const [activeCategory, setActiveCategory] = React.useState<Category | "all">("all")

    const filteredProjects = React.useMemo(() => {
        if (activeCategory === "all") return realisations
        return realisations.filter(p => p.categories.includes(activeCategory))
    }, [activeCategory])

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 bg-primary overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-electric rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="section-container relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
                    >
                        Nos <span className="text-secondary">Réalisations</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mx-auto max-w-2xl text-lg sm:text-xl text-white/70 text-balance"
                    >
                        Découvrez comment nous accompagnons nos clients dans leurs défis technologiques les plus critiques.
                    </motion.p>
                </div>
            </section>

            {/* Grid & Filters Section */}
            <section className="py-20 sm:py-28">
                <div className="section-container">
                    <ProjectFilters
                        activeCategory={activeCategory}
                        onCategoryChange={setActiveCategory}
                        projectCount={filteredProjects.length}
                    />

                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-text-muted text-lg">
                                Aucun projet ne correspond à cette catégorie pour le moment.
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </main>
    )
}
