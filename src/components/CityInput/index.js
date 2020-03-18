import React from "react"
import InputLabel from "@material-ui/core/InputLabel"
import NativeSelect from "@material-ui/core/NativeSelect"
import FormControl from "@material-ui/core/FormControl"
import makeStyles from "@material-ui/core/styles/makeStyles"

const useStyles = makeStyles({
  root: {
    minWidth: "19ch",
  },
})

const CityInput = () => {
  const classes = useStyles()
  return (
    <FormControl>
      <InputLabel id={"city-label"}>Cidade</InputLabel>
      <NativeSelect
        id="city"
        name="city"
        aria-required={true}
        autoComplete="city"
        autoCorrect="off"
        classes={classes.root}
        labelId={"city-label"}
        required={true}
        variant={"outlined"}
      >
        <option disabled={true} value={""}>
          Escolha sua cidade&hellip;
        </option>
        <option value="BH">Belo Horizonte (MG)</option>
        <option value="POA">Porto Alegre (PR)</option>
        <option value="REC">Recife (PE)</option>
        <option value="SP">São Paulo (SP)</option>
      </NativeSelect>
    </FormControl>
  )
}

export default CityInput
