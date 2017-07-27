import React from 'react';
import PropTypes from 'prop-types';

function BookShelf(props) {

  BookShelf.propTypes = {
    name: PropTypes.string.isRequired
  }

  const { children, name } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {children}
        </ol>
      </div>
    </div>
  );
}

export default BookShelf