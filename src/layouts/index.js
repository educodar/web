import Footer from "../organisms/Footer"
import Header from "../organisms/Header"
import Main from "../organisms/Main"
import React from "react"
import VerticalSpacing from "../atoms/VerticalSpacing"

export default ({ children }) => (
  <>
    <Header siteTitle={"Educodar"} />
    <VerticalSpacing size="4x" />
    <Main>{children}</Main>
    <VerticalSpacing size="4x" />
    <Footer />
  </>
)
