"use client"
import { createTheme } from '@mui/material/styles';

const themeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#7f3545',
    },
    secondary: {
      main: '#b76778',
    },
    text: {
      primary: '#000000', // Color de texto primario (negro)
      secondary: '#FFFFFF', // Color de texto secundario (blanco)
    },
  },
};

const defaultTheme = createTheme(themeOptions);

export default defaultTheme;
