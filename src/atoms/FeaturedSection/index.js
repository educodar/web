import classNames from "classnames"
import PropTypes from "prop-types"
import React, { Component } from "react"
import styles from "./featuredSection.module.css"
import { Link } from "gatsby"

class FeaturedSection extends Component {
  render() {
    let sectionClass = classNames(
      styles[`featuredSection`],
      styles[`featuredSectionLevel${this.props.level}`]
    )

    return (
      <section className={sectionClass}>
        <h3>{this.props.title}</h3>
        {this.props.children}{" "}
        <Link to="/" className={styles.callLink}>
          Saiba Mais
        </Link>
      </section>
    )
  }
}

FeaturedSection.propTypes = {
  level: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.any,
  callToAction: PropTypes.any,
}

FeaturedSection.defaultProps = {
  level: "1",
}

export default FeaturedSection
