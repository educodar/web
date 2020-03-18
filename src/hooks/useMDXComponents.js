import React from "react"
import Typography from "@material-ui/core/Typography"
import { Blockquote, Image } from "muy"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Divider from "@material-ui/core/Divider"
import Table from "@material-ui/core/Table"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import Link from "@material-ui/core/Link"

const Heading = level => props => (
  <Typography component={`h${level}`} variant={`h${level}`} {...props} />
)

const Paragraph = props => <Typography paragraph={true} {...props} />

const useMDXComponents = () => ({
  a: Link,
  blockquote: Blockquote,
  h1: Heading(1),
  h2: Heading(2),
  h3: Heading(3),
  h4: Heading(4),
  h5: Heading(5),
  h6: Heading(6),
  hr: Divider,
  img: Image,
  li: ListItem,
  p: Paragraph,
  table: Table,
  td: TableCell,
  tr: TableRow,
  ul: List,
})

export default useMDXComponents
