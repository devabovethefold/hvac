import relumeTailwindPreset from "@relume_io/relume-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [relumeTailwindPreset],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "480px", // NO PERCENTAGES
        md: "768px",
        lg: "992px",
        xl: "1280px",
      },
    },
    extend: {
      colors: {
        brand: {
          dark: "#061d33",
          primary: "#0066cc",
          accent: "#1c4f82",
        },
      },
    },
  },
};
