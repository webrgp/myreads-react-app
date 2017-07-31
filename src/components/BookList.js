import React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

function BookList(props) {

  const { children, noBooksMsg } = props;
  
  const gridList = (
    <Grid 
      container 
      justify='center'
      gutter={16} 
      wrap='wrap'
    >
      {children}
    </Grid>
  );

  const noBooks = (
    <Typography style={{ textAlign: 'center', fontStyle: 'italic', color: '#bbb' }} type='body1'>
      {noBooksMsg === undefined ? '' : noBooksMsg}
    </Typography>
  );
  
  return children.length ? gridList : noBooks;

}
export default BookList;