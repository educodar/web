import classNames from "classnames"
import PropTypes from "prop-types"
import React, { Component } from "react"
import "./styles.css"

class Button extends Component {
  render() {
    let classes = classNames(
      `btn`,
      `btn-${this.props.variant}`,
      this.props.outline && `outline`
    )

    return <button className={classes}>{this.props.text}</button>
  }
}

Button.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.string,
  outline: PropTypes.bool,
}

Button.defaultProps = {
  variant: "primary",
  outline: false,
}

export default Button
