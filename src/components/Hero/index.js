import React from "react"
import Button from "../../atoms/Button"
import ComputerImage from "../../images/computer-line@2x.png"
import Photography from "../Photography"
import "./styles.css"

const Hero = () => (
  <div>
    <Photography></Photography>
    <div className="hero">
      <div className="text">
        <h1>Aulas de programação grátis para jovens</h1>
        <img src={ComputerImage} className="image-hero"></img>
      </div>
      <div>
        <Button text="Quero aprender" variant="primary" />{" "}
        <Button text="Quero aprender" variant="primary" outline={true} />
      </div>
    </div>
  </div>
)

export default Hero
