import { Link } from "gatsby"
import React from "react"
import style from "./footer.module.css"

const Footer = () => (
  <footer className={style.footer}>
    <Link to="/privacidade">Privacidade e Uso de Dados</Link>
    <Link to="/termos-de-uso">Termos de uso</Link>
  </footer>
)

export default Footer
