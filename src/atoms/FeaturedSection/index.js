import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./featuredSection.module.css"

const propTypes = {
  children: PropTypes.node,
  level: PropTypes.oneOf([1, 2]),
  title: PropTypes.string,
}

const defaultProps = {
  level: 1,
}

const FeaturedSection = ({ children, level, title }) => {
  let className = `featuredSectionLevel${level}`

  return (
    <section className={styles[className]}>
      <h2 className={styles.featuredSectionHeading}>{title}</h2>
      {children}{" "}
      <Link to="/" className={styles.featuredSectionCallLink}>
        Saiba Mais
      </Link>
    </section>
  )
}

FeaturedSection.propTypes = propTypes
FeaturedSection.defaultProps = defaultProps

export default FeaturedSection
