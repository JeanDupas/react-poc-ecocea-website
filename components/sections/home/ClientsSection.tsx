"use client"

import * as React from "react"
import { useReducedMotion } from "framer-motion"

import { SectionTitle } from "@/components/ui"
import { clients } from "@/data/clients"

function LogoPlaceholder({ name }: { name: string }) {
    return (
        <div className="flex h-20 w-48 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-4 shadow-sm backdrop-blur-sm transition-all duration-300 ease-out-cubic hover:border-white/20 hover:bg-white/10">
            <span className="text-xl font-bold tracking-tight text-white/50 transition-colors duration-300 group-hover:text-white">
                {name}
            </span>
        </div>
    )
}

export function ClientsSection() {
    const shouldReduceMotion = useReducedMotion()

    // We duplicate the clients array to create a seamless loop
    const duplicatedClients = [...clients, ...clients]

    return (
        <section
            aria-label="Nos clients"
            className="overflow-hidden bg-primary py-20 sm:py-24"
        >
            <div className="section-container mb-12">
                <SectionTitle
                    title="Ils nous font confiance"
                    subtitle="Accompagnement stratégique pour les leaders du retail et de l'industrie."
                    align="center"
                    variant="inverse"
                    className="mb-12"
                />
            </div>

            <div className="relative mx-auto max-w-[100vw]">
                {/* Fade masks on the edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-primary to-transparent md:w-48" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-primary to-transparent md:w-48" />

                {shouldReduceMotion ? (
                    /* Fallback grid for reduced motion preference */
                    <div className="section-container">
                        <div className="grid grid-cols-2 gap-4 place-items-center sm:grid-cols-3 md:grid-cols-6 opacity-60">
                            {clients.map((client, idx) => (
                                <div key={`${client.name}-${idx}`} className="group grayscale hover:grayscale-0 transition-all duration-300">
                                    <LogoPlaceholder name={client.name} />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    /* CSS animation marquee track */
                    <div className="flex w-max animate-marquee hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
                        <div className="flex gap-8 px-4">
                            {duplicatedClients.map((client, i) => (
                                <div
                                    key={`${client.name}-${i}`}
                                    className="group flex items-center justify-center opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                                >
                                    <LogoPlaceholder name={client.name} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
