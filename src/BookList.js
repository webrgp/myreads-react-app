import React from 'react';
import Grid from 'material-ui/Grid';

function BookList(props) {

  const { children, noBooksMsg } = props;
  
  const gridList = (
    <Grid container justify="center" gutter={16}>
      {children}
    </Grid>
  );

  const noBooks = (
    <div className='book-list-is-empty'>
      {noBooksMsg === undefined ? 'No books' : noBooksMsg}
    </div>
  );
  
  return children.length ? gridList : noBooks;

}
export default BookList;