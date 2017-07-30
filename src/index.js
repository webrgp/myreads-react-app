import React from 'react' 
import ReactDOM from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import { BrowserRouter } from 'react-router-dom'

import green from 'material-ui/colors/green';
import pink from 'material-ui/colors/pink';

import App from './App'

import './index.css'

const theme = createMuiTheme({
  palette: createPalette({
    primary: green,
    accent: pink,
    type: 'light'
  }),
});

function Root() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter><App /></BrowserRouter>
    </MuiThemeProvider>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'))
