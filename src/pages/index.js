import FeaturedSection from "../atoms/FeaturedSection"
import Hero from "../molecules/Hero"
import React from "react"
import SEO from "../components/SEO"

const HomePage = () => (
  <>
    <SEO />
    <Hero title="Aprenda programação gratuitamente." />
    <FeaturedSection level={1} title="Para quem é o Educodar?">
      <p>
        Se você tem pelo menos 14 anos e estuda em uma escola pública de
        Belo&nbsp;Horizonte&nbsp;(<abbr title="Minas Gerais">MG</abbr>) <wbr />
        ou&nbsp;Porto&nbsp;Alegre&nbsp;(
        <abbr title="Rio Grande do Sul">RS</abbr>), você pode participar como
        estudante no <strong>Educodar</strong>.
      </p>
    </FeaturedSection>
    <FeaturedSection level={2} title="Como divulgar o Educodar na sua escola">
      <p>
        Se você estuda ou leciona em uma escola em Belo&nbsp;Horizonte&nbsp;(
        <abbr title="Minas Gerais">MG</abbr>), você pode nos ajudar a divulgar
        este projeto.
      </p>
    </FeaturedSection>
  </>
)

export default HomePage
