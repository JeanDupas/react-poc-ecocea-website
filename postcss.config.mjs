/** @type {import('postcss').Config} */
const config = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {}, // required to compile tailwind correctly
    },
}

export default config
