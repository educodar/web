import React from "react"
import Button from "../../atoms/Button"
import ComputerImage from "../../images/computer-line@2x.png"
import "./styles.css"

const Hero = () => (
  <div className="hero">
    <img src={ComputerImage} className="image-hero"></img>
    <h1>Aulas de programação grátis para jovens</h1>
    <div>
      <Button text="Quero aprender" variant="primary" />
      <Button text="Quero aprender" variant="primary" outline={true} />
    </div>
  </div>
)

export default Hero
