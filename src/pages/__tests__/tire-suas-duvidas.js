import React from "react"
import renderer from "react-test-renderer"

import FAQPage from "../tire-suas-duvidas"

describe("FAQ page", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<FAQPage />)
    expect(tree).toMatchSnapshot()
  })
})
