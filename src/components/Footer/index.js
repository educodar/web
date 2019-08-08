import React from "react"
import "./styles.css"
import thoughtworks_logo from "../../images/thoughtworks_logo.png"
import thoughtworks_logo2x from "../../images/thoughtworks_logo@2x.png"
import thoughtworks_logo3x from "../../images/thoughtworks_logo@3x.png"

const Footer = () => (
  <footer>
    <img
      src={thoughtworks_logo}
      alt="Thoughtworks Logo"
      srcSet={`${thoughtworks_logo2x} 2x,${thoughtworks_logo3x} 3x`}
      //class="Imagem-2"
    />
  </footer>
)

export default Footer
