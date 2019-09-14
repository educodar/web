import React from "react"
import renderer from "react-test-renderer"
import { StaticQuery } from "gatsby"

import HomePage from ".."

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({ site: { siteMetadata: {} } })
  )
})

describe("Home page", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<HomePage />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
