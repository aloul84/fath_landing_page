// إعدادات Tailwind المشتركة لموقع فذ
tailwind.config = {
  theme: {
    extend: {
      fontFamily: { sans: ['Tajawal', 'system-ui', 'sans-serif'], display: ['Cairo', 'Tajawal', 'sans-serif'] },
      colors: {
        ink: { 950: '#05070f', 900: '#0a0f1f', 800: '#111a33', 700: '#1a2547', 600: '#2a3866' },
        gold: { 300: '#f7dc8f', 400: '#f2c94c', 500: '#e0a91b', 600: '#b98309' },
        neon: { cyan: '#22d3ee', purple: '#a855f7', pink: '#ec4899', lime: '#a3e635' },
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(34,211,238,.45)',
        gold: '0 0 40px -8px rgba(242,201,76,.45)',
      },
    },
  },
};
