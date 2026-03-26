import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"
import { format, parseISO } from "date-fns"
import { ChevronLeft, Calendar, Clock, Share2 } from "lucide-react"

import { Badge, Button } from "@/components/ui"
import { MdxWrapper } from "@/components/mdx/MdxWrapper"

interface PostPageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateStaticParams() {
    return allPosts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: PostPageProps) {
    const { slug } = await params
    const post = allPosts.find((p) => p.slug === slug)
    if (!post) return {}

    return {
        title: `${post.title} | Blog | Ecocea`,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            images: [post.imageUrl || ""],
        },
    }
}

export default async function PostPage({ params }: PostPageProps) {
    const { slug } = await params
    const post = allPosts.find((p) => p.slug === slug)

    if (!post) {
        notFound()
    }

    return (
        <article className="min-h-screen bg-white">
            {/* Post Hero */}
            <header className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 bg-primary overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-electric rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="section-container relative z-10">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-white/60 hover:text-accent transition-colors mb-8 group"
                    >
                        <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                        Retour au blog
                    </Link>

                    <div className="max-w-4xl">
                        <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags?.map((tag: string) => (
                                <Badge key={tag} className="bg-accent/10 text-accent border-accent/20">
                                    {tag}
                                </Badge>
                            ))}
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-white/60">
                            <div className="flex items-center gap-2">
                                <span className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xs font-bold">ET</span>
                                <span className="text-sm font-medium text-white">{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Calendar className="h-4 w-4" />
                                {format(parseISO(post.date), "dd MMMM yyyy")}
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Clock className="h-4 w-4" />
                                {post.readingTime} min de lecture
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Content Section */}
            <div className="section-container py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        <div className="relative aspect-video mb-12 rounded-[2rem] overflow-hidden shadow-2xl">
                            <Image
                                src={post.imageUrl || "/images/services/ecommerce.png"}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <MdxWrapper code={post.body.code} />
                        </div>

                        <div className="mt-16 pt-8 border-t border-black/5 flex items-center justify-between">
                            <div className="flex gap-4">
                                <Button variant="ghost" size="sm" className="gap-2">
                                    <Share2 className="h-4 w-4" />
                                    Partager
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Related */}
                    <aside className="lg:col-span-4 space-y-12">
                        <div className="bg-light-bg rounded-[2rem] p-8">
                            <h3 className="text-xl font-bold text-text-main mb-6">À propos de l'auteur</h3>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-accent font-bold">
                                    ET
                                </div>
                                <div>
                                    <p className="font-bold text-text-main">Ecocea Team</p>
                                    <p className="text-xs text-text-muted">Experts en transformation digitale</p>
                                </div>
                            </div>
                            <p className="text-sm text-text-muted leading-relaxed">
                                Passionnés par l'innovation, nous partageons nos retours d'XP pour vous aider à réussir vos projets les plus complexes.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-text-main mb-6">Articles similaires</h3>
                            <div className="space-y-6">
                                {allPosts
                                    .filter(p => p.slug !== post.slug)
                                    .slice(0, 2)
                                    .map(related => (
                                        <Link key={related.slug} href={related.url} className="group block">
                                            <p className="text-xs text-text-muted uppercase font-bold mb-1 tracking-wider">{format(parseISO(related.date), "dd MMM yyyy")}</p>
                                            <h4 className="font-bold text-text-main group-hover:text-primary transition-colors line-clamp-2">
                                                {related.title}
                                            </h4>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </article>
    )
}
