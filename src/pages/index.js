import React from "react"
import SEO from "../components/SEO"
import { Article, GatsbyLink, H2, Paragraph } from "muy"
import Hero from "../components/Hero"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Divider from "@material-ui/core/Divider"
import HeroImage from "../components/HeroImage"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"

const IndexPage = () => (
  <>
    <SEO title="Aulas de programação grátis para jovens" />
    <Article>
      <Box mb={1}>
        <Hero
          heroImage={<HeroImage />}
          title={"Aprenda programação gratuitamente."}
        />
      </Box>
      <Grid container={true} spacing={1}>
        <Grid item={true} xs={12} sm={6}>
          <Card component={"section"}>
            <CardContent>
              <H2 gutterBottom={true}>Para quem é o Educodar?</H2>
              <Paragraph>
                Tem pelo menos 14 anos e estuda em uma escola pública de
                Belo&nbsp;Horizonte&nbsp;(<abbr title="Minas Gerais">MG</abbr>){" "}
                <wbr />
                ou&nbsp;Porto&nbsp;Alegre&nbsp;(
                <abbr title="Rio Grande do Sul">RS</abbr>)?
              </Paragraph>
              <Paragraph>
                Então você pode se{" "}
                <GatsbyLink to="/quero-aprender">
                  inscrever para estudar no&nbsp;<strong>Educodar</strong>
                </GatsbyLink>
                .
              </Paragraph>
            </CardContent>
          </Card>
        </Grid>
        <Divider />
        <Grid item={true} xs={12} sm={6}>
          <Card component={"section"}>
            <CardContent>
              <H2 gutterBottom={true}>Divulgue o Educodar na sua escola</H2>
              <Paragraph>
                Você estuda ou leciona em uma escola em
                Belo&nbsp;Horizonte&nbsp;(
                <abbr title="Minas Gerais">MG</abbr>)? Ajude-nos
                a&nbsp;divulgar.
              </Paragraph>
              <Paragraph>
                Leve mais{" "}
                <GatsbyLink to="/tire-suas-duvidas">
                  informações sobre o Educodar
                </GatsbyLink>{" "}
                para sua&nbsp;escola.
              </Paragraph>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Article>
  </>
)

export default IndexPage
