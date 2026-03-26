import type { MDXComponents } from 'mdx/types'
import { Badge } from '@/components/ui'
import Image from 'next/image'

export const mdxComponents: MDXComponents = {
    h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4 text-text-main">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold mt-8 mb-4 text-text-main border-b border-black/5 pb-2">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-bold mt-6 mb-3 text-text-main">{children}</h3>,
    p: ({ children }) => <p className="text-text-muted leading-relaxed mb-6 text-lg">{children}</p>,
    ul: ({ children }) => <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-text-muted">{children}</ul>,
    li: ({ children }) => <li className="marker:text-primary">{children}</li>,
    strong: ({ children }) => <strong className="font-bold text-text-main">{children}</strong>,
    blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-accent bg-primary/5 p-6 my-8 rounded-r-2xl italic text-text-main text-lg">
            {children}
        </blockquote>
    ),
    Image: (props: any) => (
        <div className="relative aspect-video my-12 rounded-2xl overflow-hidden shadow-xl">
            <Image fill className="object-cover" {...props} />
        </div>
    ),
    TechBadge: ({ children }: { children: React.ReactNode }) => (
        <Badge variant="tech" className="mx-1">{children}</Badge>
    ),
}
