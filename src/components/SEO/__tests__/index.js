import React from "react"
import renderer from "react-test-renderer"
import SEO from ".."
import { StaticQuery } from "gatsby"

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: "Educodar - Aulas de programação grátis para jovens",
          titleTemplate: "%s · Educodar",
          siteUrl: "https://educodar.com.br",
          description:
            "Projeto de ensino de programação básica e exposição a T.I. para estudantes de escolas de comunidades. Iniciativa sem fins lucrativos. Cursos e alimentação gratuitos.",
          image: "/images/logo.png",
        },
      },
    })
  )
})

describe("SEO component", () => {
  xit("renders correctly", () => {
    const tree = renderer.create(<SEO />).toJSON
    expect(tree).toMatchSnapshot()
  })
})
