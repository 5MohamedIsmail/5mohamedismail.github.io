/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: ['selector', '[data-theme="dark"]'],
	theme: {
		extend: {
			colors: {
				primary: 'rgb(var(--primary-rgb) / <alpha-value>)',
				'primary-foreground': 'var(--primary-foreground)',
				bg: 'rgb(var(--bg-rgb) / <alpha-value>)',
				text: 'rgb(var(--text-rgb) / <alpha-value>)',
				muted: 'var(--text-muted)',
				border: 'var(--border)',
			},
			fontFamily: {
				headings: ['var(--font-headings)', 'serif'],
				body: ['var(--font-body)', 'sans-serif'],
			},
			spacing: {
				1: 'var(--space-1)',
				2: 'var(--space-2)',
				3: 'var(--space-3)',
				4: 'var(--space-4)',
				5: 'var(--space-5)',
				6: 'var(--space-6)',
				8: 'var(--space-8)',
				10: 'var(--space-10)',
				12: 'var(--space-12)',
				16: 'var(--space-16)',
				20: 'var(--space-20)',
				24: 'var(--space-24)',
				32: 'var(--space-32)',
			},
		},
	},
	plugins: [],
};
