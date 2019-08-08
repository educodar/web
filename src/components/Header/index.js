import React from "react"
import { Link } from "gatsby"
import "./styles.css"

const Header = ({ siteTitle }) => (
  <header>
    <div className="logo">
      <Link to="/">{siteTitle}</Link>
    </div>
    <nav></nav>
  </header>
)

export default Header
