"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, Home } from "lucide-react"

import { services as servicesData } from "@/data/services"
import { cn } from "@/lib/utils"

export function ServicesHero() {
    return (
        <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden bg-primary">
            {/* Background Illustration / Decoration */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-electric/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="section-container relative z-10">
                {/* Breadcrumb */}
                <nav className="mb-8 flex items-center space-x-2 text-sm text-white/50" aria-label="Breadcrumb">
                    <Link href="/" className="flex items-center hover:text-accent transition-colors">
                        <Home className="mr-1 h-4 w-4" />
                        Accueil
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-white font-medium">Nos Services</span>
                </nav>

                <div className="max-w-3xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
                    >
                        Nos <span className="text-accent">Expertises</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="text-lg sm:text-xl text-white/70 leading-relaxed text-balance"
                    >
                        De la stratégie e-commerce à la maintenance applicative, nous déployons les meilleures stacks technologiques pour propulser votre business.
                    </motion.p>
                </div>

                {/* Anchor Navigation */}
                <div className="mt-16 lg:mt-24">
                    <div className="flex flex-wrap gap-4 border-b border-white/10 pb-4">
                        {servicesData.map((service) => (
                            <Link
                                key={service.id}
                                href={`#${service.id}`}
                                className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:border-accent hover:text-white transition-all duration-300"
                            >
                                <service.icon className="h-4 w-4 group-hover:text-accent transition-colors" />
                                <span className="font-medium">{service.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
