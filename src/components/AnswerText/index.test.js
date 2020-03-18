import React from "react"
import renderer from "react-test-renderer"
import AnswerText from "."

describe("Answer Text component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<AnswerText />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
