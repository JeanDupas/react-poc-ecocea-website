"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Card, Badge, Button, SectionTitle } from "@/components/ui"
import { services, type ServiceData } from "@/data/services"
import { clamp } from "@/lib/utils"

function ServiceCard({ service }: { service: ServiceData }) {
    const shouldReduceMotion = useReducedMotion()
    const cardRef = React.useRef<HTMLDivElement>(null)
    const [transform, setTransform] = React.useState("")
    const [isHovered, setIsHovered] = React.useState(false)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (shouldReduceMotion || !cardRef.current) return

        const rect = cardRef.current.getBoundingClientRect()
        const width = rect.width
        const height = rect.height

        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5

        // Max rotation of 10 degrees
        const x = clamp(xPct * 20, -10, 10)
        const y = clamp(yPct * -20, -10, 10)

        setTransform(`perspective(1000px) rotateX(${y}deg) rotateY(${x}deg) scale3d(1.02, 1.02, 1.02)`)
    }

    const handleMouseLeave = () => {
        if (shouldReduceMotion) return
        setTransform("")
        setIsHovered(false)
    }

    const { icon: Icon, title, shortDescription, href, tags, color } = service

    return (
        <Card
            ref={cardRef}
            variant="glass"
            className="group relative flex h-full flex-col p-8 transition-all duration-300 ease-out-cubic"
            style={{
                transform: transform || "none",
                boxShadow: isHovered && !shouldReduceMotion ? `0 20px 40px -10px ${color}40` : undefined
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
        >
            <div
                className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ring-white/10 transition-colors duration-300"
                style={{
                    backgroundColor: `${color}15`,
                    color: color,
                    boxShadow: `0 0 20px ${color}30`,
                }}
            >
                <Icon className="h-7 w-7" />
            </div>

            <h3 className="mb-3 text-2xl font-bold text-white">{title}</h3>
            <p className="mb-6 text-text-muted">{shortDescription}</p>

            <div className="mb-8 flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <Badge key={tag} variant="tech">
                        {tag}
                    </Badge>
                ))}
            </div>

            <div className="mt-auto">
                <Link
                    href={href}
                    className="inline-flex items-center gap-2 font-medium transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm"
                    style={{ color }}
                    aria-label={`En savoir plus sur ${title}`}
                >
                    En savoir plus
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </Card>
    )
}

export function ServicesPreview() {
    const shouldReduceMotion = useReducedMotion()

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    }

    return (
        <section
            aria-label="Aperçu des services"
            className="relative bg-primary py-24 sm:py-32"
        >
            {/* Background elements */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -right-1/4 top-0 h-[500px] w-[500px] rounded-full bg-electric/10 blur-[120px]" />
                <div className="absolute -left-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px]" />
            </div>

            <div className="section-container relative z-10">
                <SectionTitle
                    title="Nos services"
                    subtitle="Des solutions sur-mesure pour transformer vos ambitions en réalité digitale."
                    align="center"
                    variant="inverse"
                    className="mb-16 md:mb-24"
                />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8"
                >
                    {services.map((service) => (
                        <motion.div key={service.id} variants={itemVariants} className="h-full">
                            <ServiceCard service={service} />
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-16 flex justify-center"
                >
                    <Button asChild variant="secondary" size="lg">
                        <Link href="/services">
                            Découvrir tous nos services
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
