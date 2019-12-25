import React from "react"
import renderer from "react-test-renderer"
import { StaticQuery } from "gatsby"

import TeamPage from "../equipe"

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({ site: { siteMetadata: {} } })
  )
})

describe("Team page", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<TeamPage />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
