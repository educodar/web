import Footer from "../organisms/Footer"
import Header from "../organisms/Header"
import Main from "../organisms/Main"
import React from "react"

export default ({ children }) => (
  <>
    <Header siteTitle={"Educodar"} />
    <Main>{children}</Main>
    <Footer />
  </>
)
