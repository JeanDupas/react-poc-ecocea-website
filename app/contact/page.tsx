import { Metadata } from "next"
import { ContactWizard, ContactInfo } from "@/components/sections/contact"
import { ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
    title: "Contactez-nous | Ecocea Technologies",
    description: "Parlons de votre prochain défi technologique. Nos experts e-commerce et cloud sont à votre écoute pour qualifier vos besoins et vous accompagner vers la réussite.",
}

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Header Section */}
            <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 bg-primary overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-electric rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="section-container relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                            Prêt à <span className="text-secondary">innover</span> ?
                        </h1>
                        <p className="text-lg sm:text-xl text-white/70 text-balance">
                            Dites-nous en plus sur vos ambitions. Notre équipe d'experts est prête à transformer vos défis techniques en succès commerciaux.
                        </p>
                    </div>
                </div>
            </section>

            {/* Form & Info Section */}
            <section className="py-20 lg:py-32">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                        {/* Left: Form */}
                        <div className="lg:col-span-8">
                            <div className="bg-white rounded-[2rem] shadow-2xl shadow-black/5 border border-black/5 p-8 sm:p-12">
                                <ContactWizard />
                            </div>
                        </div>

                        {/* Right: Info */}
                        <div className="lg:col-span-4 lg:pt-8">
                            <div className="bg-primary rounded-[2rem] p-10 sm:p-12 shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                <ContactInfo />

                                {/* Trust Badge */}
                                <div className="mt-12 pt-12 border-t border-white/10">
                                    <div className="flex items-center gap-4 text-white/80">
                                        <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center shrink-0">
                                            <ShieldCheck className="h-6 w-6 text-primary" />
                                        </div>
                                        <p className="text-sm">
                                            Données sécurisées et conformes au RGPD. Vos informations ne sont jamais partagées.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
