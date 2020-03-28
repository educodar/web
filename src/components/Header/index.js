import React from "react"
import PropTypes from "prop-types"
import AppBar from "@material-ui/core/AppBar"
import { PageHeader } from "muy"
import { SiteTitle } from "muy"
import Toolbar from "@material-ui/core/Toolbar"

const Header = ({ siteTitle }) => (
  <AppBar component={PageHeader} position="static">
    <Toolbar>
      <SiteTitle>{siteTitle}</SiteTitle>
    </Toolbar>
  </AppBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
