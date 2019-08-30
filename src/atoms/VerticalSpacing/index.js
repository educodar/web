import PropTypes from "prop-types"
import React from "react"
import styles from "./verticalSpacing.module.css"

const propTypes = {
  size: PropTypes.string,
}

const defaultProps = {
  size: "1x",
}

const VerticalSpacing = ({ size }) => (
  <div className={styles[`verticalSpacing${size}`]}></div>
)

VerticalSpacing.propTypes = propTypes
VerticalSpacing.defaultProps = defaultProps

export default VerticalSpacing
