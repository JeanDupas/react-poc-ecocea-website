import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind classes safely, resolving conflicts via tailwind-merge.
 * react-best-practices: use for conditional class composition throughout the app.
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Formats a date to a French locale string.
 */
export function formatDate(
    date: Date | string,
    options?: Intl.DateTimeFormatOptions
): string {
    return new Date(date).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        ...options,
    });
}

/**
 * Estimates reading time in minutes for a given text.
 */
export function computeReadingTime(text: string): number {
    const wordsPerMinute = 200;
    const wordCount = text.trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

/**
 * Clamps a number between min and max.
 */
export function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}
