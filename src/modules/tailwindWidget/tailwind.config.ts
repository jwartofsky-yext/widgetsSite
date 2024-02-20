import type { Config } from 'tailwindcss'

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  purge: {
    content: ['./src/modules/tailwindWidget/**/*.{html,js,jsx,ts,tsx}'],
  },
  plugins: [],
} satisfies Config