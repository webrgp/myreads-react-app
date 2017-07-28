import React from 'react';
import PropTypes from 'prop-types';
import BookList from './BookList';

function BookShelf(props) {

  BookShelf.propTypes = {
    name: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    bookshelves: PropTypes.array.isRequired,
    onUpdateBookShelf: PropTypes.func.isRequired
  }

  const { books, name, onUpdateBookShelf, bookshelves } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{name}</h2>
      <div className="bookshelf-books">
        <BookList 
          books={books}
          onUpdateBookShelf={onUpdateBookShelf}
          bookshelves={bookshelves} />
      </div>
    </div>
  );
}

export default BookShelf