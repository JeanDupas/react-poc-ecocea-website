import { ShoppingCart, Code2, Cloud, Wrench, type LucideIcon, CheckCircle2 } from "lucide-react"

export type ServiceId = "ecommerce" | "sur-mesure" | "cloud" | "tma"

export interface ServiceDetail {
    title: string
    description: string
    features: string[]
    techStack: string[]
}

export interface ServiceData {
    id: ServiceId
    icon: LucideIcon
    title: string
    shortDescription: string
    fullDescription: string[]
    href: string
    tags: string[]
    color: string
    imageUrl: string
    details: ServiceDetail
}

export const services: ServiceData[] = [
    {
        id: "ecommerce",
        icon: ShoppingCart,
        title: "E-commerce B2B/B2C",
        shortDescription: "Plateformes omnicanales performantes et scalables pour transformer votre business en ligne.",
        fullDescription: [
            "Nous concevons et déployons des écosystèmes e-commerce robustes, capables de soutenir une croissance internationale massive.",
            "De la stratégie omnicanale à l'implémentation technique, nous nous concentrons sur la conversion et l'expérience utilisateur.",
            "Notre expertise couvre le cycle complet : tunnel de commande complexe, intégrations ERP/PIM et optimisation des performances LCP/Vitals."
        ],
        href: "/services#ecommerce",
        tags: ["Magento", "HCL Commerce", "Salesforce", "React"],
        color: "#0066FF",
        imageUrl: "/images/services/ecommerce.png",
        details: {
            title: "Expertise Commerce",
            description: "Une approche centrée sur le ROI et la scalabilité technique.",
            features: [
                "Solutions Headless & Composable Commerce",
                "Intégration d'écosystèmes PIM/ERP/OMS",
                "Optimisation du tunnel de conversion (CRO)",
                "Performance Web (Core Web Vitals)",
                "Stratégie B2B : Portails concessionnaires & distributeurs",
                "Internationalisation multi-devises/langues"
            ],
            techStack: ["Magento 2", "HCL Commerce", "SFCC", "Shopify Plus", "React", "Node.js"]
        }
    },
    {
        id: "sur-mesure",
        icon: Code2,
        title: "Solutions Sur-mesure",
        shortDescription: "Applications web et mobiles taillées pour vos besoins métier et relation client.",
        fullDescription: [
            "Parce que votre métier est unique, vos outils doivent l'être aussi. Nous développons des solutions logicielles qui s'adaptent à vos processus.",
            "Nous privilégions les architectures modernes basées sur les microservices pour garantir agilité et maintenabilité sur le long terme.",
            "Notre équipe maîtrise les dernières stacks techniques pour offrir des interfaces riches, intuitives et ultra-rapides."
        ],
        href: "/services#sur-mesure",
        tags: ["Java", "ReactJS", "React Native", "PostgreSQL"],
        color: "#00F5A0",
        imageUrl: "/images/realisations/sephora.png", // Fallback to an existing tech image
        details: {
            title: "Développement Custom",
            description: "Du prototype à la mise en production à grande échelle.",
            features: [
                "Applications Web progressives (PWA)",
                "Applications Mobiles React Native iOS/Android",
                "Plateformes SAAS & Microservices",
                "Architecture API-First & GraphQL",
                "Automatisation de processus métier (BPM)",
                "UI/UX Design & Design Systems"
            ],
            techStack: ["Java / Spring Boot", "Node.js", "React / Next.js", "React Native", "PostgreSQL", "MongoDB"]
        }
    },
    {
        id: "cloud",
        icon: Cloud,
        title: "Infrastructure Cloud",
        shortDescription: "Migration, optimisation et sécurisation de vos systèmes sur AWS, Azure et GCP.",
        fullDescription: [
            "Accélérez votre transformation digitale en profitant de la puissance du Cloud. Nous vous accompagnons dans votre migration vers le nuage.",
            "Nos experts DevSecOps automatisent vos déploiements (CI/CD) pour réduire les cycles de mise en production et augmenter la fiabilité.",
            "Nous optimisons vos coûts d'infrastructure (FinOps) tout en garantissant une haute disponibilité et une sécurité maximale."
        ],
        href: "/services#cloud",
        tags: ["AWS", "Azure", "GCP", "CI/CD"],
        color: "#0066FF",
        imageUrl: "/images/services/cloud.png",
        details: {
            title: "Cloud & DevOps",
            description: "Infrastructures résilientes et déploiement continu.",
            features: [
                "Migration Cloud Native (AWS, Azure, GCP)",
                "Containerisation & Orchestration (Docker, K8s)",
                "Infrastucture as Code (Terraform, Ansible)",
                "Pipelines CI/CD & Automatisation",
                "Monitoring 24/7 & Observabilité",
                "Audit de sécurité & Compliance"
            ],
            techStack: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Terraform", "Jenkins / Github Actions"]
        }
    },
    {
        id: "tma",
        icon: Wrench,
        title: "TMA & Audit Technique",
        shortDescription: "Reprise en main, audit de performance et maintenance évolutive de vos applications.",
        fullDescription: [
            "Ne laissez pas votre dette technique freiner votre innovation. Nous auditons vos systèmes existants pour identifier les leviers d'optimisation.",
            "Notre Tierce Maintenance Applicative (TMA) assure la pérennité de votre plateforme avec une réactivité exemplaire (SLA garantis).",
            "Nous intervenons sur des reprises de parcs complexes pour corriger, stabiliser et faire évoluer vos solutions critiques."
        ],
        href: "/services#tma",
        tags: ["Audit", "Performance", "Maintenance"],
        color: "#00F5A0",
        imageUrl: "/images/realisations/renault.png",
        details: {
            title: "Maintenance & Audit",
            description: "Sérénité et amélioration continue de vos actifs numériques.",
            features: [
                "Audit de code & Diagnostic de performance",
                "Maintenance Corrective et Évolutive (TMA)",
                "Support Technique Niveau 2 et 3",
                "Reprise de projets en difficulté",
                "Mises à jour de sécurité critiques",
                "Conseil en stratégie de refonte"
            ],
            techStack: ["Performance Audits", "Security Scans", "Legacy Refactoring", "24/7 Monitoring"]
        }
    },
]
