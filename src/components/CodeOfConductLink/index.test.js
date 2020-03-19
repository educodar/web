import React from "react"
import renderer from "react-test-renderer"
import ConductCodeLink from "."

describe("Conduct Code Link component", () => {
  it("renders correctly without custom props", () => {
    const tree = renderer.create(<ConductCodeLink />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders correctly with openInNew props", () => {
    const tree = renderer.create(<ConductCodeLink openInNew />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
