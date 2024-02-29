import type { Config } from 'tailwindcss'

export default {
  content: ["./**/*.{js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#A020F0",
      }
    },
  },
  plugins: [],
} satisfies Config