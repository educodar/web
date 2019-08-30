import Button from "../../atoms/Button"
import ComputerImage from "../../images/computer-line@2x.png"
import HeroImage from "../../atoms/HeroImage"
import React from "react"
import styles from "./hero.module.css"
import VerticalSpacing from "../../atoms/VerticalSpacing"

const Hero = props => (
  <section>
    <HeroImage></HeroImage>
    <div className={styles.hero}>
      <div className={styles.container}>
        <h1>{props.title}</h1>
        <img src={ComputerImage} alt="computer"></img>
      </div>
      <VerticalSpacing size={"1x"}></VerticalSpacing>
      <div>
        <Button variant="primary">Quero aprender</Button>{" "}
        <Button variant="primary" outline={true}>
          Quero apoiar
        </Button>
      </div>
    </div>
  </section>
)

export default Hero
