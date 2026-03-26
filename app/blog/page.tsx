"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { allPosts, Post } from "contentlayer/generated"
import { compareDesc, format, parseISO } from "date-fns"
import { Calendar, Clock, ArrowRight } from "lucide-react"

import { SectionTitle, Badge, Card } from "@/components/ui"

function PostCard({ post }: { post: Post }) {
    return (
        <Card className="group h-full flex flex-col overflow-hidden border-black/5 hover:border-accent/30 transition-all duration-500">
            <Link href={post.url} className="block relative aspect-[16/9] overflow-hidden">
                <Image
                    src={post.imageUrl || "/images/services/ecommerce.png"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                    {post.tags?.slice(0, 2).map((tag: string) => (
                        <Badge key={tag} className="bg-primary/90 text-white backdrop-blur-md border-none">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </Link>

            <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-text-muted mb-4 uppercase tracking-widest font-semibold">
                    <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-accent" />
                        {format(parseISO(post.date), 'dd LLLL yyyy')}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-accent" />
                        {post.readingTime} min
                    </span>
                </div>

                <Link href={post.url}>
                    <h2 className="text-2xl font-bold text-text-main mb-4 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                    </h2>
                </Link>

                <p className="text-text-muted mb-8 line-clamp-3 text-sm leading-relaxed">
                    {post.description}
                </p>

                <div className="mt-auto">
                    <Link
                        href={post.url}
                        className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                    >
                        Lire l&apos;article
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </Card>
    )
}

export default function BlogPage() {
    const posts = allPosts.sort((a, b) => compareDesc(parseISO(a.date), parseISO(b.date)))

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 bg-primary overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-electric rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="section-container relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
                    >
                        Notre <span className="text-secondary">Blog</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mx-auto max-w-2xl text-lg sm:text-xl text-white/70 text-balance"
                    >
                        Découvrez nos analyses, conseils et retours d&apos;expérience sur les dernières tendances technologiques.
                    </motion.p>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="py-20 sm:py-28">
                <div className="section-container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, idx) => (
                            <motion.div
                                key={post._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                <PostCard post={post} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
