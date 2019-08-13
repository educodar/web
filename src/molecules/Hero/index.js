import React from "react"
import Button from "../../atoms/Button"
import ComputerImage from "../../images/computer-line@2x.png"
import Photography from "../../atoms/Photography"
import styles from "./hero.module.css"

const Hero = () => (
  <div>
    <Photography></Photography>
    <div className={styles.hero}>
      <div className={styles.text}>
        <h1>Aprenda programação gratuitamente.</h1>
        <img src={ComputerImage} alt="computer"></img>
      </div>
      <div>
        <Button text="Quero aprender" variant="Primary" />{" "}
        <Button text="Quero apoiar" variant="Primary" outline={true} />
      </div>
    </div>
  </div>
)

export default Hero
