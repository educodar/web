import PropTypes from "prop-types"
import React from "react"
import styles from "../Button/button.module.css"
import { Link } from "gatsby"
import Button from "../Button"

const propTypes = {
  children: PropTypes.node.isRequired,
  outline: PropTypes.bool,
  variant: PropTypes.string,
}

const defaultProps = {
  outline: false,
  variant: "primary",
}

const ButtonLink = ({ children, outline, variant, ...props }) => {
  let className = "button"
  className = variant === "primary" ? className.concat("Primary") : className
  className = outline === true ? className.concat("Outline") : className
  return (
    <Link className={styles[className]} {...props}>
      {children}
    </Link>
  )
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default ButtonLink
