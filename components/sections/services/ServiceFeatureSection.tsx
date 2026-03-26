"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { CheckCircle2, ArrowRight } from "lucide-react"

import { Badge, Button } from "@/components/ui"
import { services, type ServiceId } from "@/data/services"
import { cn } from "@/lib/utils"

interface ServiceFeatureSectionProps {
    id: ServiceId
    index: number
}

export function ServiceFeatureSection({ id, index }: ServiceFeatureSectionProps) {
    const service = services.find(s => s.id === id)
    const isEven = index % 2 === 0
    const shouldReduceMotion = useReducedMotion()

    if (!service) return null

    return (
        <section
            id={service.id}
            className={cn(
                "relative py-24 sm:py-32 overflow-hidden",
                isEven ? "bg-white" : "bg-light-bg"
            )}
        >
            <div className="section-container">
                <div className={cn(
                    "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center",
                    !isEven && "lg:direction-rtl" // Note: This is an architectural hack, better to use flex-row-reverse
                )}>
                    {/* Content Side */}
                    <div className={cn(
                        "order-2 lg:order-none",
                        !isEven && "lg:order-2"
                    )}>
                        <motion.div
                            initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <Badge className="mb-6 bg-primary/5 text-primary border-primary/10">
                                {service.title}
                            </Badge>

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-main mb-8 leading-tight">
                                {service.details.title}
                            </h2>

                            <div className="space-y-6 mb-10">
                                {service.fullDescription.map((paragraph, idx) => (
                                    <p key={idx} className="text-lg text-text-muted leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            {/* Features List */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {service.details.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0" />
                                        <span className="text-text-main font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mb-10 flex flex-wrap gap-2">
                                {service.details.techStack.map((tech) => (
                                    <Badge key={tech} variant="tech" className="bg-primary/5 text-primary border-primary/10">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>

                            <Button asChild size="lg" className="shadow-lg">
                                <Link href="/contact" className="flex items-center gap-2">
                                    Discuter de mon projet
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </motion.div>
                    </div>

                    {/* Image Side */}
                    <div className={cn(
                        "order-1 lg:order-none",
                        !isEven && "lg:order-1"
                    )}>
                        <motion.div
                            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative group"
                        >
                            <div
                                className="absolute -inset-4 bg-gradient-to-tr rounded-[2.5rem] opacity-20 blur-2xl transition-all duration-500 group-hover:opacity-30"
                                style={{ backgroundImage: `linear-gradient(to tr, ${service.color}, transparent)` }}
                            />
                            <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3] shadow-2xl border border-black/5 bg-white">
                                <Image
                                    src={service.imageUrl}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Decorative badge */}
                            <div className="absolute -bottom-6 -right-6 lg:-right-12 p-6 bg-white rounded-2xl shadow-xl border border-black/5 flex items-center gap-4 animate-fade-up">
                                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                                    <service.icon className="h-6 w-6 text-accent" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-text-main">15+</p>
                                    <p className="text-xs text-text-muted uppercase tracking-widest">Ans d&apos;expertise</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
