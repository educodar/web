import React from "react"
import renderer from "react-test-renderer"

import HomePage from "../index.js"

describe("Home page", () => {
    it("renders correctly", () => {
        const tree = renderer
            .create(<HomePage />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})