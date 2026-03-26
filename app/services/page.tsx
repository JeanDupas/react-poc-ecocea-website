import { Metadata } from "next"
import { ServicesHero, ServiceFeatureSection, ServicesFAQ } from "@/components/sections/services"
import { services } from "@/data/services"

export const metadata: Metadata = {
    title: "Nos Services | Ecocea Technologies",
    description:
        "Découvrez nos expertises e-commerce (Magento, HCL), développement sur-mesure (Java, React), infrastructure Cloud et TMA. Solution innovantes pour grands comptes.",
    openGraph: {
        title: "Expertises Tech & E-commerce | Ecocea Technologies",
        description: "Accompagnement stratégique et technique pour vos projets digitaux les plus ambitieux.",
    }
}

export default function ServicesPage() {
    return (
        <>
            <ServicesHero />
            <div className="relative">
                {services.map((service, index) => (
                    <ServiceFeatureSection
                        key={service.id}
                        id={service.id}
                        index={index}
                    />
                ))}
            </div>
            <ServicesFAQ />
        </>
    )
}
