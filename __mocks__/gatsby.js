const React = require("react")
const gatsby = jest.requireActual("gatsby")

const gatsbyMock = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest
    .fn()
    .mockImplementation(
      ({
        activeClassName,
        activeStyle,
        getProps,
        innerRef,
        partiallyActive,
        ref,
        replace,
        to,
        ...rest
      }) =>
        React.createElement("a", {
          ...rest,
          href: to,
        })
    ),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn(),
}

gatsbyMock.StaticQuery.mockImplementation(({ render }) =>
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

module.exports = gatsbyMock
