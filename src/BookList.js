import React from 'react';
import {GridList} from 'material-ui/GridList';

function BookList(props) {

  const { children } = props;

  const styles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  };

  return (
    <GridList 
      cellHeight='auto'
      cols={0}
      padding={10}
      style={styles}>
      {children}
    </GridList>
  );

}
export default BookList;