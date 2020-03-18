import React from "react"
import { MainContent } from "muy"

import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline"
import Divider from "@material-ui/core/Divider"

import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider"

import Header from "../components/Header"
import Footer from "../components/Footer"
import theme from "../themes"
import { MDXProvider } from "@mdx-js/react"
import useMDXComponents from "../hooks/useMDXComponents"

export default ({ children }) => {
  const components = useMDXComponents()
  return (
    <MuiThemeProvider theme={theme}>
      <MDXProvider components={components}>
        <CssBaseline />
        <Header siteTitle={"Educodar"} />
        <Divider />
        <MainContent>
          <Container maxWidth={"md"}>{children}</Container>
        </MainContent>
        <Divider />
        <Footer siteTitle={"Educodar"} />
      </MDXProvider>
    </MuiThemeProvider>
  )
}
