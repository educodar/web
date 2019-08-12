import React from "react"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import FeaturedSection from "../atoms/FeaturedSection"
import { Link } from "gatsby"

const HomePage = () => (
  <>
    <SEO />
    <Hero />
    <FeaturedSection level="1" title="Para quem é o Educodar?">
      <p>
        Se você tem pelo menos 14 anos e estuda em uma escola pública de Belo
        Horizonte (MG) ou Porto Alegre (RS), você pode participar como estudante
        no Educod@r.{" "}
        <Link to="/" className="call-link">
          Saiba Mais
        </Link>
      </p>
    </FeaturedSection>
    <FeaturedSection
      level="2"
      title="Como divulgar o Educodar na sua escola"
      callToAction={
        <Link to="/" className="call-link">
          Saiba Mais
        </Link>
      }
    >
      <p>
        Se você estuda ou leciona em uma escola em Belo Horizonte (MG), você
        pode nos ajudar a divulgar este projeto.
      </p>
    </FeaturedSection>
  </>
)

export default HomePage
