import type { NextConfig } from 'next'
import { createContentlayerPlugin } from 'next-contentlayer2'

const nextConfig: NextConfig = {
    output: 'export',
    basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
    trailingSlash: true,
    images: {
        unoptimized: true, // required for static export
    },
    // react-best-practices: bundle-barrel-imports
    // optimizePackageImports auto-transforms barrel imports to direct imports at build time
    experimental: {
        optimizePackageImports: [
            'lucide-react',
            '@radix-ui/react-dialog',
            '@radix-ui/react-tabs',
            '@radix-ui/react-accordion',
            'framer-motion',
        ],
    },
}

const withContentlayer = createContentlayerPlugin({
    // options
})

export default withContentlayer(nextConfig)
