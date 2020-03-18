import React from "react"
import Typography from "@material-ui/core/Typography"
import { Link as GatsbyLink } from "gatsby"
import { Article } from "muy"
import Link from "@material-ui/core/Link"

const NotFound = () => (
  <Article>
    <Typography component={"h1"} variant={"h1"}>
      Página não encontrada
    </Typography>
    <Typography paragraph={true}>
      Ops! A página que você está procurando pode ter sido removida ou
      renomeada.
    </Typography>
    <Typography paragraph={true}>
      <Link component={GatsbyLink} to="/">
        Voltar à página inicial
      </Link>
    </Typography>
  </Article>
)

export default NotFound
