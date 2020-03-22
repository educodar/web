import React from "react"
import { Article, GatsbyLinkButton, Question } from "muy"
import Typography from "@material-ui/core/Typography"
import { Box } from "@material-ui/core"
import SEO from "../../components/SEO"

export default () => (
  <>
    <SEO title={"Tire suas dúvidas"} />
    <Article>
      <Typography component={"h1"} variant={"h1"}>
        Tire suas dúvidas
      </Typography>
      <Box component={"dl"}>
        <Question question="O que é o Educodar">
          É um projeto voluntário que é realizado por pessoas que trabalham na
          ThoughtWorks, que introduz a pessoas a partir de 14 anos conceitos de
          lógica de programação e outros conteúdos relacionados a tecnologia da
          informação. Porém, o Educodar não é um curso.
        </Question>
        <Question question="Tenho que pagar para estudar no Educodar?">
          Não, ele é 100% gratuito.
        </Question>
        <Question question="Como o Educodar me ajuda a ingressar no mercado de trabalho?">
          <p>
            Se você for menor de idade e, portanto, ainda estiver na época da
            escola, nossa preocupação não será em arrumar um emprego pra você.
            Nós vamos mostrar a você que a área de tecnologia é uma possível
            oportunidade para o seu futuro.
          </p>
          <p>
            Se você é maior de idade e está procurando uma oportunidade de
            trabalho, não podemos garantir que você saia daqui com um emprego.
            Porém, vamos te apoiar e te dar direcionamento em relação a
            currículo, processos seletivos e possíveis cursos.
          </p>
        </Question>
        <Question question="Tenho que fazer provas e tirar nota boa?">
          Não. Pra gente, o mais importante é que todas as pessoas aprendam. Seu
          desempenho será acompanhado durante as aulas, e sempre vai ter alguém
          para te dar apoio se você tiver alguma dúvida.
        </Question>
        <Question question="Como funciona o Educodar?">
          Nós dividimos o Educodar em duas fases. Na primeira, fazemos um
          <em lang="en">workshop</em> super divertido, que vai ajudar você a
          aprender conceitos básicos de programação (como lógica de programação,
          por exemplo). Na segunda fase, você aprenderá a programar em aulas que
          acontecem semanalmente.
        </Question>
        <Question question="O que aprenderei no Educodar?">
          No início, você aprenderá 3 linguagens que são utilizadas para
          construir sites e até alguns aplicativos. Elas são o HTML, CSS e
          JavaScript.{" "}
          {/*Se você quiser saber mais sobre essas linguagens, pode
          acessar&hellip;*/}
        </Question>
        <Question question="Não sei nada de informática ou programação. Posso me candidatar?">
          Sim. Todas as pessoas são bem-vindas.
        </Question>
        <Question question="Eu não tenho um computador. Posso participar?">
          Sim. Enquanto você estiver em nosso local de aprendizado, você poderá
          usar um computador que ficará reservado para você. Porém, nós não
          podemos emprestar o computador para você levar para casa.
        </Question>
        <Question question="O Educodar é um processo de recrutamento?">
          Não. O programa Educodar não tem vínculo com nenhum processo de
          recrutamento. Porém, ele pode te ajudar indiretamente a se sair melhor
          em algum processo.
        </Question>
      </Box>
      <GatsbyLinkButton color={"primary"} to="/quero-aprender">
        Quero aprender a programar
      </GatsbyLinkButton>
    </Article>
  </>
)
