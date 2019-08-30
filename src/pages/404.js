import React from "react"
import SEO from "../components/SEO"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <>
    <SEO />
    <article>
      <h1>Página não encontrada</h1>
      <p>
        Ops! A página que você está procurando pode ter sido removida ou
        renomeada.
      </p>
      <p>
        <Link to="/">Voltar à página inicial</Link>
      </p>
    </article>
  </>
)

export default NotFoundPage
