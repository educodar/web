import React from "react"
import renderer from "react-test-renderer"
import Layout from "."

describe("Default layout", () => {
  beforeAll(() => {
    jest.mock("../hooks/useSiteMetadata")
  })

  /**
   * @todo Fix TypeError on layout test: Cannot read property 'title' of undefined
   */
  xit("renders correctly", () => {
    const tree = renderer.create(<Layout>Content</Layout>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
