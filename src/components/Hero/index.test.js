import React from "react"
import renderer from "react-test-renderer"
import Hero from "./index"

describe("<Hero /> component", () => {
  /**
   * @todo fix failing test Hero(...): Nothing was returned from render
   */
  xit("renders correctly", () => {
    const tree = renderer.create(<Hero />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
