import React from 'react';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import Grid from 'material-ui/Grid';
import Card, { CardContent } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui-icons/ArrowBack';
import TextField from 'material-ui/TextField';
import Toolbar from 'material-ui/Toolbar';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import BookList from './BookList';

const styleSheet = createStyleSheet(theme => ({
  input: {
    color: '#fff',
    '&:before': {
      backgroundColor: '#fff'
    },
    '&:after': {
      backgroundColor: '#fff'
    }
  },
  gridContainer: { 
    paddingTop: 0 
  },
  gridItem: {
    margin: 0,
    [theme.breakpoints.up('sm')]: {
      margin: '20px auto 0'
    }
  }
}));

function SearchBooks(props) {
  
  SearchBooks.propTypes = {
    books: PropTypes.array.isRequired,
    children: PropTypes.array.isRequired,
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
            autoFocus
            fullWidth={true}
            id='search'
            placeholder='Search by title or author'
            InputClassName={classes.input}
            onChange={(event) => onSearchBooks(event.target.value)}
          />
        </Toolbar>
      </AppBar>
      {children && children.length > 0 &&(
        <Grid container gutter={0} className={classes.gridContainer}>
          <Grid item xs={12} sm={10} className={classes.gridItem}>
            <Card>
              <CardContent style={{ padding: '24px 16px 24px 16px'}}>
                <BookList>
                {children}
                </BookList>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default withStyles(styleSheet)(SearchBooks)