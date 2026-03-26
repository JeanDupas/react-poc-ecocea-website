export type Category = 'ecommerce' | 'mobile' | 'cloud' | 'relation-client';

export interface Realisation {
    id: string
    client: string
    mission: string
    description: string           // court résumé
    longDescription?: string      // description détaillée pour le modal/page
    imageUrl: string
    categories: Category[]
    tags: string[]
    year: number
    featured: boolean
    color: string
    results?: {
        label: string
        value: string
    }[]
}

export const realisations: Realisation[] = [
    {
        id: "sephora-ecommerce",
        client: "Sephora",
        mission: "Refonte plateforme e-commerce",
        description: "Migration d'une infrastructure legacy vers une architecture headless performante et scalable.",
        longDescription: "Nous avons accompagné Sephora dans la refonte globale de son tunnel d'achat. L'objectif était de remplacer une solution monolithique par une architecture basée sur des microservices, permettant une scalabilité mondiale et une réduction drastique des temps de chargement sur mobile.",
        imageUrl: "/images/realisations/sephora.png",
        categories: ["ecommerce", "relation-client"],
        tags: ["Magento", "React", "Node.js", "AWS"],
        year: 2023,
        featured: true,
        color: "#0D1B2A",
        results: [
            { label: "Performance mobile", value: "+40%" },
            { label: "Taux de conversion", value: "+15%" },
            { label: "Temps de chargement", value: "-2s" }
        ]
    },
    {
        id: "kering-digital-shelf",
        client: "Kering",
        mission: "Solution Digital Shelf Management",
        description: "Développement d'un outil centralisé pour la gestion du catalogue produit mondial.",
        longDescription: "Pour Kering, nous avons conçu une plateforme de Digital Shelf Management permettant de synchroniser l'image de marque sur plus de 25 marchés internationaux. La solution intègre des flux PIM complexes et une gestion fine des assets digitaux.",
        imageUrl: "/images/realisations/kering.png",
        categories: ["ecommerce", "cloud"],
        tags: ["Java", "Spring Boot", "React", "Azure"],
        year: 2022,
        featured: true,
        color: "#0066FF",
        results: [
            { label: "Marchés couverts", value: "25+" },
            { label: "Assets gérés", value: "1M+" }
        ]
    },
    {
        id: "renault-b2b",
        client: "Renault",
        mission: "Portail B2B international",
        description: "Digitalisation complète des workflows de commande réseau mondial.",
        longDescription: "Ce projet consistait à unifier les plateformes de commande pour les concessionnaires Renault à travers le monde. Nous avons implémenté une solution robuste gérant des volumes de transactions massifs et des règles métier spécifiques à chaque pays.",
        imageUrl: "/images/realisations/renault.png",
        categories: ["ecommerce", "mobile"],
        tags: ["HCL Commerce", "Java", "Angular", "GCP"],
        year: 2023,
        featured: true,
        color: "#00F5A0",
        results: [
            { label: "Utilisateurs actifs", value: "50k" },
            { label: "Traitement commandes", value: "-30%" }
        ]
    },
    {
        id: "lapeyre-configurateur",
        client: "Lapeyre",
        mission: "Configurateur 3D Cuisine",
        description: "Expérience immersive d'aide à la conception et à la vente.",
        longDescription: "Nous avons développé un configurateur 3D intuitif permettant aux clients de Lapeyre de projeter leurs projets de cuisine. La solution est directement reliée au stock et permet un devis en temps réel en point de vente.",
        imageUrl: "/images/realisations/lapeyre.png",
        categories: ["relation-client", "mobile"],
        tags: ["Three.js", "ReactJS", "Node.js"],
        year: 2024,
        featured: false,
        color: "#0066FF",
        results: [
            { label: "Utilisation en magasin", value: "+60%" },
            { label: "Satisfaction client", value: "9/10" }
        ]
    },
    {
        id: "monoprix-mobile",
        client: "Monoprix",
        mission: "Application Course Rapide",
        description: "Scan & Pay et fidélisation mobile pour les points de vente physiques.",
        longDescription: "Accompagnement de Monoprix dans la digitalisation de l'expérience en magasin. Nous avons développé l'application mobile permettant le scan d'articles en rayon et le paiement autonome, réduisant l'attente en caisse.",
        imageUrl: "/images/realisations/monoprix.png",
        categories: ["mobile", "ecommerce"],
        tags: ["React Native", "Firebase", "Node.js"],
        year: 2022,
        featured: false,
        color: "#00F5A0",
        results: [
            { label: "Temps en caisse", value: "-50%" },
            { label: "Engagement App", value: "+25%" }
        ]
    },
    {
        id: "accor-cloud-migration",
        client: "Accor",
        mission: "Modernisation Infrastructure",
        description: "Migration vers le cloud et conteneurisation des services critiques.",
        longDescription: "Nous avons piloté la migration massive des systèmes de réservation Accor vers une architecture Kubernetes sur AWS. L'objectif était de réduire les coûts opérationnels tout en améliorant la résilience face aux pics de trafic saisonniers.",
        imageUrl: "/images/realisations/accor.png",
        categories: ["cloud"],
        tags: ["AWS", "Kubernetes", "Terraform", "Docker"],
        year: 2023,
        featured: false,
        color: "#0D1B2A",
        results: [
            { label: "Coût infrastructure", value: "-20%" },
            { label: "Uptime", value: "99.99%" }
        ]
    }
]
