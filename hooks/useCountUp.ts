import { useState, useEffect, useRef } from "react"
import { useReducedMotion } from "framer-motion"

export interface UseCountUpOptions {
    end: number
    duration?: number // ms, default 2000
    startOnView?: boolean // default true
}

// easeOutCubic function for natural deceleration
const easeOutCubic = (t: number): number => {
    return 1 - Math.pow(1 - t, 3)
}

export function useCountUp({ end, duration = 2000, startOnView = true }: UseCountUpOptions) {
    const [count, setCount] = useState(0)
    const [hasAnimated, setHasAnimated] = useState(false)
    const elementRef = useRef<HTMLElement | null>(null)
    const shouldReduceMotion = useReducedMotion()

    useEffect(() => {
        // If reduced motion is preferred, immediately set to end value
        if (shouldReduceMotion) {
            // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional: immediately set final value to skip animation when reduced-motion is preferred
            setCount(end)
            setHasAnimated(true)
            return
        }

        const element = elementRef.current

        let animationFrameId: number
        let startTime: number | null = null

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = timestamp - startTime

            if (progress < duration) {
                // Calculate current value based on easing
                const progressRatio = progress / duration
                const easedProgress = easeOutCubic(progressRatio)
                setCount(Math.min(Math.floor(end * easedProgress), end))
                animationFrameId = requestAnimationFrame(animate)
            } else {
                // Animation complete
                setCount(end)
                setHasAnimated(true)
            }
        }

        const startAnimation = () => {
            if (!hasAnimated) {
                animationFrameId = requestAnimationFrame(animate)
            }
        }

        let observer: IntersectionObserver | null = null

        if (startOnView && element && !hasAnimated) {
            observer = new IntersectionObserver(
                (entries) => {
                    const [entry] = entries
                    if (entry.isIntersecting) {
                        startAnimation()
                        // Disconnect observer once triggered
                        if (observer) {
                            observer.disconnect()
                        }
                    }
                },
                { threshold: 0.1 } // Start when 10% visible
            )

            observer.observe(element)
        } else if (!startOnView && !hasAnimated) {
            startAnimation()
        }

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId)
            }
            if (observer) {
                observer.disconnect()
            }
        }
    }, [end, duration, startOnView, hasAnimated, shouldReduceMotion])

    return { count, ref: elementRef }
}
