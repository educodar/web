import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <h1 id="logo">
      <Link to="/">{siteTitle}</Link>
    </h1>
    <nav></nav>
  </header>
)

export default Header
