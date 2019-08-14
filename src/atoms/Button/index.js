import classNames from "classnames"
import PropTypes from "prop-types"
import React, { Component } from "react"
import styles from "./button.module.css"

class Button extends Component {
  render() {
    let buttonClasses = classNames(
      styles.button,
      styles[`button${this.props.variant}`],
      this.props.outline && styles.outline
    )

    return <button className={buttonClasses}>{this.props.text}</button>
  }
}

Button.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.string,
  outline: PropTypes.bool,
}

Button.defaultProps = {
  variant: "Primary",
  outline: false,
}

export default Button
