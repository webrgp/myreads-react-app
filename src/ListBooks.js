import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import BookShelf from './BookShelf';


class ListBooks extends Component {
  
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {

    const { books } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div>
              <BookShelf name='Currently Reading' books={books.filter( (book) => book.shelf === 'currentlyReading' )} />
              <BookShelf name='Want to Read' books={books.filter( (book) => book.shelf === 'wantToRead' )} />
              <BookShelf name='Read' books={books.filter( (book) => book.shelf === 'read' )} />
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
  
}

export default ListBooks;