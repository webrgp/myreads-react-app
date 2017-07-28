import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookList from './BookList';

export default class SearchBooks extends Component {
  
  static propTypes = {
    bookshelves: PropTypes.array.isRequired,
    onUpdateBookShelf: PropTypes.func.isRequired,
    searchedBooks: PropTypes.array.isRequired
  }

  updateQuery = (query) => {
    this.props.onBookSearch(query)
  }

  render () {

    const { bookshelves, onUpdateBookShelf, searchedBooks } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">

            <input 
              type="text" 
              placeholder="Search by title or author"
              onChange={(event) => this.updateQuery(event.target.value)}
            />
            
          </div>
        </div>
        <div className="search-books-results">
          <BookList 
            books={searchedBooks}
            onUpdateBookShelf={onUpdateBookShelf}
            bookshelves={bookshelves} />
        </div>
      </div>
    );
  }
}