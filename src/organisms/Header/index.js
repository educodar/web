import { Link } from "gatsby"
import React from "react"
import styles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <h1 className={styles.logo}>
      <Link to="/">{siteTitle}</Link>
    </h1>
    <nav></nav>
  </header>
)

export default Header
