import React from "react"
import SEO from "../components/SEO"
import { Link } from "gatsby"

export default () => (
<>
  <SEO />
  <article>
    <header>
      <h1>Quem faz o Educodar</h1>
    </header>
    <nav itemProp="breadcrumb">
      <Link to="/">Página inicial</Link>
      <span aria-current="page">Equipe</span>
    </nav>
    <h2>Educodar Belo Horizonte</h2>
    <ul>
      <li>Jimmy Andrade (Belo Horizonte) - Champion de Comunicação</li>
      <li>Leandro Victor (Belo Horizonte)</li>
      <li>Thais Nunes (Belo Horizonte) - Champion de Seleção de Turma</li>
      <li>Vagner dos Santos (Belo Horizonte)</li>
    </ul>
    <h2>Site Educodar.com.br</h2>
    <ul>
      <li>Daniel Nascimento (Belo Horizonte)</li>
      <li>Inajara Leppa (Porto Alegre)</li>
      <li>Jimmy Andrade (Belo Horizonte)</li>
      <li>Lucas Carvalhais (Belo Horizonte)</li>
    </ul>
    <h2>Já colaboraram</h2>
    <ul>
      <li>André Araújo (Belo Horizonte)</li>
      <li>Bruna Castelo (Belo Horizonte)</li>
      <li>Luciano Borges (Belo Horizonte) - Suporte e Orçamento</li>
      <li>Maria Simas (Belo Horizonte)</li>
      <li>Nayara Souza (Belo Horizonte)</li>
      <li>Paulo Gama (Belo Horizonte e Recife)</li>
    </ul>
  </article>
</>)