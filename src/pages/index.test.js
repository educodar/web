import React from "react"
import renderer from "react-test-renderer"
import { StaticQuery } from "gatsby"
import IndexPage from "."

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({ site: { siteMetadata: {} } })
  )
})

describe("Index page", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<IndexPage />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
