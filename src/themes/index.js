import createMuiTheme from "@material-ui/core/styles/createMuiTheme"

const baseTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#2FADC1",
      light: "#3FCDED",
      contrastText: "#FFFFF2",
    },
    secondary: {
      main: "#FF8225",
      dark: "#A65621",
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

const theme = createMuiTheme({
  ...baseTheme,
  overrides: {
    MuiAppBar: {
      alignItems: "center",
      display: "flex",
      fontSize: "18px",
    },
    MuiButton: {
      outlinedPrimary: {
        backgroundColor: baseTheme.palette.primary,
        borderColor: baseTheme.palette.primary,
        color: baseTheme.palette.primary,
      },
      outlined: {
        backgroundColor: "transparent",
        borderRadius: `${baseTheme.spacing(0.5)}px`,
        borderStyle: "solid",
        borderWidth: `${baseTheme.spacing(0.5)}px`,
      },
      root: {
        cursor: "pointer",
        fontWeight: "bold",
        lineHeight: `${baseTheme.spacing(2.5)}px`,
        padding: `${baseTheme.spacing(1)}px ${baseTheme.spacing(1.25)}px`,
        textDecoration: "none",
      },
      textPrimary: {
        color: baseTheme.palette.primary.contrastText,
      },
    },
    MuiFormGroup: {
      row: {
        marginBottom: baseTheme.spacing(2),
      },
    },
    MuiInputBase: {
      input: {
        fontWeight: "normal",
        lineHeight: "20px",
      },
    },
    MuiOutlinedInput: {
      notchedOutline: {
        borderRadius: baseTheme.spacing(1),
        borderStyle: "solid",
        borderWidth: baseTheme.spacing(0.25),
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
})

export default theme
