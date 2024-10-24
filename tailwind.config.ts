/** @format */

import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'hero-pattern': "url('/heroImage.png')",
				'footer-pattern': "url('/logo-wisecam.png')",
			},
			boxShadow: {
				'shadow-wpp':
					'0px 34px 14px rgba(37, 211, 102, 0.01), 0px 19px 11px rgba(37, 211, 102, 0.05), 0px 9px 9px rgba(37, 211, 102, 0.09), 0px 2px 5px rgba(37, 211, 102, 0.1)',
				'hero-btn':
					'0px 36px 14px rgba(41, 84, 224, 0.04), 0px 20px 12px rgba(41, 84, 224, 0.13), 0px 9px 9px rgba(41, 84, 224, 0.21), 0px 2px 5px rgba(41, 84, 224, 0.25)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			colors: {},
		},
	},
	presets: [
		require('@relume_io/relume-tailwind'),
		require('tailwindcss-animate'),
	],
	plugins: [require('tailwindcss-animate')],
};
export default config;
