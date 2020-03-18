import React from "react"
import { Article } from "muy"
import Typography from "@material-ui/core/Typography"
import SEO from "../../components/SEO"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"

export default () => (
  <>
    <SEO />
    <Article>
      <Typography component={"h1"} variant={"h1"}>
        Quem faz o Educodar
      </Typography>
      <Typography component={"h2"} variant={"h2"}>
        Educodar Belo Horizonte
      </Typography>
      <List>
        <ListItem>
          Jimmy Andrade (Belo Horizonte) - Champion de Comunicação
        </ListItem>
        <ListItem>Leandro Victor (Belo Horizonte)</ListItem>
        <ListItem>
          Thais Nunes (Belo Horizonte) - Champion de Seleção de Turma
        </ListItem>
        <ListItem>Vagner dos Santos (Belo Horizonte)</ListItem>
      </List>
      <Typography component={"h2"} variant={"h2"}>
        Site Educodar.com.br
      </Typography>
      <List>
        <ListItem>Daniel Nascimento (Belo Horizonte)</ListItem>
        <ListItem>Inajara Leppa (Porto Alegre)</ListItem>
        <ListItem>Jimmy Andrade (Belo Horizonte)</ListItem>
        <ListItem>Lucas Carvalhais (Belo Horizonte)</ListItem>
        <ListItem>Vinícius Ponciano (Belo Horizonte)</ListItem>
      </List>
      <Typography component={"h2"} variant={"h2"}>
        Já colaboraram
      </Typography>
      <List>
        <ListItem>André Araújo (Belo Horizonte)</ListItem>
        <ListItem>Bruna Castelo (Belo Horizonte)</ListItem>
        <ListItem>
          Luciano Borges (Belo Horizonte) - Suporte e Orçamento
        </ListItem>
        <ListItem>Maria Simas (Belo Horizonte)</ListItem>
        <ListItem>Nayara Souza (Belo Horizonte)</ListItem>
        <ListItem>Paulo Gama (Belo Horizonte e Recife)</ListItem>
      </List>
    </Article>
  </>
)
