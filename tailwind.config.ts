import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-sans)", "sans-serif"],
                mono: ["var(--font-mono)", "monospace"],
                handwriting: ["var(--font-handwriting)", "cursive"],
            },
            colors: {
                "brand-green": "#14402b", // Deep, rich hospital green
                "brand-navy": "#001128", // Deep navy blue
            },
        },
    },
    plugins: [],
};
export default config;
