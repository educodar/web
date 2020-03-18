import image from "../../images/students.jpg"
import { Image } from "muy"
import React from "react"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import makeStyles from "@material-ui/core/styles/makeStyles"
import GatsbyLinkButton from "../GatsbyLinkButton"
import GatsbyLink from "../GatsbyLink"

const useStyles = makeStyles(theme => ({
  h2: {
    color: theme.palette.primary.dark,
    fontSize: "2rem",
    fontWeight: "bold",
  },
}))

const Hero = ({ title }) => {
  const classes = useStyles()
  return (
    <Box>
      <Image alt={"Estudantes"} src={image} variant={"cover"} />
      <Typography component={"h2"} classes={{ h2: classes.h2 }} variant={"h2"}>
        {title}
      </Typography>
      <Typography paragraph={true}>
        <GatsbyLinkButton
          color={"primary"}
          to={"/quero-aprender"}
          variant={"contained"}
        >
          Quero aprender
        </GatsbyLinkButton>
      </Typography>
      <Typography paragraph={true}>
        <GatsbyLink outline={true} to="/tire-suas-duvidas" variant="primary">
          Tire suas dúvidas
        </GatsbyLink>
      </Typography>
    </Box>
  )
}

export default Hero
