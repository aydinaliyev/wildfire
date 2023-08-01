/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            comp: {
                main: '#242147',
                dark: '#1C1939',
                light: '#312D5B',
            },
        },
        extend: {
            fontFamily: {
                helvetica: ['HelveticaNowDisplay', 'helvetica'],
            },
        },
    },
    plugins: [],
}
