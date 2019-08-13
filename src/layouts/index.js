import React from "react"
import Header from "../molecules/Header"
import Footer from "../molecules/Footer"

export default ({ children }) => (
  <>
    <Header siteTitle={"Educodar"} />
    <main style={{ margin: `0 auto`, maxWidth: 768 }}>{children}</main>
    <Footer />
  </>
)
