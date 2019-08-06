import React from "react"
import Header from "../components/Header/header"
import Footer from "../components/Footer/footer"

export default ({ children }) => (
  <>
    <Header siteTitle={"Educod@r"} />
    <main>{children}</main>
    <Footer />
  </>
)
