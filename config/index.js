const contentSecurityPolicy = require("./contentSecurityPolicy")
const productionSiteUrl = require("./productionSiteUrl")
const siteMetadata = require("./siteMetadata")

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: `gatsby-plugin-html-attributes`,
      options: {
        dir: `ltr`,
        lang: `pt-br`,
        itemProp: ``,
        itemType: `http://schema.org/WebPage`,
      },
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
      resolve: `gatsby-plugin-material-ui`,
    },
    {
      resolve: `gatsby-plugin-mdx`,
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*": [
            `Content-Security-Policy: ${contentSecurityPolicy.join(" ")},
            "Feature-Policy: ambient-light-sensor 'self'; autoplay 'self'; camera 'none'; encrypted-media 'self'; fullscreen 'none'; geolocation 'self'; gyroscope 'self'; magnetometer 'none'; microphone 'none'; midi 'none'; payment 'none'; speaker 'self'; sync-xhr 'self'; usb 'none'; vr 'none'",
            "Referrer-Policy: no-referrer",
            "X-Content-Type-Options: nosniff",
            "X-Frame-Options: DENY",
            "X-XSS-Protection: 1; mode=block",`,
          ],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [{ family: `Nunito`, subsets: [`latin`] }],
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: productionSiteUrl,
        sitemap: `${productionSiteUrl}/sitemap.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/../src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
    },
  ],
}
