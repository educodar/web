import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

/**
 * @todo Adopt hooks for SEO component
 * @todo Move SEO component to metax project
 * @param title
 * @param description
 * @param image
 * @param pathname
 * @param pageType
 * @param article
 */
const SEO = ({ title, description, image, pathname, pageType, article }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          siteUrl,
          defaultImage,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || "/"}`,
      }
      return (
        <Helmet
          defer={false}
          title={seo.title}
          titleTemplate={titleTemplate}
          meta={[
            {
              name: "description",
              content: seo.description,
            },
            {
              name: "image",
              content: seo.image,
            },
            {
              name: "google-site-verification",
              content: "d56gI8ef4vlvD5c60_X2KNMV7KNNlgEalpcH84eWbs8",
            },
          ]}
        />
      )
    }}
  />
)

export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
        defaultImage: image
      }
    }
  }
`

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
}
