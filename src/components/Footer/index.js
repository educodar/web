import React from "react"
import { GatsbyLink, PageFooter } from "muy"
import Typography from "@material-ui/core/Typography"
import { Container } from "@material-ui/core"

const Footer = ({ siteTitle }) => (
  <PageFooter bgcolor={"primary"} pb={3} pt={3}>
    <Container maxWidth={"md"}>
      <Typography paragraph={true}>
        2019-{new Date().getFullYear()} <strong>{siteTitle}</strong>
      </Typography>
      <GatsbyLink target={"_self"} to={"/codigo-de-conduta"}>
        Código&nbsp;de&nbsp;Conduta
      </GatsbyLink>
    </Container>
  </PageFooter>
)

export default Footer
