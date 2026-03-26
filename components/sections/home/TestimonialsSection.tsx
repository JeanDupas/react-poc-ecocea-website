"use client"

import * as React from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"

import { SectionTitle, Card } from "@/components/ui"
import { testimonials } from "@/data/testimonials"
import { cn } from "@/lib/utils"

export function TestimonialsSection() {
    const [index, setIndex] = React.useState(0)
    const [isPaused, setIsPaused] = React.useState(false)
    const [direction, setDirection] = React.useState(0) // -1 for left, 1 for right
    const shouldReduceMotion = useReducedMotion()

    const next = React.useCallback(() => {
        setDirection(1)
        setIndex((prev) => (prev + 1) % testimonials.length)
    }, [])

    const prev = React.useCallback(() => {
        setDirection(-1)
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }, [])

    // Auto-play logic
    React.useEffect(() => {
        if (isPaused || shouldReduceMotion) return
        const timer = setInterval(next, 5000)
        return () => clearInterval(timer)
    }, [isPaused, shouldReduceMotion, next])

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
            scale: 0.95
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0,
            scale: 0.95
        })
    }

    const swipeConfidenceThreshold = 10000
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity
    }

    return (
        <section
            aria-label="Témoignages clients"
            className="relative bg-primary py-24 sm:py-32 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={() => setIsPaused(false)}
        >
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-electric/20 rounded-full blur-[100px]" />
            </div>

            <div className="section-container relative z-10">
                <SectionTitle
                    title="Ce que disent nos clients"
                    subtitle="Ils nous ont fait confiance pour leurs projets les plus ambitieux."
                    align="center"
                    variant="inverse"
                    className="mb-16 md:mb-24"
                />

                <div className="relative mx-auto max-w-4xl">
                    {/* Carrousel Wrapper */}
                    <div className="relative h-[480px] sm:h-[400px] flex items-center justify-center">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={index}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.4 },
                                    scale: { duration: 0.4 }
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = swipePower(offset.x, velocity.x)

                                    if (swipe < -swipeConfidenceThreshold) {
                                        next()
                                    } else if (swipe > swipeConfidenceThreshold) {
                                        prev()
                                    }
                                }}
                                className="absolute w-full px-4 cursor-grab active:cursor-grabbing"
                            >
                                <Card variant="glass" className="relative p-10 sm:p-14 text-center group">
                                    <Quote className="absolute top-6 left-6 h-12 w-12 text-accent/10 sm:h-20 sm:w-20 sm:top-8 sm:left-8 transition-colors group-hover:text-accent/20" />

                                    <div className="mb-6 flex justify-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={cn(
                                                    "h-5 w-5",
                                                    i < (testimonials[index].stars || 0)
                                                        ? "fill-accent text-accent"
                                                        : "text-white/10"
                                                )}
                                            />
                                        ))}
                                    </div>

                                    <blockquote className="relative text-xl sm:text-2xl md:text-3xl font-medium italic text-white mb-10 leading-relaxed">
                                        &ldquo;{testimonials[index].quote}&rdquo;
                                    </blockquote>

                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center gap-4 text-left">
                                            <div className="h-14 w-14 rounded-full bg-gradient-cta p-[2px] shadow-glow-accent">
                                                <div className="h-full w-full rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl uppercase">
                                                    {testimonials[index].author.split(' ').map(n => n[0]).join('')}
                                                </div>
                                            </div>
                                            <div>
                                                <p className="font-bold text-white text-lg sm:text-xl">{testimonials[index].author}</p>
                                                <p className="text-white/60 text-sm sm:text-base">
                                                    {testimonials[index].role}, <span className="text-accent font-semibold">{testimonials[index].company}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Desktop Navigation Buttons */}
                    <div className="hidden lg:block">
                        <button
                            onClick={prev}
                            className="absolute left-[-100px] top-1/2 -translate-y-1/2 p-5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-accent/50 hover:text-accent transition-all duration-300 shadow-lg backdrop-blur-sm"
                            aria-label="Témoignage précédent"
                        >
                            <ChevronLeft className="h-8 w-8" />
                        </button>
                        <button
                            onClick={next}
                            className="absolute right-[-100px] top-1/2 -translate-y-1/2 p-5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-accent/50 hover:text-accent transition-all duration-300 shadow-lg backdrop-blur-sm"
                            aria-label="Témoignage suivant"
                        >
                            <ChevronRight className="h-8 w-8" />
                        </button>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-4 mt-16">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    setDirection(i > index ? 1 : -1)
                                    setIndex(i)
                                }}
                                className={cn(
                                    "h-2.5 transition-all duration-500 rounded-full",
                                    index === i
                                        ? "w-10 bg-accent shadow-glow-accent"
                                        : "w-2.5 bg-white/10 hover:bg-white/30"
                                )}
                                aria-label={`Aller au témoignage ${i + 1}`}
                                aria-current={index === i ? "true" : "false"}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
