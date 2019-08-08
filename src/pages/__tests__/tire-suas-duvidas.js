import React from "react"
import renderer from "react-test-renderer"
import { StaticQuery } from "gatsby"

import FAQPage from "../tire-suas-duvidas"

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({ site: { siteMetadata: {} } })
  )
})

describe("FAQ page", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<FAQPage />)
    expect(tree).toMatchSnapshot()
  })
})
