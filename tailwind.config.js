/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // Enable manual dark mode toggle
    theme: {
        extend: {
            colors: {
                kenya: {
                    black: '#000000',
                    red: '#BB0000',
                    green: '#006600',
                    white: '#FFFFFF',
                },
                // Accents for dark/light mode
                brand: {
                    dark: '#0a0a0a', // Deeper black
                    light: '#fcfcfc',
                    accent: '#D4AF37' // Safari Gold suggestion, or maybe sticking to flag colors
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // Will add Google Fonts link later
            },
            animation: {
                blob: "blob 7s infinite",
                'spin-slow': 'spin 12s linear infinite',
            },
            keyframes: {
                blob: {
                    "0%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                    "33%": {
                        transform: "translate(30px, -50px) scale(1.1)",
                    },
                    "66%": {
                        transform: "translate(-20px, 20px) scale(0.9)",
                    },
                    "100%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                },
            },
        },
    },
    plugins: [],
}
