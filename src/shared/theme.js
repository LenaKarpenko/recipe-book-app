import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#34A853',
    }
  },
  typography: {
    h1: {
      fontSize: '62px',
      fontWeight: "bold",
      color: '#FFFFFF'
    },
    subtitle1: {
      fontSize: '18px',
      color: '#FFFFFF'
    }
  },
  spacing: 8,
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'capitalize',
        borderRadius: '10px',
        height: '45px'
      },
      contained: {
        boxShadow: 'none',
      },
      containedPrimary: {
        '&:hover': {
          backgroundColor: '#FFFFFF',
          color: '#34A853'
        }
      }
    },
    MuiInputBase: {
      root: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        color: '#FFFFFF'
      }
    },
    MuiOutlinedInput: {
      root: {
        width: '320px',
        borderRadius: '10px'
      },
    },
    MuiFormLabel: {
      root: {
        color: '#FFFFFF'
      }
    },
  }
})

export default theme