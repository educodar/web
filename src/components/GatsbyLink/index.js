import React from "react"
import { Link } from "gatsby"
import { default as MuiLink } from "@material-ui/core/Link"

const GatsbyLink = props => <MuiLink component={Link} {...props} />

export default GatsbyLink
