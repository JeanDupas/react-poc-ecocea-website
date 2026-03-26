import { type Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "#0D1B2A",
                accent: "#00F5A0",
                electric: "#0066FF",
                "light-bg": "#F4F7FA",
                "text-main": "#1A1A2E",
                "text-muted": "#6B7280",
                card: "#FFFFFF",
                error: "#FF4D6D",
                success: "#00C896",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
                mono: ["var(--font-jetbrains-mono)", "monospace"],
            },
            backgroundImage: {
                "gradient-hero": "linear-gradient(135deg, #0D1B2A 0%, #00F5A0 100%)",
                "gradient-cta": "linear-gradient(90deg, #0066FF 0%, #00F5A0 100%)",
                "gradient-text": "linear-gradient(90deg, #0066FF 0%, #00F5A0 100%)",
            },
            keyframes: {
                "fade-up": {
                    "0%": { opacity: "0", transform: "translateY(24px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "fade-in": {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                marquee: {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(-50%)" },
                },
                "gradient-shift": {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
                "count-up": {
                    from: { opacity: "0", transform: "translateY(8px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
                "slide-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "slide-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "fade-up": "fade-up 0.5s ease-out both",
                "fade-in": "fade-in 0.4s ease-out both",
                marquee: "marquee 20s linear infinite",
                "gradient-shift": "gradient-shift 6s ease infinite",
                "count-up": "count-up 0.3s ease-out both",
                "slide-down": "slide-down 300ms cubic-bezier(0.87, 0, 0.13, 1)",
                "slide-up": "slide-up 300ms cubic-bezier(0.87, 0, 0.13, 1)",
            },
            boxShadow: {
                "glow-accent": "0 0 30px rgba(0, 245, 160, 0.3)",
                "glow-electric": "0 0 30px rgba(0, 102, 255, 0.3)",
                "card-hover": "0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)",
            },
            transitionTimingFunction: {
                "out-cubic": "cubic-bezier(0.33, 1, 0.68, 1)",
            },
        },
    },
    plugins: [],
} satisfies Config;
// Note: I will need to add keyframes for slide-down/up if they don't exist
