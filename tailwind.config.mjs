export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gruv: {
          bg: "#1e2021",
          "bg-tinted": "#2a2929",
          "highlight-red-orange": "#fa4835",
          "highlight-yellow": "#fe8118",
          "highlight-green": "#8dbc7a",
        },
      },
    },
  },
};
