import React from 'react';
import {GridList} from 'material-ui/GridList';
import './BookList.css';

function BookList(props) {

  const { children, noBooksMsg } = props;
  
  const gridList = (
    <div className='book-list'>
      <GridList
        className='book-list-grid'
        cellHeight='auto'
        cols={0}
        padding={10}
      >
        {children}
      </GridList>
    </div>
  );

  const noBooks = (
    <div className='book-list-is-empty'>
      {noBooksMsg === undefined ? 'No books' : noBooksMsg}
    </div>
  );
  
  return children.length ? gridList : noBooks;

}
export default BookList;