import React from 'react';
import { ThemeProvider } from 'styled-components'
import { createTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const theme = createTheme();

export default function Basic(props) {
  return (
    <ThemeProvider theme={theme}>
      { props.children }
    </ThemeProvider>
  );
}