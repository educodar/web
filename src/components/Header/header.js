import React from "react"
import { Link } from "gatsby"
import "./styles.css"

const Header = ({ siteTitle }) => (
  <header>
    <h1 className="logo">
      <Link to="/">{siteTitle}</Link>
    </h1>
    <nav></nav>
  </header>
)

export default Header
