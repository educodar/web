import classNames from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./button.module.css"

const getStyles = props => {
  return classNames(
    styles.button,
    styles[`button${props.variant}`],
    props.outline && styles.outline
  )
}

const Button = props => {
  let buttonClasses = getStyles(props)
  return <button className={buttonClasses}>{props.children}</button>
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  outline: PropTypes.bool,
  variant: PropTypes.string,
}

Button.defaultProps = {
  outline: false,
  variant: "primary",
}

export default Button
