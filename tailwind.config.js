/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                helvetica: ['HelveticaNowDisplay', 'helvetica'],
            },
            colors: {
                comp: {
                    main: '#242147',
                    dark: '#1C1939',
                    light: '#312D5B',
                },
                text: {
                    nonActive: '#706E86',
                },
                info: {
                    main: '#F84233',
                },
            },
        },
    },
    plugins: [],
}
