import createMuiTheme from "@material-ui/core/styles/createMuiTheme"
import { getThemeOptions } from "muy"

const baseTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#207987",
      light: "#2FADC1",
      contrastText: "#FFFFF2",
    },
    secondary: {
      dark: "#b25b19",
      main: "#FF8225",
      light: "#ff9b50",
    },
    code: {
      background: "#FFFFFF",
    },
    mark: {
      main: "#FFFFFF",
    },
    text: {
      primary: "#0B132B",
    },
  },
  typography: {
    fontFamily: ["Nunito", "SF Pro Rounded"],
    fontSize: 14,
    lineHeight: 20,
  },
})

const options = {
  overrides: {
    MuiAppBar: {
      root: {
        alignItems: "center",
        display: "flex",
        fontSize: "18px",
      },
    },
    MuiButton: {
      outlinedPrimary: {
        backgroundColor: baseTheme.palette.primary,
      },
      root: {
        padding: `${baseTheme.spacing(1)}px ${baseTheme.spacing(1.25)}px`,
      },
      textPrimary: {
        color: baseTheme.palette.primary.contrastText,
      },
    },
    MuiOutlinedInput: {
      notchedOutline: {
        borderRadius: baseTheme.spacing(1),
      },
    },
    MuiTypography: {
      h1: {
        fontSize: baseTheme.spacing(2.5),
        marginBottom: baseTheme.spacing(2.5),
      },
      h2: {
        fontSize: baseTheme.spacing(2.25),
        marginBottom: baseTheme.spacing(2.25),
        marginTop: baseTheme.spacing(2.25),
      },
    },
  },
}

const theme = createMuiTheme(
  getThemeOptions({ baseTheme: { ...baseTheme, ...options } })
)

export default theme
