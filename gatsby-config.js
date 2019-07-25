module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-plugin-layout`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Educodar`,
        short_name: `Educodar`,
        start_url: `/`,
        background_color: `#00BCCD`,
        theme_color: `#0078BF`,
        icon: `src/images/icon.png`,
        display: `minimal-ui`,
        scope: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: false,
        directives: {
          "script-src": "'self' 'unsafe-inline'",
          "style-src": "'self' 'unsafe-inline'",
        },
      },
    },
  ],
}
