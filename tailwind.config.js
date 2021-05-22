module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx,vue}', 'vite.config.ts'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
