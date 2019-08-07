import React from "react"

export default ({ children }) => (
  <>
    <header>
      <h1>Educodar</h1>
      <p>Aulas de programação grátis para jovens</p>
    </header>
    <main>{children}</main>
    <footer></footer>
  </>
)
