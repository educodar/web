import React from "react"
import { Article, GatsbyLink } from "muy"
import Hero from "../components/Hero"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"

export default () => (
  <Article>
    <Hero title={"Aprenda programação gratuitamente."} />
    <Card component={"section"}>
      <CardContent>
        <Typography component={"h2"} variant={"h2"}>
          Para quem é o Educodar?
        </Typography>
        <Typography paragraph={true}>
          Tem pelo menos 14 anos e estuda em uma escola pública de
          Belo&nbsp;Horizonte&nbsp;(<abbr title="Minas Gerais">MG</abbr>){" "}
          <wbr />
          ou&nbsp;Porto&nbsp;Alegre&nbsp;(
          <abbr title="Rio Grande do Sul">RS</abbr>)?
        </Typography>
        <Typography paragraph={true}>
          Então você pode se{" "}
          <GatsbyLink to="/quero-aprender">
            inscrever para estudar no <strong>Educodar</strong>
          </GatsbyLink>
          .
        </Typography>
      </CardContent>
    </Card>
    <Divider />
    <Card component={"section"}>
      <CardContent>
        <Typography component={"h2"} variant={"h2"}>
          Como divulgar o Educodar na sua escola
        </Typography>
        <Typography paragraph={true}>
          Se você estuda ou leciona em uma escola em Belo&nbsp;Horizonte&nbsp;(
          <abbr title="Minas Gerais">MG</abbr>), você pode nos ajudar a divulgar
          este projeto.
        </Typography>
        <Typography paragraph={true}>
          Divulgue as{" "}
          <GatsbyLink to="/tire-suas-duvidas">
            informações sobre o Educodar
          </GatsbyLink>{" "}
          para sua escola.
        </Typography>
      </CardContent>
    </Card>
  </Article>
)
