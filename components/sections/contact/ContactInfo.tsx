"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { MapPin, Mail, Phone, Clock, Linkedin } from "lucide-react"

export function ContactInfo() {
    return (
        <div className="space-y-12">
            <div>
                <h3 className="text-2xl font-bold text-white mb-6">Nos bureaux</h3>
                <div className="space-y-6">
                    <div className="flex items-start gap-4 group">
                        <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-accent/20">
                            <MapPin className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                            <p className="text-white font-medium">Paris Office</p>
                            <p className="text-white/60 text-sm leading-relaxed">
                                42 Rue de la Paix<br />
                                75009 Paris, France
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                        <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-accent/20">
                            <Mail className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                            <p className="text-white font-medium">Email</p>
                            <a href="mailto:contact@ecocea.com" className="text-white/60 text-sm hover:text-accent transition-colors">
                                contact@ecocea.com
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                        <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-accent/20">
                            <Phone className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                            <p className="text-white font-medium">Téléphone</p>
                            <a href="tel:+33123456789" className="text-white/60 text-sm hover:text-accent transition-colors">
                                +33 (0)1 23 45 67 89
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-white mb-6">Horaires</h3>
                <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                        <p className="text-white font-medium">Lundi — Vendredi</p>
                        <p className="text-white/60 text-sm">09:00 - 18:00</p>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-white mb-6">Suivez-nous</h3>
                <div className="flex gap-4">
                    <a
                        href="https://linkedin.com/company/ecocea"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-accent/40 transition-all group"
                    >
                        <Linkedin className="h-6 w-6 text-white group-hover:text-accent" />
                    </a>
                </div>
            </div>
        </div>
    )
}
