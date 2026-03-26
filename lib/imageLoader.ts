/**
 * Custom Next.js image loader that prepends NEXT_PUBLIC_BASE_PATH to image paths.
 *
 * When deploying to GitHub Pages (or any sub-path), Next.js `basePath` is set but
 * the `unoptimized` image mode does NOT automatically apply the basePath prefix to
 * image src URLs. This loader ensures all images are served from the correct path.
 *
 * Only local absolute paths (starting with `/`) are prefixed — external URLs are
 * returned unchanged.
 *
 * See: https://nextjs.org/docs/app/api-reference/components/image#loaderfile
 */
export default function imageLoader({ src }: { src: string }): string {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
    // Only prefix local absolute paths; leave external URLs (http/https/data/blob) as-is
    if (basePath && src.startsWith("/") && !src.startsWith("//")) {
        return `${basePath}${src}`
    }
    return src
}
