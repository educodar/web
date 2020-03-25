import { GatsbyLinkButton, H2 } from "muy"
import React from "react"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import makeStyles from "@material-ui/core/styles/makeStyles"

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
    <Box>
      {heroImage}
      <H2 classes={{ h2: classes.h2 }}>{title}</H2>
      <Typography paragraph={true}>
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
      </Typography>
    </Box>
  )
}

export default Hero
