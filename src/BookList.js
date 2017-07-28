import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

function BookList(props) {
  BookList.propTypes = {
    books: PropTypes.array.isRequired,
    bookshelves: PropTypes.array.isRequired,
    onUpdateBookShelf: PropTypes.func.isRequired
  }

  const { books, onUpdateBookShelf, bookshelves } = props;

  return (
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
  );

}

export default BookList;