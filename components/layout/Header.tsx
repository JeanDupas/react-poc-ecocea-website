"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { useScrollEffect } from "@/hooks/useScrollEffect"
import { Button, GradientText } from "@/components/ui"

const NAV_LINKS = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/realisations", label: "Réalisations" },
    { href: "/expertise", label: "Expertise" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
]

export function Header() {
    const scrolled = useScrollEffect(80)
    const pathname = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

    // Prevent scrolling when mobile menu is open
    React.useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [mobileMenuOpen])

    return (
        <header
            className={cn(
                "fixed left-0 right-0 top-0 z-50 flex h-20 items-center transition-all duration-300",
                scrolled
                    ? "bg-primary/95 shadow-[0_4px_30px_rgba(0,0,0,0.5)] backdrop-blur-md"
                    : "bg-transparent"
            )}
        >
            <div className="section-container flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-1 text-2xl font-bold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <span>Ecocea</span>
                    <GradientText>Tech</GradientText>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 md:flex">
                    <ul className="flex items-center gap-6">
                        {NAV_LINKS.map((link) => {
                            const isActive = pathname === link.href
                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "group relative text-sm font-medium transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm",
                                            isActive ? "text-white" : "text-text-muted"
                                        )}
                                    >
                                        {link.label}
                                        <span
                                            className={cn(
                                                "absolute -bottom-1.5 left-0 h-0.5 bg-accent transition-all duration-300",
                                                isActive ? "w-full" : "w-0 group-hover:w-full"
                                            )}
                                        />
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>

                    <Button asChild>
                        <Link href="/contact">Discutons de votre projet</Link>
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    type="button"
                    className="flex items-center justify-center p-2 text-text-muted hover:text-white md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-expanded={mobileMenuOpen}
                    aria-label="Toggle navigation menu"
                >
                    {mobileMenuOpen ? (
                        <X className="h-6 w-6" aria-hidden="true" />
                    ) : (
                        <Menu className="h-6 w-6" aria-hidden="true" />
                    )}
                </button>
            </div>

            {/* Mobile Navigation Drawer */}
            <div
                className={cn(
                    "fixed inset-0 top-20 z-40 flex flex-col bg-primary/98 px-6 py-8 backdrop-blur-xl transition-all duration-300 md:hidden",
                    mobileMenuOpen
                        ? "translate-y-0 opacity-100 visible"
                        : "-translate-y-4 opacity-0 invisible"
                )}
            >
                <nav className="flex flex-1 flex-col justify-between">
                    <ul className="flex flex-col space-y-6">
                        {NAV_LINKS.map((link) => {
                            const isActive = pathname === link.href
                            return (
                                <li key={link.href} className="border-b border-white/5 pb-4">
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={cn(
                                            "text-xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm",
                                            isActive ? "text-accent" : "text-text-muted hover:text-white"
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>

                    <div className="mt-8 flex flex-col items-center pb-safe">
                        <Button asChild className="w-full" size="lg">
                            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                                Discutons de votre projet
                            </Link>
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    )
}
