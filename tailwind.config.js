module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === "production",
    content: ["./layouts/**/*.html"],
  },
  plugins: [require("@tailwindcss/typography")],
};
