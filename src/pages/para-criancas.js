import React from "react"
import SEO from "../components/SEO"

export default () => (
  <>
    <SEO description="Dicas de tutoriais, jogos e cursos para ensinar crianças a programar." />
    <p>
      O Educodar é feito para quem tem pelo menos 14 anos e estuda em escolas
      públicas.
    </p>
    <p>
      Para quem ainda não possui idade suficiente para participar, ou estuda em
      escola particular, temos algumas indicações:
    </p>
    <ul>
      <li>
        <a
          href="https://www.yadaa.com.br/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Yadaa - Escola de Programação
        </a>
        : escola de Antonio de Padua Paes
      </li>
      <li>
        <a
          href="https://www.youtube.com/channel/UCb1qu0_NRwZY9yo_VgSdd9w/videos?view=0&sort=p&flow=grid"
          rel="noopener noreferrer"
          target="_blank"
        >
          Yadaa no YouTube
        </a>
        : inclui vídeos para Scratch e Trunkable
      </li>
    </ul>
  </>
)
