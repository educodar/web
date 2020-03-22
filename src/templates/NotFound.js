import React from "react"
import { Article, GatsbyLink, H1, Paragraph } from "muy"

const NotFound = () => (
  <Article>
    <H1>Página não encontrada</H1>
    <Paragraph>
      Ops! A página que você está procurando pode ter sido removida ou
      renomeada.
    </Paragraph>
    <Paragraph>
      <GatsbyLink to="/">Voltar à página inicial</GatsbyLink>
    </Paragraph>
  </Article>
)

export default NotFound
