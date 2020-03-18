import React from "react"
import { PageFooter } from "muy"
import Typography from "@material-ui/core/Typography"
import { Container } from "@material-ui/core"
import CodeOfConductLink from "../CodeOfConductLink"

const Footer = ({ siteTitle }) => (
  <PageFooter bgcolor={"primary"} pb={3} pt={3}>
    <Container maxWidth={"md"}>
      <Typography paragraph={true}>
        2019-{new Date().getFullYear()} <strong>{siteTitle}</strong>
      </Typography>
      <CodeOfConductLink />
    </Container>
  </PageFooter>
)

export default Footer
