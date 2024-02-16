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
                    primary: '#007aff',
                    secondary: '#00efff',
                    accent: '#00a8c1',
                    neutral: '#13120d',
                    'base-100': '#fffdde',
                    info: '#00ffff',
                    success: '#7bc23b',
                    warning: '#da6900',
                    error: '#ff7a80',
                },
            },
        ],
    },
    plugins: [require('daisyui')],
};
