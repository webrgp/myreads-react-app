import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {

  Book.propTypes= {
    book: PropTypes.object.isRequired,
    getShelfOptions: PropTypes.func.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  }
    
  const { book, getShelfOptions, onUpdateBook } = props;

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select value={book.shelf} onChange={ event => onUpdateBook(book, event.target.value)}>
              <option value="none" disabled>Move to...</option>
              {getShelfOptions().map( option => (
                <option value={option.id} key={option.id}>{option.title}</option>
              ))}
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors.map( (author, index, array) => (
            <span key={index}>{author}</span>
          ))}
        </div>
      </div>
    </li>
  );
}

export default Book