/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import { MainContent, useMDXComponents } from "muy"

import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline"
import Divider from "@material-ui/core/Divider"

import Header from "../components/Header"
import Footer from "../components/Footer"
import theme from "../themes"
import { MDXProvider } from "@mdx-js/react"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import useSiteMetadata from "../hooks/useSiteMetadata"

const PureLayout = ({ children, markdownComponents, metadata, theme }) => (
  <ThemeProvider theme={theme}>
    <MDXProvider components={markdownComponents}>
      <CssBaseline />
      <Header siteTitle={metadata.title} />
      <Divider />
      <MainContent>
        <Container maxWidth={"md"}>{children}</Container>
      </MainContent>
      <Divider />
      <Footer siteTitle={"Educodar"} />
    </MDXProvider>
  </ThemeProvider>
)

const Layout = ({ children }) => {
  const components = useMDXComponents()
  const metadata = useSiteMetadata()

  return (
    <PureLayout
      children={children}
      markdownComponents={components}
      metadata={metadata}
      theme={theme}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
