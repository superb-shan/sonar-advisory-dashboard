'use client';

// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
      primary:{
          main: "#0071E7"
      }
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 14 // Set Poppins as the default font
  },

  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          outline: 'none',
          border: 'none',
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          // height: '40px',
          display: 'flex',
          alignItems: 'center',
          padding: '0px'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#6E6E72',
          fontSize: '14px',
          marginTop: '-5px',
          marginLeft: 'auto',
          marginRight: 'auto',
          // fontWeight: 500,
        },
        shrink:{
          marginTop: '2px',
          display: 'flex',
          color: 'primary.main',
        }
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          fieldset: {
            borderColor: '#E4E5E5'
          },
          "&:hover": {
            fieldset: {
              borderColor: '#6f7070 !important',
            },
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          marginRight: '15px', // Adjust the color of the InputAdornment
        }
      }
    },
    // py: '20px',
    // display: 'flex',
    // flexDirection: 'column',
    // rowGap: '20px',
  }
});

export default theme;
