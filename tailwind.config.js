module.exports = {
  mode: "jit",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"], // remove unused styles in production
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        proxima: ["var(--font-proxima)"],
        cardinal: ["var(--font-cardinal)"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
