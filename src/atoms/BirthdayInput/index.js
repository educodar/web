import React from "react"
import Input from "../Input"

export default props => {
  const minDate = new Date().getDate()
  const maxDate = new Date().getDate()
  return <Input {...props} max={maxDate} min={minDate} type="date" />
}
