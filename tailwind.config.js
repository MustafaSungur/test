module.exports = {
  content: ["./src//*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--custom-color-primary)",
          text: "var(--custom-color-text)",
        },
        accent: {
          DEFAULT: "var(--custom-color-accent)",
        },
      },
    },
  },
  plugins: [],
};
