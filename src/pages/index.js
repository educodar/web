import React from "react"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import Lead1 from "../components/Lead1"
import Lead2 from "../components/Lead2"

const HomePage = () => (
  <>
    <SEO />
    <Hero />
    <Lead1
      leadTitle="Para quem é o Educodar?"
      leadText="Se você tem pelo menos 14 anos e estuda
em uma escola pública de Belo Horizonte (MG) ou Porto Alegre (RS), você pode participar
como estudante no Educod@r."
      linkText="Saiba mais"
    />
    <Lead2
      leadTitle="Como divulgar o Educodar na sua escola"
      leadText="Se você estuda ou leciona em uma escola
em Belo Horizonte (MG), você pode
nos ajudar a divulgar este projeto."
      linkText="Saiba mais"
    />
  </>
)

export default HomePage
