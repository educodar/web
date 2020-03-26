import { GatsbyLinkButton, H2, Paragraph } from "muy"
import React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import { Card } from "@material-ui/core"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"

const useStyles = makeStyles((theme) => ({
  h2: {
    color: theme.palette.primary.dark,
    fontSize: "2rem",
    fontWeight: "bold",
  },
}))

const Hero = ({ heroImage, title }) => {
  const classes = useStyles()
  return (
    <Card>
      <CardMedia>{heroImage}</CardMedia>
      <CardContent>
        <H2 classes={{ h2: classes.h2 }} gutterBottom={true}>
          {title}
        </H2>
        <GatsbyLinkButton
          color={"primary"}
          to={"/quero-aprender"}
          variant={"contained"}
        >
          Quero aprender
        </GatsbyLinkButton>
        &nbsp;
        <GatsbyLinkButton
          color={"initial "}
          to="/tire-suas-duvidas"
          variant={"contained"}
        >
          Tire suas dúvidas
        </GatsbyLinkButton>
      </CardContent>
    </Card>
  )
}

export default Hero
