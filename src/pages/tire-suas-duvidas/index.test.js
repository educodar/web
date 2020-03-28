import React from "react"
import renderer from "react-test-renderer"

import FAQPage from "."

describe("FAQ page", () => {
  /**
   * @todo fix failing test FAQPage (...): Nothing was returned from render
   */
  xit("renders correctly", () => {
    const tree = renderer.create(<FAQPage />)
    expect(tree).toMatchSnapshot()
  })
})
