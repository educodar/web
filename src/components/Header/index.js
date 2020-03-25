import React from "react"
import PropTypes from "prop-types"
import AppBar from "@material-ui/core/AppBar"
import { PageHeader } from "muy"
import { SiteTitle } from "muy"
import Toolbar from "@material-ui/core/Toolbar"

const Index = ({ siteTitle }) => (
  <AppBar component={PageHeader} position="static">
    <Toolbar>
      <SiteTitle>{siteTitle}</SiteTitle>
    </Toolbar>
  </AppBar>
)

Index.propTypes = {
  siteTitle: PropTypes.string,
}

Index.defaultProps = {
  siteTitle: ``,
}

export default Index
