import React from 'react';
import PropTypes from 'prop-types';

import { GridTile } from 'material-ui/GridList';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Badge from 'material-ui/Badge';

function Book(props) {

  Book.propTypes= {
    book: PropTypes.object.isRequired,
    bookshelves: PropTypes.array.isRequired,
    onUpdateBookShelf: PropTypes.func.isRequired
  }
    
  const { book, bookshelves, onUpdateBookShelf } = props;

  const showBadge = props.showBadge || false;

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
      <Subheader>Move to...</Subheader>
      {bookshelves.map( option => (
        <MenuItem key={option.id} value={option.id} primaryText={option.title} />
      ))}
      <MenuItem value='none' primaryText="None" />
    </IconMenu>
  )

  return (
    <Badge
      badgeContent={showBadge && (
        <IconButton tooltip={book.shelf}>
        </IconButton>
      )}
    >
      <GridTile
        title={book.title}
        subtitle={book.authors && book.authors.length && book.authors.join(', ')}
        actionIcon={actionIcon}
        style={styles.root}
      >
        <img src={book.imageLinks.thumbnail} style={{ width: '100%' }} alt={book.title}/>
      </GridTile>
    </Badge>
  );
}

export default Book