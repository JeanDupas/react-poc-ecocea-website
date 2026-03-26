export interface ClientData {
    name: string
    // In a real app, this would be a path to /public/images/clients/
    // For this POC as requested, we'll use null to trigger text placeholders
    logoUrl: string | null
    href?: string
}

export const clients: ClientData[] = [
    {
        name: "Sephora",
        logoUrl: null,
    },
    {
        name: "Kering",
        logoUrl: null,
    },
    {
        name: "Renault",
        logoUrl: null,
    },
    {
        name: "Lapeyre",
        logoUrl: null,
    },
    {
        name: "Monoprix",
        logoUrl: null,
    },
    {
        name: "E.Leclerc",
        logoUrl: null,
    },
]
