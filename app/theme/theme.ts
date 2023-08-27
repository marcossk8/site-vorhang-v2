import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      }
    }
  }
});

export default theme;