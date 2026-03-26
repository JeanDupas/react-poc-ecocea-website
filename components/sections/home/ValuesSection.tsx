"use client"

import * as React from "react"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import { MapPin, Sparkles, Shield, Zap } from "lucide-react"

import { SectionTitle } from "@/components/ui"
import { cn } from "@/lib/utils"

const values = [
    {
        icon: MapPin,
        title: "Proximité",
        description: "Équipe parisienne, contacts dédiés et réactivité garantie. Nous sommes à vos côtés à chaque étape de votre croissance.",
        color: "from-blue-400 to-blue-600",
    },
    {
        icon: Sparkles,
        title: "Innovation IA",
        description: "Intégration stratégique de l'intelligence artificielle pour automatiser vos processus et doper vos performances e-commerce.",
        color: "from-accent to-emerald-500",
        isNew: true,
    },
    {
        icon: Shield,
        title: "Qualité",
        description: "Code review rigoureuse, tests automatisés et audits approfondis. Nous ne faisons aucun compromis sur la robustesse de vos solutions.",
        color: "from-purple-500 to-electric",
    },
    {
        icon: Zap,
        title: "Agilité",
        description: "Sprints courts, livraisons fréquentes et adaptation constante. Votre projet évolue en temps réel avec vos besoins business.",
        color: "from-orange-400 to-red-500",
    },
]

export function ValuesSection() {
    const shouldReduceMotion = useReducedMotion()

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
    }

    return (
        <section
            aria-label="Nos valeurs et pourquoi nous choisir"
            className="bg-light-bg py-24 sm:py-32"
        >
            <div className="section-container">
                <SectionTitle
                    title="Pourquoi choisir Ecocea Tech ?"
                    subtitle="Plus qu'une ESN, nous sommes votre partenaire d'innovation technologique."
                    align="center"
                    className="mb-16 md:mb-24"
                />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {values.map((value, idx) => (
                        <motion.div
                            key={value.title}
                            variants={itemVariants}
                            className="group relative flex flex-col items-center text-center p-8 rounded-3xl bg-white border border-black/5 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                        >
                            {/* Icon Container with Gradient Background */}
                            <div className={cn(
                                "relative mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
                                value.color
                            )}>
                                <value.icon className="h-10 w-10 text-white" />

                                {value.isNew && (
                                    <span className="absolute -top-2 -right-2 flex h-6 w-12 items-center justify-center rounded-full bg-primary text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                                        New
                                    </span>
                                )}

                                {/* Subtle pulse effect for the icon container */}
                                <div className={cn(
                                    "absolute inset-0 rounded-2xl opacity-20 group-hover:animate-ping",
                                    value.color
                                )} />
                            </div>

                            <h3 className="mb-4 text-xl font-bold text-text-main">
                                {value.title}
                            </h3>

                            <p className="text-text-muted leading-relaxed">
                                {value.description}
                            </p>

                            {/* Decorative background number */}
                            <span className="absolute bottom-4 right-6 text-6xl font-black text-black/[0.03] select-none">
                                0{idx + 1}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
