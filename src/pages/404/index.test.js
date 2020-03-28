import React from "react"
import renderer from "react-test-renderer"
import { StaticQuery } from "gatsby"

import NotFoundPage from "."

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({ site: { siteMetadata: {} } })
  )
})

describe("404 page", () => {
  /**
   * @todo fix failing test: 404 page (...): Nothing was returned from render
   */
  xit("renders correctly", () => {
    const tree = renderer.create(<NotFoundPage />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
