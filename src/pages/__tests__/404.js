import React from "react"
import renderer from "react-test-renderer"
import { StaticQuery } from "gatsby"

import NotFoundPage from "../404"

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({ site: { siteMetadata: {} } })
  )
})

describe("404 page", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<NotFoundPage />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
