export interface Testimonial {
    id: string
    quote: string
    author: string
    role: string
    company: string
    stars?: number // 1-5
    avatarUrl?: string
}

export const testimonials: Testimonial[] = [
    {
        id: "testi-1",
        quote: "L'expertise d'Ecocea sur Magento et leur approche headless ont permis de diviser nos temps de chargement par deux. Un partenaire stratégique indispensable.",
        author: "Sophie Martin",
        role: "Directrice E-commerce",
        company: "Sephora",
        stars: 5,
    },
    {
        id: "testi-2",
        quote: "Une équipe agile, réactive et force de proposition sur l'innovation IA. Le Digital Shelf que nous avons construit ensemble est un modèle du genre.",
        author: "Thomas Durand",
        role: "CTO Digital",
        company: "Kering",
        stars: 5,
    },
    {
        id: "testi-3",
        quote: "La digitalisation de nos workflows concessionnaires était un défi immense. Ecocea a su simplifier la complexité avec brio.",
        author: "Jean- Marc Leroy",
        role: "Directeur des Systèmes d'Information",
        company: "Renault",
        stars: 5,
    },
    {
        id: "testi-4",
        quote: "Audit technique d'une grande précision et accompagnement exemplaire lors de notre migration cloud AWS. Confiance totale.",
        author: "Lucie Bernard",
        role: "Responsable Infrastructure",
        company: "Lapeyre",
        stars: 5,
    },
]
