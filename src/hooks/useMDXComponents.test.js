import renderer from "react-test-renderer"
import useMDX from "./useMDXComponents"

describe("Use MDX Components", () => {
  it("returns a object", () => {
    const componentsObject = useMDX()

    expect(componentsObject).toBeInstanceOf(Object)
  })

  it("returns a object with 'a' property", () => {
    const componentsObject = useMDX()

    expect(componentsObject).toHaveProperty("a")
  })

  it("returns a object with 'blockquote' property", () => {
    const componentsObject = useMDX()

    expect(componentsObject).toHaveProperty("blockquote")
  })

  it("returns a object with 'h1' property", () => {
    const componentsObject = useMDX()

    expect(componentsObject).toHaveProperty("h1")
  })

  it("render correctly the 'h1' component returned with custom props", () => {
    const componentsObject = useMDX()

    const tree = renderer
      .create(componentsObject.h1({ test: "h1 component" }))
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("returns a object with 'h2' property", () => {
    const componentsObject = useMDX()

    expect(componentsObject).toHaveProperty("h2")
  })

  it("render correctly the 'h2' component returned with custom props", () => {
    const componentsObject = useMDX()

    const tree = renderer
      .create(componentsObject.h2({ test: "h2 component" }))
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("returns a object with 'h3' property", () => {
    const componentsObject = useMDX()

    expect(componentsObject).toHaveProperty("h3")
  })

  it("render correctly the 'h3' component returned with custom props", () => {
    const componentsObject = useMDX()

    const tree = renderer
      .create(componentsObject.h3({ test: "h3 component" }))
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("returns a object with 'h4' property", () => {
    const componentsObject = useMDX()

    expect(componentsObject).toHaveProperty("h4")
  })

  it("render correctly the 'h4' component returned with custom props", () => {
    const componentsObject = useMDX()

    const tree = renderer
      .create(componentsObject.h4({ test: "h4 component" }))
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("returns a object with 'h5' property", () => {
    const componentsObject = useMDX()

    expect(componentsObject).toHaveProperty("h5")
  })

  it("render correctly the 'h5' component returned with custom props", () => {
    const componentsObject = useMDX()

    const tree = renderer
      .create(componentsObject.h5({ test: "h5 component" }))
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("returns a object with 'h6' property", () => {
    const componentsObject = useMDX()

    expect(componentsObject).toHaveProperty("h6")
  })

  it("render correctly the 'h6' component returned with custom props", () => {
    const componentsObject = useMDX()

    const tree = renderer
      .create(componentsObject.h6({ test: "h6 component" }))
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("returns a object with 'hr' property", () => {
    const componentsObject = useMDX()

    expect(componentsObject).toHaveProperty("hr")
  })

  it("returns a object with 'img' property", () => {
    const componentsObject = useMDX()

    expect(componentsObject).toHaveProperty("img")
  })

  it("returns a object with 'li' property", () => {
    const componentsObject = useMDX()

    expect(componentsObject).toHaveProperty("li")
  })

  it("render correctly the 'li' component returned with custom props", () => {
    const componentsObject = useMDX()

    const tree = renderer
      .create(componentsObject.li({ test: "li component" }))
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("returns a object with 'p' property", () => {
    const componentsObject = useMDX()

    expect(componentsObject).toHaveProperty("p")
  })

  it("render correctly the 'p' component returned with custom props", () => {
    const componentsObject = useMDX()

    const tree = renderer
      .create(componentsObject.p({ test: "p component" }))
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("returns a object with 'table' property", () => {
    const componentsObject = useMDX()

    expect(componentsObject).toHaveProperty("table")
  })

  it("returns a object with 'td' property", () => {
    const componentsObject = useMDX()

    expect(componentsObject).toHaveProperty("td")
  })

  it("returns a object with 'tr' property", () => {
    const componentsObject = useMDX()

    expect(componentsObject).toHaveProperty("tr")
  })

  it("returns a object with 'ul' property", () => {
    const componentsObject = useMDX()

    expect(componentsObject).toHaveProperty("ul")
  })
})
