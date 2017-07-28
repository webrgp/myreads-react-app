import React from 'react';
import {GridList} from 'material-ui/GridList';

function BookList(props) {

  const { children, noBooksMsg } = props;

  const styles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  };
  
  const gridList = (
    <GridList 
      cellHeight='auto'
      cols={0}
      padding={10}
      style={styles}>
      {children}
    </GridList>
  );

  const noBooks = (
    <div>
      <em>{noBooksMsg === undefined ? 'No books' : noBooksMsg}</em>
    </div>
  );
  
  return children.length ? gridList : noBooks;

}
export default BookList;