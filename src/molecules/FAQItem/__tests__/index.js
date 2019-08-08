import React from "react"
import renderer from "react-test-renderer"
import FAQItem from ".."

describe("FAQ Item component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<FAQItem />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
