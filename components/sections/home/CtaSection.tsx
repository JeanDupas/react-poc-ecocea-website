"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui"

export function CtaSection() {
    const shouldReduceMotion = useReducedMotion()

    return (
        <section
            aria-label="Appel à l'action final"
            className="relative py-20 sm:py-28 overflow-hidden"
        >
            {/* Animated Gradient Background */}
            <div
                className="absolute inset-0 bg-gradient-cta animate-gradient-shift"
                style={{ backgroundSize: "200% 200%" }}
            />

            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
                <div className="absolute top-[-10%] left-[-5%] w-[40%] aspect-square rounded-full border border-white/20" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] aspect-square rounded-full border border-white/20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12" />
            </div>

            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mx-auto max-w-4xl text-center"
                >
                    <h2 className="mb-6 text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl text-balance">
                        Prêt à transformer votre expérience digitale ?
                    </h2>

                    <p className="mx-auto mb-10 max-w-2xl text-lg font-medium text-primary/80 sm:text-xl text-balance">
                        Parlons de votre projet — premier échange offert, sans engagement.
                        Nos experts sont prêts à relever vos défis les plus complexes.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button
                            asChild
                            size="lg"
                            className="h-14 px-8 text-lg bg-primary text-white hover:bg-primary/90 shadow-xl"
                        >
                            <Link href="/contact" className="flex items-center gap-2">
                                <MessageSquare className="h-5 w-5" />
                                Parlons de votre projet
                            </Link>
                        </Button>

                        <Button
                            asChild
                            variant="ghost"
                            size="lg"
                            className="h-14 px-8 text-lg text-primary hover:bg-white/10"
                        >
                            <Link href="/services" className="flex items-center gap-2">
                                Explorer nos services
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
