import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as BooksAPI from './BooksAPI';
import BookList from './BookList';

export default class SearchBooks extends Component {
  
  static propTypes = {
    books: PropTypes.array.isRequired,
    bookshelves: PropTypes.array.isRequired,
    onUpdateBookShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    results: []
  }

  updateQuery = (query) => {
    this.setState({ query });
     
    // do not send an API request if query is empty
    if (query.trim().length > 0) {
      BooksAPI.search(query).then(response => {
        let results = [];

        // Check if is Array
        if (Array.isArray(response)) {

          const { books } = this.props;
          
          // Sanitize results
          response.forEach((r, index, arr) => {
            arr[index].shelf = 'none';
          });

          books.forEach(b => {
            response.forEach((r, index, arr) => {
              if (r.id === b.id) {
                arr[index].shelf = b.shelf;
              }
            })
          });
          results = response;
        }
        this.setState({ results });
      })
    } else {
      this.setState({ results: [] });
    }
  }

  render () {

    const { bookshelves, onUpdateBookShelf } = this.props;

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
            books={this.state.results}
            onUpdateBookShelf={onUpdateBookShelf}
            bookshelves={bookshelves} />
        </div>
      </div>
    );
  }
}