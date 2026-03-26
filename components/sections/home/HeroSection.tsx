"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import { ArrowDown } from "lucide-react"

import { Button, GradientText } from "@/components/ui"
import { cn } from "@/lib/utils"

export function HeroSection() {
    const shouldReduceMotion = useReducedMotion()

    // Base animation variants for staggering
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
    }

    return (
        <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-20">
            {/* Background patterns (dot-grid and grain from globals.css) */}
            <div className="absolute inset-0 z-0 dot-grid opacity-50" />
            <div className="absolute inset-0 z-0 grain" />

            {/* Radial glow centered on the hero */}
            <div className="absolute left-1/2 top-1/2 z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 opacity-50 blur-[100px]" />

            <div className="section-container relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col items-center space-y-8"
                >
                    {/* Animated Badge */}
                    <motion.div variants={itemVariants}>
                        <div className="inline-flex items-center rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-sm font-medium text-accent backdrop-blur-sm">
                            <span className="mr-2">🚀</span> ESN spécialisée e-commerce & IA
                        </div>
                    </motion.div>

                    {/* H1 Title with specific words highlighted */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
                    >
                        Votre partenaire tech pour des plateformes{" "}
                        <GradientText>e-commerce</GradientText> qui{" "}
                        <GradientText>performent</GradientText>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={itemVariants}
                        className="max-w-3xl text-lg text-text-muted sm:text-xl leading-relaxed"
                    >
                        Nous concevons des expériences digitales sur-mesure alliant
                        expertise technique, innovation IA et accompagnement personnalisé.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col w-full sm:w-auto sm:flex-row items-center gap-4 pt-4"
                    >
                        <Button size="lg" asChild className="w-full sm:w-auto">
                            <Link href="/realisations">Voir nos réalisations</Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                            <Link href="/contact">Discuter du projet</Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] font-medium uppercase tracking-widest text-text-muted">
                    Découvrir
                </span>
                <ArrowDown className="h-5 w-5 text-accent animate-bounce" />
            </motion.div>
        </section>
    )
}
