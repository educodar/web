import React from "react"
import renderer from "react-test-renderer"

import TeamPage from "../equipe"

describe("Team page", () => {
  /**
   * @todo fix failing test: TeamPage (...): Nothing was returned from render.
   */
  xit("renders correctly", () => {
    const tree = renderer.create(<TeamPage />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
