/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                helvetica: ['HelveticaNowDisplay', 'helvetica'],
                jakartaSans: ['Plus Jakarta Sans'],
                manrope: ['Manrope'],
            },
            colors: {
                comp: {
                    main: '#242147',
                    dark: '#1C1939',
                    light: '#312D5B',
                },
                text: {
                    nonActive: '#706E86',
                    secondary: '#7C77B0',
                    active: '#6557FF',
                    placeholder: '#84818A',
                },
                info: {
                    main: '#F84233',
                },
            },
            boxShadow: {
                button: '0px 1px 2px 0px rgba(24, 24, 28, 0.04), 0px 3px 4px -5px rgba(24, 24, 28, 0.03)',
            },
        },
    },
    plugins: [],
}
