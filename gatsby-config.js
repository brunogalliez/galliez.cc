module.exports = {
  siteMetadata: {
    title: `Bruno Galliez ☾ Designer`,
    name: `Bruno Galliez`,
    siteUrl: `https://galliez.cc`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Designer at <a href='https://concrete.com.br/' target='blank'>Concrete</a>, based in Rio de Janeiro.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/brunogalliez`,
      },
      {
        name: `github`,
        url: `https://github.com/brunogalliez`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/brunogalliez`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/brunogalliez`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/brunogalliez`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: false,
        sources: {
          local: true,
          contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
