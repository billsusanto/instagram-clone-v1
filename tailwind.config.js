/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: {
          main: '#0095F6',
          dark: '#0077CC',
          light: '#33AAFF',
          contrast: '#FFFFFF',
        },
        // Instagram gradient
        'ig-gradient': {
          start: '#F58529',
          middle: '#DD2A7B',
          end: '#8134AF',
        },
        // Accent colors
        accent: {
          like: '#ED4956',
          save: '#262626',
        },
        // Background colors
        bg: {
          primary: '#FFFFFF',
          secondary: '#FAFAFA',
          tertiary: '#F5F5F5',
          overlay: 'rgba(0, 0, 0, 0.65)',
          modal: '#FFFFFF',
        },
        // Text colors
        text: {
          primary: '#262626',
          secondary: '#8E8E8E',
          muted: '#BDBDBD',
          inverse: '#FFFFFF',
          link: '#0095F6',
        },
        // Border colors
        border: {
          light: '#EFEFEF',
          medium: '#DBDBDB',
          dark: '#A8A8A8',
        },
        // Status colors
        status: {
          success: '#00C853',
          'success-bg': '#E8F5E9',
          warning: '#FFB300',
          'warning-bg': '#FFF8E1',
          error: '#ED4956',
          'error-bg': '#FFEBEE',
          info: '#0095F6',
          'info-bg': '#E3F2FD',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['SF Mono', 'Monaco', 'Cascadia Code', 'Roboto Mono', 'Consolas', 'Courier New', 'monospace'],
      },
      fontSize: {
        'h1': ['32px', { lineHeight: '40px', letterSpacing: '-0.5px', fontWeight: '700' }],
        'h2': ['28px', { lineHeight: '36px', letterSpacing: '-0.3px', fontWeight: '700' }],
        'h3': ['24px', { lineHeight: '32px', letterSpacing: '-0.2px', fontWeight: '600' }],
        'h4': ['20px', { lineHeight: '28px', letterSpacing: '0px', fontWeight: '600' }],
        'h5': ['16px', { lineHeight: '24px', letterSpacing: '0px', fontWeight: '600' }],
        'h6': ['14px', { lineHeight: '20px', letterSpacing: '0px', fontWeight: '600' }],
        'body1': ['16px', { lineHeight: '24px', letterSpacing: '0px', fontWeight: '400' }],
        'body2': ['14px', { lineHeight: '20px', letterSpacing: '0px', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '16px', letterSpacing: '0px', fontWeight: '400' }],
        'small': ['11px', { lineHeight: '14px', letterSpacing: '0px', fontWeight: '400' }],
        'button': ['14px', { lineHeight: '20px', letterSpacing: '0px', fontWeight: '600' }],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '32px',
        '4xl': '40px',
        '5xl': '48px',
        '6xl': '64px',
        '7xl': '80px',
        '8xl': '96px',
        '9xl': '128px',
      },
      maxWidth: {
        'feed': '630px',
        'modal': '500px',
        'profile': '935px',
        'explore': '975px',
      },
      boxShadow: {
        'soft': '0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'medium': '0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.05)',
        'strong': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};