"use client"

import * as React from "react"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import { Clock, CheckCircle, Users, Star } from "lucide-react"

import { useCountUp } from "@/hooks/useCountUp"

const stats = [
    {
        id: "experience",
        icon: Clock,
        endValue: 15,
        suffix: "+",
        label: "années d'expérience",
    },
    {
        id: "projects",
        icon: CheckCircle,
        endValue: 50,
        suffix: "+",
        label: "projets livrés",
    },
    {
        id: "clients",
        icon: Users,
        endValue: 20,
        suffix: "+",
        label: "clients grands comptes",
    },
    {
        id: "maintained",
        icon: Star,
        endValue: 100,
        suffix: "%",
        label: "projets maintenus",
    },
]

function StatItem({
    icon: Icon,
    endValue,
    suffix,
    label,
}: {
    icon: React.ElementType
    endValue: number
    suffix: string
    label: string
}) {
    // Duration 2500ms for a more dramatic entrance, starting when 10% in view
    const { count, ref } = useCountUp({ end: endValue, duration: 2500, startOnView: true })

    return (
        <div ref={ref as any} className="flex flex-col items-center text-center p-6">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-electric/10 text-electric ring-1 ring-electric/20">
                <Icon className="h-8 w-8" />
            </div>
            <div className="mb-2 flex items-baseline justify-center gap-1">
                <span className="text-4xl font-extrabold tracking-tight text-text-main md:text-5xl lg:text-6xl">
                    {count}
                </span>
                <span className="text-2xl font-bold text-electric md:text-3xl">{suffix}</span>
            </div>
            <p className="text-base font-medium text-text-muted md:text-lg">{label}</p>
        </div>
    )
}

export function StatsSection() {
    const shouldReduceMotion = useReducedMotion()

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
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    }

    return (
        <section
            aria-label="Chiffres clés"
            className="relative bg-light-bg py-24 sm:py-32"
        >
            <div className="section-container">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {stats.map((stat) => (
                        <motion.div key={stat.id} variants={itemVariants}>
                            <StatItem {...stat} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
