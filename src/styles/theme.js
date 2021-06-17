import { createMuiTheme } from '@material-ui/core/styles';

import green from '@material-ui/core/colors/green';

import { colors } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      dark: green[900],
      main: green[800],
      light: green[300],
    },
    secondary: {
      dark: colors.indigo[500],
      main: colors.indigo[800],
      light: colors.indigo[900],
    },
  },
  props: {
    MuiTextField: {
      variant: 'outlined',
      fullWidth: true,
    },
    MuiSelect: {
      variant: 'outlined',
      fullWidth: true,
    },
  },
});

export default theme;