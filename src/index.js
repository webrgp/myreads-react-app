import React from 'react' 
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import styles from './styles.json'

import App from './App'

import './index.css'

const muiTheme = getMuiTheme(styles);

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(<MuiThemeProvider muiTheme={muiTheme}><BrowserRouter><App /></BrowserRouter></MuiThemeProvider>, document.getElementById('root'))
