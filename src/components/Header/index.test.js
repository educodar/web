import React from "react"
import renderer from "react-test-renderer"
import Header from "."

describe("<Header/> component", () => {
  it("renders correctly without props", () => {
    const tree = renderer.create(<Header />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders correctly with site name prop", () => {
    const tree = renderer.create(<Header siteTitle={"Site name"} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
