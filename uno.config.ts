import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      navy: {
        DEFAULT: '#1E3A8A',
        light: '#5B75D9',
        mid: '#142058',
        deep: '#0D1640',
        darker: '#080E2A',
      },
      gold: {
        DEFAULT: '#F5C518',
        light: '#FFD94A',
        dim: '#C49A00',
      },
      threat: '#E05265',
      detect: '#5B75D9',
      rule: '#38C97A',
      agent: '#9B6DFF',
      warn: '#F0963A',
    },
  },
  shortcuts: {
    'glass': 'bg-[rgba(13,22,64,0.65)] backdrop-blur-md border border-[rgba(245,197,24,0.12)] rounded-xl',
    'badge-pill': 'inline-block px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider',
  },
})
