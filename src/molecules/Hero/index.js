import ComputerImage from "../../images/computer-line@2x.png"
import HeroImage from "../../atoms/HeroImage"
import React from "react"
import styles from "./hero.module.css"
import VerticalSpacing from "../../atoms/VerticalSpacing"
import ButtonLink from "../../atoms/ButtonLink"

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
        <ButtonLink to="/quero-aprender" variant="primary">
          Quero aprender
        </ButtonLink>

        {/*<ButtonLink to="/tire-suas-duvidas" variant="primary" outline={true}>
          Tire suas dúvidas
</ButtonLink>*/}
      </div>
    </div>
    <VerticalSpacing size="4x" />
  </section>
)

export default Hero
