import PropTypes from "prop-types"
import React from "react"
import styles from "./button.module.css"

const propTypes = {
  children: PropTypes.node.isRequired,
  outline: PropTypes.bool,
  variant: PropTypes.string,
}

const defaultProps = {
  outline: false,
  variant: "primary",
}

const Button = ({ children, outline, variant }) => {
  let className = "button"
  className = variant === "primary" ? className.concat("Primary") : className
  className = outline === true ? className.concat("Outline") : className
  return <button className={styles[className]}>{children}</button>
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button
