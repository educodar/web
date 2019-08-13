import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header>
    <div className={styles.logo}>
      <Link to="/">{siteTitle}</Link>
    </div>
    <nav></nav>
  </header>
)

export default Header
