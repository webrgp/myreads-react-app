import React from 'react';
import PropTypes from 'prop-types';
import BookSelectMenu from './BookSelectMenu';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

function Book(props) {

  Book.propTypes= {
    book: PropTypes.object.isRequired,
    bookshelves: PropTypes.array.isRequired,
    onUpdateBookShelf: PropTypes.func.isRequired
  }

    
  const { book, bookshelves, onUpdateBookShelf, bookInShelf } = props;
  
  const selectMenu = (
    <BookSelectMenu
      selectedShelf={bookshelves.filter( (shelf) => ( shelf.id === book.shelf))[0]}
      options={bookshelves}
      onChange={ (event, value) => onUpdateBookShelf(book, value)}
    />
  )

  return (
    <Grid item style={{ width: 128, position: 'relative' }}>
      <img 
        src={book.imageLinks.thumbnail} 
        alt={book.title} 
        style={{ 
          width: '100%', 
          opacity: bookInShelf === undefined ? 1 : bookInShelf ? 0.5 : 1
        }}/>
      {selectMenu}

      <Typography type="body1" noWrap={true}>
        <strong>{book.title}</strong>
      </Typography>
      
      {book.authors && book.authors.length && (
        <Typography 
          type="caption" 
          noWrap={true}
        >{book.authors.join(', ')}</Typography>
      )}
    </Grid>
  );
}

export default Book