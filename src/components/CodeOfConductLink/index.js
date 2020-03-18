import React from "react"
import { Link as GatsbyLink, withPrefix } from "gatsby"
import Link from "@material-ui/core/Link"

const CodeOfConductLink = ({ openInNew, ...props }) => {
  const path = "/codigo-de-conduta"
  props = {
    component: openInNew ? "a" : GatsbyLink,
    href: openInNew ? withPrefix(path) : null,
    rel: openInNew ? "noopener noreferrer" : null,
    target: openInNew ? "_blank" : "_self",
    to: openInNew ? null : path,
    ...props,
  }
  return <Link {...props}>Código&nbsp;de&nbsp;Conduta</Link>
}

export default CodeOfConductLink
