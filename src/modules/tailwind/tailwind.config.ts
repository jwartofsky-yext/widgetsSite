import type { Config } from 'tailwindcss'

export default {
  content: ["./src/modules/**/*.{js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#A020F0",
      }
    },
  },
  plugins: [],
} satisfies Config