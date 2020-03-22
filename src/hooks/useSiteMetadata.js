import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadata = () => {
  const query = useStaticQuery(
    graphql`
      query SEO {
        site {
          siteMetadata {
            author
            defaultDescription: description
            defaultImage: image
            defaultTitle: title
            siteUrl
            title
            titleTemplate
          }
        }
      }
    `
  )

  if (typeof query === "undefined") {
    return null
  }

  return query.site.siteMetadata
}

export default useSiteMetadata
