import * as React from "react"
import Link from "next/link"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

import { Divider, GradientText } from "@/components/ui"

const FOOTER_LINKS = {
    navigation: [
        { href: "/", label: "Accueil" },
        { href: "/services", label: "Services" },
        { href: "/realisations", label: "Réalisations" },
        { href: "/expertise", label: "Expertise" },
    ],
    services: [
        { href: "/services#e-commerce", label: "E-commerce" },
        { href: "/services#cloud", label: "Cloud (AWS/Azure)" },
        { href: "/services#sur-mesure", label: "Développement sur-mesure" },
        { href: "/services#tma", label: "TMA & Support" },
    ],
}

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative bg-gradient-to-b from-primary to-black text-white">
            <Divider />

            <div className="section-container pb-8 pt-16">
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

                    {/* Brand Column */}
                    <div className="flex flex-col space-y-4">
                        <Link
                            href="/"
                            className="flex items-center gap-1 text-2xl font-bold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                            aria-label="Accueil Ecocea"
                        >
                            <span>Ecocea</span>
                            <GradientText>Tech</GradientText>
                        </Link>
                        <p className="max-w-xs text-sm text-text-muted leading-relaxed">
                            Votre partenaire tech e-commerce & IA.
                            <br />
                            Expertise Java, ReactJS et architectures Cloud.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-text-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                                aria-label="LinkedIn d'Ecocea"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-text-muted transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                                aria-label="GitHub d'Ecocea"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div>
                        <h3 className="mb-6 text-sm font-semibold tracking-wider text-white uppercase">
                            Navigation
                        </h3>
                        <ul className="space-y-3 text-sm">
                            {FOOTER_LINKS.navigation.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-text-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="mb-6 text-sm font-semibold tracking-wider text-white uppercase">
                            Nos services
                        </h3>
                        <ul className="space-y-3 text-sm">
                            {FOOTER_LINKS.services.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-text-muted transition-colors hover:text-electric focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="mb-6 text-sm font-semibold tracking-wider text-white uppercase">
                            Contact
                        </h3>
                        <ul className="space-y-4 text-sm text-text-muted">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 shrink-0 text-accent" />
                                <span>
                                    12 rue de la Tech
                                    <br />
                                    75009 Paris, France
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 shrink-0 text-accent" />
                                <a
                                    href="tel:+33100000000"
                                    className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                                >
                                    +33 1 00 00 00 00
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 shrink-0 text-accent" />
                                <a
                                    href="mailto:contact@ecocea.com"
                                    className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                                >
                                    contact@ecocea.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row text-xs text-text-muted">
                    <p>© {currentYear} Ecocea Technologies. Tous droits réservés.</p>
                    <div className="flex gap-4">
                        <Link
                            href="/mentions-legales"
                            className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                        >
                            Mentions Légales
                        </Link>
                        <Link
                            href="/confidentialite"
                            className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                        >
                            Confidentialité
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
