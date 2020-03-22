import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ name, props }) => {
  /**
   * @property heroImage
   */
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "students.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1274) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (typeof data === "undefined" || !data.hasOwnProperty(name)) {
    return null
  }
  return <Img fluid={data[name].childImageSharp.fluid} {...props} />
}

export default Image
