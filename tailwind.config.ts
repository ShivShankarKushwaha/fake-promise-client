import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Open Sans"', 'sans-serif'],
				serif: ['"Merriweather"', 'serif'],
				mono: ['"Fira Code"', 'monospace'],
				inter: ['Inter', 'serif']
			},
			colors: {
				primary: {
					DEFAULT: 'var(--primary-color)', // #003366
					dark: 'var(--dark-primary-color)' // #001f33
				},
				secondary: {
					DEFAULT: 'var(--secondary-color)', // #CC0000
					dark: 'var(--dark-secondary-color)' // #990000
				},
				accent: {
					DEFAULT: 'var(--accent-color)', // #FFD700
					dark: 'var(--dark-accent-color)' // #B8860B
				},
				background: {
					DEFAULT: 'var(--background-color)', // #F5F5F5
					dark: 'var(--dark-background-color)' // #1A1A1A
				},
				headline: {
					DEFAULT: 'var(--headline-color)' // #111827
				},
				satire: {
					DEFAULT: 'var(--satire-color)' // #FF6347
				}
			}
		}
	},
	plugins: [typography, forms, aspectRatio]
} as Config;
