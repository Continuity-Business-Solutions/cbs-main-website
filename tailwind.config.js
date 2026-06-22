/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#083c54',
                'primary-dark': '#1c334a',
                'primary-light': '#e5f0ff',
                secondary: '#007236',
                heading: '#0F172A',
                body: '#1A2B4B',
                muted: '#64748B',
                border: '#E5E7EB',
                pattern: 'rgba(8, 60, 84, 0.05)',
            },
            container: {
                center: true,
                padding: '1.25rem',
                screens: {
                    sm: '640px',
                    md: '768px',
                    lg: '1024px',
                    xl: '1240px',
                },
            },
        },
    },
    plugins: [],
} 