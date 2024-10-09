/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'lightred': '#EC3D2F',
                'lightblue': '#BCCDE0',
                'main': '#EEEDED',
                'box': '#D9D9D9'
            }

        },
    },
    plugins: [],
}