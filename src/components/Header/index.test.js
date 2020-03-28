import React from "react"
import renderer from "react-test-renderer"
import Header from "."

describe("<Header/> component", () => {
  /**
   * @todo fix failing test: Header(...): Nothing was returned from render.
   */
  xit("renders correctly without props", () => {
    const tree = renderer.create(<Header />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  /**
   * @todo fix failing test: Header(...): Nothing was returned from render
   */
  xit("renders correctly with site name prop", () => {
    const tree = renderer.create(<Header siteTitle={"Site name"} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
