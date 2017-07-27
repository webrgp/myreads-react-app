import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {

  Book.propTypes= {
    book: PropTypes.object.isRequired,
    shelves: PropTypes.array.isRequired,
    onUpdateBookShelf: PropTypes.func.isRequired
  }
    
  const { book, shelves, onUpdateBookShelf } = props;

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select value={book.shelf} onChange={ event => onUpdateBookShelf(book, event.target.value)}>
              <option value="none" disabled>Move to...</option>
              {shelves.map( shelf => (
                <option 
                  key={shelf.name} 
                  value={shelf.name}
                >{shelf.title}</option>
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