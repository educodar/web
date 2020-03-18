import React from "react"
import { Article } from "muy"
import Typography from "@material-ui/core/Typography"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

export default () => (
  <Article>
    <Typography component={"h1"} variant={"h1"}>
      Como ajudar
    </Typography>
    <List>
      <ListItem>
        <ListItemText>
          Facilitação de <em lang="en">workshops</em>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>Facilitação de aulas</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>Suporte</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>Compra de lanche</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>Gestão de orçamento</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>Divulgação nas redes sociais</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>Desenvolvimento do site</ListItemText>
      </ListItem>
    </List>
  </Article>
)
