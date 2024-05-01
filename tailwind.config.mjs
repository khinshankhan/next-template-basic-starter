/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx,md}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,md}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,md}",
    "./content/**/*.{js,ts,jsx,tsx,mdx,md}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        background: "background",
      },
    },
  },
  plugins: [],
}

export default config
