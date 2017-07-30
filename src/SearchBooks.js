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
    margin: theme.spacing.unit,
  },
}));

function SearchBooks(props) {
  
  SearchBooks.propTypes = {
    books: PropTypes.array.isRequired,
    onSearchBooks: PropTypes.func.isRequired
  }

  const { children, onSearchBooks, onCancelSearch, classes } = props;

  return (
    <div className="search-books">

      <AppBar position="static">
        <Toolbar style={{paddingLeft: 0}}>
          <IconButton onClick={onCancelSearch} color="contrast" aria-label="Back"><ArrowBack /></IconButton>
          <TextField
            fullWidth={true}
            id='search'
            type='search'
            placeholder='Search by title or author'
            className={classes.input}
            onChange={(event) => onSearchBooks(event.target.value)}
          />
        </Toolbar>
      </AppBar>

      <div style={ { padding: 10 } }>
        {children}
      </div>
    </div>
  );
}

export default withStyles(styleSheet)(SearchBooks)