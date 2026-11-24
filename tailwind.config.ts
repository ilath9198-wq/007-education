import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B192C',
          dark: '#060E18',
          light: '#1E3E62',
          950: '#060E18',
          900: '#0B192C',
          850: '#11223A',
          800: '#1E3E62',
          700: '#2A5280',
          600: '#3D6B9E',
        },
        royal: {
          DEFAULT: '#1D4ED8',
          dark: '#1E40AF',
          light: '#3B82F6',
          900: '#1E3A8A',
          800: '#1E40AF',
          700: '#1D4ED8',
          600: '#2563EB',
          500: '#3B82F6',
          400: '#60A5FA',
        },
        sky: {
          DEFAULT: '#0284C7',
          light: '#BAE6FD',
          dark: '#0369A1',
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
        },
        amber: {
          DEFAULT: '#F59E0B',
          light: '#FDE68A',
          dark: '#D97706',
          500: '#F59E0B',
          600: '#D97706',
        },
        teal: {
          DEFAULT: '#0D9488',
          light: '#5EEAD4',
          dark: '#0F766E',
          500: '#14B8A6',
          600: '#0D9488',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          soft: '#F8FAFC',
          muted: '#F1F5F9',
          border: '#E2E8F0',
        },
      },
      fontFamily: {
        heading: ['var(--font-outfit)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'card': '0 10px 30px -10px rgba(11, 25, 44, 0.08)',
        'card-hover': '0 20px 40px -15px rgba(29, 78, 216, 0.18)',
        'floating': '0 20px 45px -12px rgba(11, 25, 44, 0.25)',
        'glow-royal': '0 0 30px -5px rgba(29, 78, 216, 0.45)',
        'glow-amber': '0 0 25px -5px rgba(245, 158, 11, 0.45)',
      },
    },
  },
  plugins: [],
};

export default config;
