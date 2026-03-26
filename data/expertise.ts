export interface TechItem {
    name: string
    icon: string
    category: 'front' | 'back' | 'mobile' | 'cloud' | 'data'
}

export const techStack: TechItem[] = [
    // Front-end
    { name: "ReactJS", icon: "React", category: "front" },
    { name: "Next.js", icon: "Nextjs", category: "front" },
    { name: "TypeScript", icon: "TypeScript", category: "front" },
    { name: "Tailwind CSS", icon: "Tailwind", category: "front" },

    // Back-end
    { name: "Java", icon: "Java", category: "back" },
    { name: "Spring Boot", icon: "Spring", category: "back" },
    { name: "Node.js", icon: "Nodejs", category: "back" },
    { name: "PostgreSQL", icon: "Postgres", category: "back" },

    // Mobile
    { name: "React Native", icon: "ReactNative", category: "mobile" },
    { name: "iOS (Swift)", icon: "Swift", category: "mobile" },
    { name: "Android (Kotlin)", icon: "Kotlin", category: "mobile" },

    // Cloud & DevOps
    { name: "AWS", icon: "AWS", category: "cloud" },
    { name: "Azure", icon: "Azure", category: "cloud" },
    { name: "Google Cloud", icon: "GCP", category: "cloud" },
    { name: "Kubernetes", icon: "K8s", category: "cloud" },
    { name: "Docker", icon: "Docker", category: "cloud" },
]

export const methodologies = [
    {
        title: "Agile SCRUM",
        description: "Des cycles itératifs courts pour garantir une livraison continue de valeur et une adaptabilité maximale.",
        icon: "Users"
    },
    {
        title: "DevSecOps",
        description: "L'automatisation et la sécurité intégrées dès le premier jour pour des déploiements fiables et fréquents.",
        icon: "Shield"
    },
    {
        title: "Software Craftsmanship",
        description: "Un code propre, maintenable et testé (TDD/DDD) au cœur de notre culture d'ingénierie.",
        icon: "Code2"
    }
]
