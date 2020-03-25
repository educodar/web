/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import useSiteMetadata from "../../hooks/useSiteMetadata"

/**
 * @todo Move SEO component to metax project
 * @param description
 * @param image
 * @param lang
 * @param meta
 * @param pathname
 * @param title
 * @return {*}
 * @constructor
 */
function SEO({
  author,
  article,
  description,
  image,
  lang,
  meta,
  pageType,
  pathname,
  title,
  titleTemplate,
}) {
  const siteMetadata = useSiteMetadata()

  title = title || (siteMetadata && siteMetadata.defaultTitle)
  titleTemplate = titleTemplate || (siteMetadata && siteMetadata.titleTemplate)

  const metaAuthor = author || (siteMetadata && siteMetadata.author)
  const metaDescription =
    description || (siteMetadata && siteMetadata.defaultDescription)
  const metaImage = image || (siteMetadata && siteMetadata.defaultImage)

  return (
    <Helmet
      defer={false}
      htmlAttributes={{
        lang,
      }}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: "google-site-verification",
          content: "d56gI8ef4vlvD5c60_X2KNMV7KNNlgEalpcH84eWbs8",
        },
        {
          name: "image",
          content: metaImage,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: article ? `article` : pageType ? pageType : `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
      title={title}
      titleTemplate={titleTemplate}
    />
  )
}

SEO.defaultProps = {
  article: false,
  description: ``,
  image: null,
  lang: `en`,
  meta: [],
  pathname: null,
}

SEO.propTypes = {
  article: PropTypes.bool,
  description: PropTypes.string,
  lang: PropTypes.string,
  image: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  pathname: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default SEO
