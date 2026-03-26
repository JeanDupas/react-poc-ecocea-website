import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import '@/app/globals.css'

// react-best-practices: bundle-preload - load critical fonts
const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-inter',
    display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-jetbrains-mono',
    display: 'swap',
})

export const metadata: Metadata = {
    metadataBase: new URL(
        process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ecoceatechnologies.github.io/react-poc-ecocea-website' // Assuming github pages URL format
    ),
    title: {
        default: 'Ecocea Technologies — ESN spécialisée e-commerce & IA',
        template: '%s | Ecocea Technologies',
    },
    description:
        'Votre partenaire tech pour des plateformes e-commerce qui performent. Expertise Java, ReactJS, Cloud AWS/Azure/GCP et intégration IA. Clients grands comptes depuis 15 ans.',
    openGraph: {
        type: 'website',
        locale: 'fr_FR',
        siteName: 'Ecocea Technologies',
    },
    robots: {
        index: true,
        follow: true,
    },
}

import { Header, Footer } from '@/components/layout'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr" className={`${inter.variable} ${jetbrainsMono.variable}`}>
            <body className="min-h-screen bg-primary font-sans text-white antialiased">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    )
}
