import React from "react"
import Button from "../Button/button"
import "./styles.css"

const Hero = () => (
  <div className="hero">
    <h1>Aulas de programação grátis para jovens</h1>
    <p>
      <Button buttonText="Button 1" />
      <Button buttonText="Button 2" />
    </p>
  </div>
)

export default Hero
