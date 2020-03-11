import React from "react"
import style from "./footer.module.css"

import ConductCodeLink from "../../molecules/ConductCodeLink"

const Footer = () => (
  <footer className={style.footer}>
    <div>
      2019-{new Date().getFullYear()} <strong>Educodar</strong>
    </div>
    <ConductCodeLink />
  </footer>
)

export default Footer
