import React from "react"
import renderer from "react-test-renderer"
import ConductCodeLink from "."

describe("Conduct Code Link component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ConductCodeLink />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
