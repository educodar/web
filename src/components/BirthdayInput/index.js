import React from "react"
import TextField from "@material-ui/core/TextField"

const BirthdayInput = props => {
  const minDate = new Date().getDate()
  const maxDate = new Date().getDate()
  return <TextField max={maxDate} min={minDate} type="date" {...props} />
}

export default BirthdayInput
