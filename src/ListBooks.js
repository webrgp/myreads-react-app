import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import BookShelf from './BookShelf';

export default class ListBooks extends Component {
  
  static propTypes = {
    bookshelves: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired
  }

  render() {

    const { bookshelves, books, onUpdateShelf } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div>
              {bookshelves.map( ( shelf ) => (
                <BookShelf 
                  key={shelf.id} 
                  name={shelf.title}
                  bookshelves={bookshelves}
                  books={books.filter( book => book.shelf === shelf.id)}
                  onUpdateShelf={onUpdateShelf}
                />
              ))}
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