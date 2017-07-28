import React from 'react';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import TextField from 'material-ui/TextField';

function SearchBooks(props) {
  
  SearchBooks.propTypes = {
    books: PropTypes.array.isRequired,
    onSearchBooks: PropTypes.func.isRequired
  }

  const { children, onSearchBooks, onCancelSearch } = props;

  const backButton = (
    <IconButton onTouchTap={onCancelSearch}><NavigationArrowBack /></IconButton>
  )

  const searchField = (
    <TextField 
      hintText="Search by title or author" 
      onChange={(event) => onSearchBooks(event.target.value)}
    />
  )

  return (
    <div className="search-books">
      <AppBar
        title={searchField}
        iconElementLeft={backButton}
      />

      <div style={ { padding: 10 } }>
        {children}
      </div>
    </div>
  );
}

export default SearchBooks