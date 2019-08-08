import React from "react"
import ButtonDefault from "./ButtonDefault"
import ButtonPrimary from "./ButtonPrimary"
import ComputerImage from "../../images/computer-line@2x.png"
import "./styles.css"

const Hero = () => (
  <div className="hero">
    <img src={ComputerImage} className="image-hero"></img>
    <h1>Aulas de programação grátis para jovens</h1>
    <div>
      <ButtonPrimary buttonText="Quero aprender" />
      <ButtonDefault buttonText="Quero apoiar" />
    </div>
  </div>
)

export default Hero
