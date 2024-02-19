/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte}'],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: '#00a5ff',
                    secondary: '#00e700',
                    accent: '#00dcff',
                    neutral: '#1d1006',
                    'base-100': '#fffcff',
                    info: '#00adf2',
                    success: '#88d300',
                    warning: '#cd4800',
                    error: '#ff6f7a',
                },
            },
        ],
    },
    plugins: [require('daisyui')],
};
