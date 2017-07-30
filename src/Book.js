import React from 'react';
import PropTypes from 'prop-types';
import BookSelectMenu from './BookSelectMenu';
import Grid from 'material-ui/Grid';
import Card, { CardHeader, CardActions, CardMedia } from 'material-ui/Card';
function Book(props) {

  Book.propTypes= {
    book: PropTypes.object.isRequired,
    bookshelves: PropTypes.array.isRequired,
    onUpdateBookShelf: PropTypes.func.isRequired
  }
    
  const { book, bookshelves, onUpdateBookShelf } = props;

  // const showShelfIcon = props.showBadge || false;

  const styles = {
    root: {
      width: 128, 
      height: 193
    }
  }

  const selectMenu = (
    <BookSelectMenu
      value={book.shelf}
      options={bookshelves}
      onChange={ (event, value) => onUpdateBookShelf(book, value)}
    />
  )

  return (
    <Grid item xs={6}>
      <Card style={styles}>
        <CardMedia>
          <img src={book.imageLinks.thumbnail} style={{ width: '100%' }} alt={book.title}/>
        </CardMedia>
        <CardHeader
          title={book.title} subheader={book.authors && book.authors.length && book.authors.join(', ')}
        />
        <CardActions>
          {selectMenu}
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Book