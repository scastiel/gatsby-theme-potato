const path = require("path")

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-potato`,
      options: {},
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Sébastien Castiel",
        short_name: "S. Castiel",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#66aacc",
        display: "minimal-ui",
        icon: path.resolve("content/assets/logo.png"),
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-netlify",
  ],
  siteMetadata: {
    title: "Sébastien Castiel",
    siteUrl: "https://blog.castiel.me",
    description:
      "I’m Sébastien Castiel, and I write about web development and some other stuff.",
    lang: "en",
  },
}
