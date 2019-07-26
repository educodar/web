module.exports = {
  siteMetadata: {
    title: `Educodar - Aulas de programação grátis para jovens`,
    titleTemplate: `%s · Educodar`,
    siteUrl: `https://educodar.com.br`,
    description: `Projeto de ensino de programação básica e exposição a T.I. para estudantes de escolas de comunidades. Iniciativa sem fins lucrativos. Cursos e alimentação gratuitos.`,
    image: "/images/logo.png",
  },
  plugins: [
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
    {
      resolve: `gatsby-plugin-html-attributes`,
      options: {
        lang: `pt-br`,
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
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*": [
            "Content-Security-Policy: base-uri 'self'; default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; object-src 'none'; form-action 'self'; font-src 'self' data:; connect-src 'self'; img-src 'self' data:;",
            "Feature-Policy: ambient-light-sensor 'self'; autoplay 'self'; camera 'none'; encrypted-media 'self'; fullscreen 'none'; geolocation 'self'; gyroscope 'self'; magnetometer 'none'; microphone 'none'; midi 'none'; payment 'none'; speaker 'self'; sync-xhr 'self'; usb 'none'; vr 'none'",
            "Referrer-Policy: no-referrer",
            "X-Content-Type-Options: nosniff",
            "X-Frame-Options: DENY",
            "X-XSS-Protection: 1; mode=block",
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
  ],
}
