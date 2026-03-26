"use client"

import * as React from "react"
import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingCart, Smartphone, Cloud, Search, MessageSquare, ChevronRight, ChevronLeft, Loader2, CheckCircle2 } from "lucide-react"

import { Button, Card, Badge } from "@/components/ui"
import { cn } from "@/lib/utils"

// --- SCHEMAS ---

const step1Schema = z.object({
    projectType: z.enum(["ecommerce", "mobile", "cloud", "audit", "other"], {
        required_error: "Veuillez sélectionner un type de projet",
    }),
})

const step2Schema = z.object({
    budget: z.string().min(1, "Veuillez sélectionner un budget"),
    deadline: z.string().min(1, "Veuillez sélectionner un délai"),
    description: z.string().min(10, "Veuillez décrire votre projet (min 10 caractères)"),
})

const step3Schema = z.object({
    firstName: z.string().min(2, "Prénom requis"),
    lastName: z.string().min(2, "Nom requis"),
    email: z.string().email("Email invalide"),
    phone: z.string().optional(),
    company: z.string().min(2, "Entreprise requise"),
})

const contactSchema = step1Schema.merge(step2Schema).merge(step3Schema)
type ContactFormData = z.infer<typeof contactSchema>

// --- COMPONENTS ---

export function ContactWizard() {
    const [step, setStep] = React.useState(1)
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const [isSuccess, setIsSuccess] = React.useState(false)

    const methods = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        mode: "onBlur",
        defaultValues: {
            projectType: undefined,
            budget: "",
            deadline: "",
            description: "",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            company: "",
        }
    })

    const { handleSubmit, trigger, formState: { errors }, watch } = methods

    const nextStep = async () => {
        const fields = step === 1 ? ["projectType"] : step === 2 ? ["budget", "deadline", "description"] : []
        const isValid = await trigger(fields as any)
        if (isValid) setStep(s => s + 1)
    }

    const prevStep = () => setStep(s => s - 1)

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true)
        try {
            // Formspree Integration
            const response = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID || "xjkgnpya"}`, {
                method: "POST",
                headers: { "Content-Type": "application/json", "Accept": "application/json" },
                body: JSON.stringify(data),
            })

            if (response.ok) {
                setIsSuccess(true)
            } else {
                throw new Error("Erreur lors de l'envoi")
            }
        } catch (error) {
            console.error(error)
            alert("Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.")
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 px-6"
            >
                <div className="h-20 w-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="h-10 w-10 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-text-main mb-4">Message envoyé !</h2>
                <p className="text-text-muted text-lg mb-8 max-w-md mx-auto">
                    Merci de nous avoir contacté. Un expert Ecocea reviendra vers vous sous 24h ouvrées pour discuter de votre projet.
                </p>
                <Button onClick={() => window.location.href = "/"} variant="primary">
                    Retour à l&apos;accueil
                </Button>
            </motion.div>
        )
    }

    return (
        <FormProvider {...methods}>
            <div className="space-y-8">
                {/* Progress Bar */}
                <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                        <div className="flex gap-2">
                            {[1, 2, 3].map((s) => (
                                <div
                                    key={s}
                                    className={cn(
                                        "h-1.5 w-12 rounded-full transition-all duration-500",
                                        step >= s ? "bg-primary" : "bg-primary/10"
                                    )}
                                />
                            ))}
                        </div>
                        <div className="text-right">
                            <span className="text-xs font-semibold inline-block text-primary uppercase">
                                Étape {step} sur 3
                            </span>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-bold text-text-main">Quel type de projet avez-vous ?</h2>
                                    <p className="text-text-muted">Sélectionnez le domaine d&apos;expertise principal.</p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {PROJECT_TYPES.map((type) => {
                                        const isSelected = watch("projectType") === type.id
                                        return (
                                            <label
                                                key={type.id}
                                                className={cn(
                                                    "relative flex items-center p-4 rounded-2xl border-2 transition-all cursor-pointer group",
                                                    isSelected ? "border-primary bg-primary/5" : "border-black/5 hover:border-primary/30"
                                                )}
                                            >
                                                <input
                                                    type="radio"
                                                    value={type.id}
                                                    {...methods.register("projectType")}
                                                    className="sr-only"
                                                />
                                                <div className={cn(
                                                    "h-12 w-12 rounded-xl flex items-center justify-center mr-4 transition-colors",
                                                    isSelected ? "bg-primary text-white" : "bg-black/5 text-text-muted group-hover:bg-primary/10"
                                                )}>
                                                    <type.icon className="h-6 w-6" />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="font-bold text-text-main">{type.label}</p>
                                                    <p className="text-xs text-text-muted">{type.description}</p>
                                                </div>
                                            </label>
                                        )
                                    })}
                                </div>
                                {errors.projectType && <p className="text-error text-sm">{errors.projectType.message}</p>}
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-bold text-text-main">Détails du projet</h2>
                                    <p className="text-text-muted">Aidez-nous à mieux comprendre votre contexte.</p>
                                </div>

                                <div className="space-y-6">
                                    <div className="space-y-4">
                                        <label className="text-sm font-bold text-text-main block">Budget estimé</label>
                                        <div className="flex flex-wrap gap-2">
                                            {BUDGETS.map((b) => (
                                                <label key={b} className="cursor-pointer">
                                                    <input type="radio" value={b} {...methods.register("budget")} className="sr-only" />
                                                    <Badge
                                                        className={cn(
                                                            "px-4 py-2 text-sm transition-all",
                                                            watch("budget") === b ? "bg-primary text-white" : "bg-white text-text-muted border-black/10 hover:border-primary/30"
                                                        )}
                                                    >
                                                        {b}
                                                    </Badge>
                                                </label>
                                            ))}
                                        </div>
                                        {errors.budget && <p className="text-error text-sm">{errors.budget.message}</p>}
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-sm font-bold text-text-main block">Délai souhaité</label>
                                        <div className="flex flex-wrap gap-2">
                                            {DEADLINES.map((d) => (
                                                <label key={d} className="cursor-pointer">
                                                    <input type="radio" value={d} {...methods.register("deadline")} className="sr-only" />
                                                    <Badge
                                                        className={cn(
                                                            "px-4 py-2 text-sm transition-all",
                                                            watch("deadline") === d ? "bg-primary text-white" : "bg-white text-text-muted border-black/10 hover:border-primary/30"
                                                        )}
                                                    >
                                                        {d}
                                                    </Badge>
                                                </label>
                                            ))}
                                        </div>
                                        {errors.deadline && <p className="text-error text-sm">{errors.deadline.message}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-text-main block">Description du projet</label>
                                        <textarea
                                            {...methods.register("description")}
                                            rows={4}
                                            className="w-full rounded-2xl border-black/10 focus:border-primary focus:ring-1 focus:ring-primary p-4 outline-none transition-all placeholder:text-text-muted/50"
                                            placeholder="Parlez-nous de vos objectifs, défis et tech stack souhaitée..."
                                        />
                                        {errors.description && <p className="text-error text-sm">{errors.description.message}</p>}
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-bold text-text-main">Vos coordonnées</h2>
                                    <p className="text-text-muted">Comment pouvons-nous vous recontacter ?</p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-text-main block">Prénom</label>
                                        <input
                                            {...methods.register("firstName")}
                                            className="w-full rounded-xl border-black/10 focus:border-primary p-3 outline-none"
                                            placeholder="Ex: Jean"
                                        />
                                        {errors.firstName && <p className="text-error text-sm">{errors.firstName.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-text-main block">Nom</label>
                                        <input
                                            {...methods.register("lastName")}
                                            className="w-full rounded-xl border-black/10 focus:border-primary p-3 outline-none"
                                            placeholder="Ex: Dupont"
                                        />
                                        {errors.lastName && <p className="text-error text-sm">{errors.lastName.message}</p>}
                                    </div>
                                    <div className="space-y-2 sm:col-span-2">
                                        <label className="text-sm font-bold text-text-main block">Email professionnel</label>
                                        <input
                                            {...methods.register("email")}
                                            className="w-full rounded-xl border-black/10 focus:border-primary p-3 outline-none"
                                            placeholder="j.dupont@entreprise.com"
                                        />
                                        {errors.email && <p className="text-error text-sm">{errors.email.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-text-main block">Entreprise</label>
                                        <input
                                            {...methods.register("company")}
                                            className="w-full rounded-xl border-black/10 focus:border-primary p-3 outline-none"
                                            placeholder="Raison sociale"
                                        />
                                        {errors.company && <p className="text-error text-sm">{errors.company.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-text-main block">Téléphone (Optionnel)</label>
                                        <input
                                            {...methods.register("phone")}
                                            className="w-full rounded-xl border-black/10 focus:border-primary p-3 outline-none"
                                            placeholder="01 23 45 67 89"
                                        />
                                    </div>
                                </div>
                                <input name="_gotcha" style={{ display: "none" }} />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="flex justify-between mt-12 pt-8 border-t border-black/5">
                        <Button
                            type="button"
                            variant="ghost"
                            onClick={prevStep}
                            className={cn("gap-2", step === 1 && "invisible")}
                        >
                            <ChevronLeft className="h-4 w-4" />
                            Précédent
                        </Button>

                        {step < 3 ? (
                            <Button
                                type="button"
                                onClick={nextStep}
                                className="gap-2"
                            >
                                Suivant
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        ) : (
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="gap-2 min-w-[140px]"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                        Envoi...
                                    </>
                                ) : (
                                    <>
                                        Envoyer ma demande
                                        <ChevronRight className="h-4 w-4" />
                                    </>
                                )}
                            </Button>
                        )}
                    </div>
                </form>
            </div>
        </FormProvider>
    )
}

const PROJECT_TYPES = [
    { id: "ecommerce", label: "E-commerce", icon: ShoppingCart, description: "Magento, HCL, Headless" },
    { id: "mobile", label: "App Mobile", icon: Smartphone, description: "iOS, Android, React Native" },
    { id: "cloud", label: "Cloud & Ops", icon: Cloud, description: "AWS, Azure, Kubernetes" },
    { id: "audit", label: "Audit & TMA", icon: Search, description: "Performance, Sécurité" },
    { id: "other", label: "Autre", icon: MessageSquare, description: "Conseil, Stratégie" },
]

const BUDGETS = ["< 20k€", "20-50k€", "50-100k€", "> 100k€"]
const DEADLINES = ["ASAP", "1-3 mois", "3-6 mois", "Flexible"]
