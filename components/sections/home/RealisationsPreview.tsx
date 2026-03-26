"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import { ArrowRight, ExternalLink, TrendingUp } from "lucide-react"

import { Badge, Button, SectionTitle } from "@/components/ui"
import { realisations, type Realisation } from "@/data/realisations"

function RealisationCard({
    project,
    isFeatured = false
}: {
    project: Realisation
    isFeatured?: boolean
}) {
    const shouldReduceMotion = useReducedMotion()

    return (
        <motion.div
            className={`group relative overflow-hidden rounded-3xl bg-white/5 ${isFeatured ? "min-h-[450px] md:min-h-[600px]" : "min-h-[320px]"
                }`}
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* Project Image */}
            <div className="absolute inset-0 transition-transform duration-700 ease-out-cubic group-hover:scale-105">
                <Image
                    src={project.imageUrl}
                    alt={project.mission}
                    fill
                    className="object-cover opacity-50 grayscale transition-all duration-500 group-hover:opacity-60 group-hover:grayscale-0"
                />
            </div>

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />

            {/* Content */}
            <div className="relative flex h-full flex-col p-6 md:p-8 lg:p-10">
                <div className="mb-4 flex items-center justify-between">
                    <Badge variant="outline">
                        {project.client}
                    </Badge>
                </div>

                <h3 className={`font-bold text-white mb-2 leading-tight ${isFeatured ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
                    }`}>
                    {project.mission}
                </h3>

                <p className={`mb-6 text-white/70 line-clamp-2 ${isFeatured ? "max-w-xl" : "max-w-md"}`}>
                    {project.description}
                </p>

                {/* Results Section for Featured */}
                {project.results && (
                    <div className="mb-8 flex flex-wrap gap-4 md:gap-8">
                        {project.results.map((result, idx) => (
                            <div key={idx} className="flex flex-col">
                                <span className="text-2xl font-bold text-accent md:text-3xl">{result.value}</span>
                                <span className="text-xs uppercase tracking-wider text-white/50">{result.label}</span>
                            </div>
                        ))}
                    </div>
                )}

                <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.slice(0, isFeatured ? 5 : 3).map((tag) => (
                        <Badge key={tag} variant="tech" className="bg-white/10 text-[10px] md:text-xs">
                            {tag}
                        </Badge>
                    ))}
                </div>

                {/* Hover Overlay Button */}
                <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm" />
                    <Button asChild size="lg" className="relative z-20 shadow-glow-accent">
                        <Link href={`/realisations#${project.id}`}>
                            Voir le projet
                            <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </motion.div>
    )
}

export function RealisationsPreview() {
    const featured = realisations.find(p => p.featured)
    const secondary = realisations.filter(p => !p.featured)

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    return (
        <section
            aria-label="Nos réalisations"
            className="relative bg-primary py-24 sm:py-32"
        >
            <div className="section-container relative z-10">
                <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row md:items-center">
                    <SectionTitle
                        title="Nos réalisations"
                        subtitle="Solutions innovantes et résultats tangibles pour les leaders du marché."
                        variant="inverse"
                        className="mb-0"
                    />
                    <Button asChild variant="secondary">
                        <Link href="/realisations" className="flex items-center gap-2">
                            Toutes nos réalisations
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8"
                >
                    {/* Featured project */}
                    {featured && (
                        <RealisationCard project={featured} isFeatured={true} />
                    )}

                    {/* Secondary projects stacked vertically */}
                    <div className="flex flex-col gap-6 lg:gap-8">
                        {secondary.map((project) => (
                            <RealisationCard key={project.id} project={project} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
