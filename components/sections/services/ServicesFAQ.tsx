"use client"

import * as React from "react"
import * as Accordion from "@radix-ui/react-accordion"
import { ChevronDown, HelpCircle } from "lucide-react"
import { motion } from "framer-motion"

import { SectionTitle } from "@/components/ui"
import { cn } from "@/lib/utils"

const faqs = [
    {
        question: "Quel est votre délai moyen de mise en production ?",
        answer: "Pour un projet e-commerce type, nous comptons généralement entre 3 et 6 mois selon la complexité des intégrations (PIM, ERP). Pour des modules spécifiques ou des audits, l'intervention peut durer de 2 à 4 semaines."
    },
    {
        question: "Comment gérez-vous la transition vers une nouvelle infrastructure Cloud ?",
        answer: "Nous utilisons une approche 'Cloud Native' sécurisée. Nous auditons d'abord votre existant, créons une landing zone automatisée (IaC), puis effectuons une migration progressive par services pour garantir une interruption de service minimale."
    },
    {
        question: "Proposez-vous un support 24/7 pour la maintenance ?",
        answer: "Oui, nous proposons des contrats de TMA (Tierce Maintenance Applicative) avec des SLA (Service Level Agreements) garantis. Selon vos besoins critiques, nous pouvons mettre en place une astreinte technique 24h/24 et 7j/7."
    },
    {
        question: "Pouvez-vous intervenir sur un projet déjà commencé par une autre équipe ?",
        answer: "Absolument. C'est l'une de nos spécialités. Nous commençons par un audit technique approfondi pour évaluer la qualité du code et la dette technique, puis nous définissons ensemble un plan de reprise ou de refonte progressive."
    }
]

export function ServicesFAQ() {
    return (
        <section className="bg-white py-24 sm:py-32">
            <div className="section-container max-w-4xl">
                <SectionTitle
                    title="Questions Fréquentes"
                    subtitle="Tout ce que vous devez savoir sur notre accompagnement et nos process."
                    align="center"
                    className="mb-16"
                />

                <Accordion.Root
                    type="single"
                    collapsible
                    className="space-y-4"
                >
                    {faqs.map((faq, idx) => (
                        <Accordion.Item
                            key={idx}
                            value={`item-${idx}`}
                            className="group border border-black/5 rounded-2xl overflow-hidden hover:border-accent/30 transition-colors"
                        >
                            <Accordion.Header>
                                <Accordion.Trigger className="flex w-full items-center justify-between p-6 text-left text-lg font-bold text-text-main group-state-open:bg-primary/5 transition-all">
                                    <span className="flex items-center gap-4">
                                        <HelpCircle className="h-5 w-5 text-accent opacity-50 group-hover:opacity-100 transition-opacity" />
                                        {faq.question}
                                    </span>
                                    <ChevronDown className="h-5 w-5 text-text-muted transition-transform duration-300 group-state-open:rotate-180" />
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content className="overflow-hidden data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up bg-primary/5 text-text-muted">
                                <div className="p-6 pt-0 leading-relaxed max-w-3xl">
                                    {faq.answer}
                                </div>
                            </Accordion.Content>
                        </Accordion.Item>
                    ))}
                </Accordion.Root>
            </div>
        </section>
    )
}
