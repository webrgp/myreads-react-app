import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

function BookList(props) {

  BookList.propTypes= {
    children: PropTypes.array.isRequired,
    noBooksMsg: PropTypes.string
  }

  const { children, noBooksMsg } = props;
  
  return children.length ? (
    <Grid 
      container 
      justify='center'
      gutter={16} 
      wrap='wrap'
    >
      {children}
    </Grid>
  ) : (
    <Typography style={{ textAlign: 'center', fontStyle: 'italic', color: '#bbb' }} type='body1'>
      {noBooksMsg === undefined ? '' : noBooksMsg}
    </Typography>
  );

}
export default BookList;