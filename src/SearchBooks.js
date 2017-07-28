import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import BookList from './BookList';

export default class SearchBooks extends Component {
  
  static propTypes = {
    books: PropTypes.array.isRequired,
    onSearchBooks: PropTypes.func.isRequired
  }

  render () {

    const { children, onSearchBooks } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">

            <input 
              type="text" 
              placeholder="Search by title or author"
              onChange={(event) => onSearchBooks(event.target.value)}
            />
            
          </div>
        </div>
        <div className="search-books-results">
          {children}
        </div>
      </div>
    );
  }
}