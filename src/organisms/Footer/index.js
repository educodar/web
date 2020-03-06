import React from "react"
import style from "./footer.module.css"

import ConductCode from "../../molecules/ConductCode"

const Footer = () => (
  <footer className={style.footer}>
    <div>
      2019 <strong>Educodar</strong>
    </div>
    {/*<Link to="/privacidade">Privacidade e Uso de Dados</Link>
    <Link to="/termos-de-uso">Código de Conduta</Link>*/}
    <ConductCode />
  </footer>
)

export default Footer
