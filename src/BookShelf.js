import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

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
        <ol className="books-grid">
          {books.map( book => (
            <Book 
              key={book.id} 
              book={book} 
              onUpdateBookShelf={onUpdateBookShelf}
              bookshelves={bookshelves}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default BookShelf