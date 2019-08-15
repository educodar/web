import React from "react"
import Button from "../../atoms/Button"
import ComputerImage from "../../images/computer-line@2x.png"
import HeroImage from "../../atoms/HeroImage"
import styles from "./hero.module.css"

const Hero = () => (
  <div>
    <HeroImage></HeroImage>
    <div className={styles.hero}>
      <div className={styles.text}>
        <h1>Aprenda programação gratuitamente.</h1>
        <img src={ComputerImage} alt="computer"></img>
      </div>
      <div>
        <Button variant="primary">Quero aprender</Button>{" "}
        <Button variant="primary" outline={true}>
          Quero apoiar
        </Button>
      </div>
    </div>
  </div>
)

export default Hero
