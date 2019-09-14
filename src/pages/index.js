import FeaturedSection from "../atoms/FeaturedSection"
import Hero from "../molecules/Hero"
import React from "react"
import SEO from "../components/SEO"
import { Link } from "gatsby"

const HomePage = () => (
  <>
    <SEO />
    <Hero title="Aprenda programação gratuitamente." />
    <FeaturedSection level={1} title="Para quem é o Educodar?">
      <p>
        Tem pelo menos 14 anos e estuda em uma escola pública de
        Belo&nbsp;Horizonte&nbsp;(<abbr title="Minas Gerais">MG</abbr>) <wbr />
        ou&nbsp;Porto&nbsp;Alegre&nbsp;(
        <abbr title="Rio Grande do Sul">RS</abbr>)?
      </p>
      <p>
        Então você pode se{" "}
        <Link to="/quero-aprender">
          inscrever para estudar no <strong>Educodar</strong>
        </Link>
        .
      </p>
    </FeaturedSection>
    <FeaturedSection level={2} title="Como divulgar o Educodar na sua escola">
      <p>
        Se você estuda ou leciona em uma escola em Belo&nbsp;Horizonte&nbsp;(
        <abbr title="Minas Gerais">MG</abbr>), você pode nos ajudar a divulgar
        este projeto.
      </p>
      <p>
        Divulgue as{" "}
        <Link to="/tire-suas-duvidas">informações sobre o Educodar</Link> para
        sua escola.
      </p>
    </FeaturedSection>
  </>
)

export default HomePage
