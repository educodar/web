import React from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import { Article, Header } from "muy"
import Typography from "@material-ui/core/Typography"
import { ListItemText } from "@material-ui/core"
import Link from "@material-ui/core/Link"

export default () => (
  <Article>
    <Header>
      <Typography component={"h1"} variant={"h1"}>
        Uhu! Agora é só esperar!
      </Typography>
      <Typography component={"p"} variant={"h2"}>
        Daqui a pouco a gente vai fazer contato com você.
      </Typography>
    </Header>
    <Typography paragraph={true}>
      Enquanto isso, olha só esses <em lang="en">links</em> interessantes pra
      você aprender mais sobre programação:
    </Typography>
    <List>
      <ListItem>
        <ListItemText>
          <Link
            href="https://educodar.herokuapp.com/"
            rel={"noopener noreferrer"}
            target={"_blank"}
            tabIndex={0}
          >
            Jogo do Aviãozinho
          </Link>
          <br />
          Passeie pelas nuvens em busca de balões.
        </ListItemText>
      </ListItem>
    </List>
  </Article>
)
