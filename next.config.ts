import type { NextConfig } from 'next'
import { createContentlayerPlugin } from 'next-contentlayer2'

const nextConfig: NextConfig = {
    output: 'export',
    basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
    trailingSlash: true,
    images: {
        // Custom loader prepends NEXT_PUBLIC_BASE_PATH so images resolve correctly
        // on GitHub Pages (subdirectory deployment). `unoptimized: true` bypasses
        // all loaders and omits the basePath prefix, so we use a loader instead.
        loader: "custom",
        loaderFile: "./lib/imageLoader.ts",
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
