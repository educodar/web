import React from "react"
import renderer from "react-test-renderer"
import QuestionText from "."

describe("Question Text component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<QuestionText />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
