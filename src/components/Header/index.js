import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { PageHeader } from "muy"
import AppBar from "@material-ui/core/AppBar"
import Typography from "@material-ui/core/Typography"
import { Toolbar } from "@material-ui/core"
import Link from "@material-ui/core/Link"

const Header = ({ siteTitle }) => (
  <AppBar component={PageHeader} position="static">
    <Toolbar>
      <Typography component="h1">
        <Link color={"inherit"} component={GatsbyLink} to="/" underlineHover>
          <strong>{siteTitle}</strong>
        </Link>
      </Typography>
    </Toolbar>
  </AppBar>
)

export default Header
