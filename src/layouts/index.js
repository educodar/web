import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "./index.css"

export default ({ children }) => (
  <>
    <Header siteTitle={"Educod@r"} />
    <main>{children}</main>
    <Footer />
  </>
)
