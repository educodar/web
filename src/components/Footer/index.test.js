import renderer from "react-test-renderer"
import React from "react"
import Footer from "./index"

describe("Page footer", () => {
  /**
   * @todo fix failing test on Footer(...): Nothing was returned from render
   */
  xit("should render correctly", () => {
    const tree = renderer.create(<Footer />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
