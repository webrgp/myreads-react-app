import React from 'react';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui-icons/ArrowBack';

import TextField from 'material-ui/TextField';
import Toolbar from 'material-ui/Toolbar';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet('Inputs', theme => ({
  input: {
    color: '#fff',
    '&:before': {
      backgroundColor: '#fff'
    },
    '&:after': {
      backgroundColor: '#fff'
    }
  },
}));

function SearchBooks(props) {
  
  SearchBooks.propTypes = {
    books: PropTypes.array.isRequired,
    onSearchBooks: PropTypes.func.isRequired,
    onCancelSearch: PropTypes.func.isRequired
  }

  const { onSearchBooks, onCancelSearch, classes, children } = props;

  return (
    <div className="search-books">

      <AppBar position="static">
        <Toolbar style={{paddingLeft: 0}}>
          <IconButton onClick={onCancelSearch} style={{color:'#fff'}} aria-label="Back"><ArrowBack /></IconButton>
          <TextField
            fullWidth={true}
            id='search'
            placeholder='Search by title or author'
            InputClassName={classes.input}
            onChange={(event) => onSearchBooks(event.target.value)}
          />
        </Toolbar>
      </AppBar>

      <div style={ { paddingTop: 30 } }>
        {children}
      </div>
    </div>
  );
}

export default withStyles(styleSheet)(SearchBooks)