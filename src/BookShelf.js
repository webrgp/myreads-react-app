import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

export default class BookShelf extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired
  }

  render () {
    
    const { books, name } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map( book => (
              <Book key={book.id} book={book} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}