import Button from "@material-ui/core/Button"
import React from "react"
import PropTypes from "prop-types"
import GatsbyLink from "../GatsbyLink"
import makeStyles from "@material-ui/core/styles/makeStyles"

const propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
}

const useStyles = makeStyles({
  root: {
    textDecoration: "none",
  },
})

const GatsbyLinkButton = ({ children, variant, ...props }) => {
  const classes = useStyles()
  return (
    <Button
      classes={classes}
      component={GatsbyLink}
      variant={variant}
      {...props}
    >
      {children}
    </Button>
  )
}

export default GatsbyLinkButton

GatsbyLinkButton.propTypes = propTypes
