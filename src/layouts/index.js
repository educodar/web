import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default ({ children }) => (
  <>
    <Header siteTitle={"Educodar"} />
    <main style={{ margin: `0 auto`, maxWidth: 768 }}>{children}</main>
    <Footer />
  </>
)
