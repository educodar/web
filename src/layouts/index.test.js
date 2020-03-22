import React from "react"
import renderer from "react-test-renderer"
import Layout from "."

describe("Default layout", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Layout>Content</Layout>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
