import React from 'react';
import PropTypes from 'prop-types';

import { GridTile } from 'material-ui/GridList';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

function Book(props) {

  Book.propTypes= {
    book: PropTypes.object.isRequired,
    bookshelves: PropTypes.array.isRequired,
    onUpdateBookShelf: PropTypes.func.isRequired
  }
    
  const { book, bookshelves, onUpdateBookShelf } = props;

  const styles = {
    root: {
      width: 128, 
      height: 193
    }
  }

  const actionIcon = (
    <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon color="white" /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
      value={book.shelf}
      onChange={ (event, value) => onUpdateBookShelf(book, value)}
    >
      <MenuItem primaryText="Move to..." />
      {bookshelves.map( option => (
        <MenuItem key={option.id} value={option.id} primaryText={option.title} />
      ))}
      <MenuItem primaryText="None" />
    </IconMenu>
  )

  return (
    <GridTile
      title={book.title}
      subtitle={book.authors && book.authors.length && book.authors.map( (author, index, array) => (
        <span key={index}>{author}</span>
      ))}
      actionIcon={actionIcon}
      style={styles.root}
    >
      <img src={book.imageLinks.thumbnail} style={{ width: 128, height: 193 }}/>
    </GridTile>
  );
}

export default Book