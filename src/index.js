import React from 'react' 
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './App'

import './index.css'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(<MuiThemeProvider><BrowserRouter><App /></BrowserRouter></MuiThemeProvider>, document.getElementById('root'))
