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
    h2: {
      fontSize: '30px',
      fontWeight: 'bold',
      color: '#010205'
    },
    h6: {
      color: '#0A0A0A',
      fontSize: '14px',
      fontWeight: 'normal'
    },
    subtitle1: {
      fontSize: '18px',
      color: '#FFFFFF'
    },
    caption: {
      fontSize: '15px',
      color: '#B4C2D3'
    }
  },
  spacing: 8,
  overrides: {
    MuiContainer: {
      root: {
        paddingLeft: '20px',
        paddingRight: '20px'
      }
    },
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
    MuiIconButton: {
      root: {
        backgroundColor: '#C4C4C4',
        '&:hover': {
          backgroundColor: '#a8a8a8'
        }
      },
      sizeSmall: {
        width: '50px',
        height: '50px'
      }
    },
    MuiInputBase: {
      root: {
        width: '270px',
        '@media (max-width: 375px)': {
          width: '240px'
        }
      }
    },
    MuiOutlinedInput: {
      root: {
        width: '320px',
        borderRadius: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        color: '#FFFFFF'
      },
    },
    MuiFormLabel: {
      root: {
        color: '#FFFFFF'
      }
    },
    MuiTypography: {
      noWrap: {
        whiteSpace: 'normal'
      }
    }
  }
})

export default theme