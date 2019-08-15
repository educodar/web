import classNames from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./featuredSection.module.css"
import { Link } from "gatsby"

const getStyles = props => {
  const level = props.level

  return classNames(
    styles.featuredSection,
    styles[`featuredSectionLevel${level}`]
  )
}

const FeaturedSection = props => {
  let sectionClass = getStyles(props)

  return (
    <section className={sectionClass}>
      <h3>{props.title}</h3>
      {props.children}{" "}
      <Link to="/" className={styles.callLink}>
        Saiba Mais
      </Link>
    </section>
  )
}

FeaturedSection.propTypes = {
  callToAction: PropTypes.any,
  children: PropTypes.node,
  level: PropTypes.oneOf([1, 2]),
  title: PropTypes.string,
}

FeaturedSection.defaultProps = {
  level: 1,
}

export default FeaturedSection
