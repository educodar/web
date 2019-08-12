import classNames from "classnames"
import PropTypes from "prop-types"
import React, { Component } from "react"
import "./styles.css"

class FeaturedSection extends Component {
  render() {
    let sectionClass = classNames(
      `featured-section`,
      `featured-section-level-${this.props.level}`
    )

    return (
      <section className={sectionClass}>
        <h3>{this.props.title}</h3>
        {this.props.children}
        {this.props.callToAction}
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
