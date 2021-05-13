module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === "production",
    content: ["./layouts/**/*.html"],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter var",
          ...require("tailwindcss/defaultTheme").fontFamily.sans,
        ],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss/plugin")(function ({ addBase }) {
      addBase({ ".type-alt": { "font-feature-settings": '"salt"' } });
    }),
  ],
};
