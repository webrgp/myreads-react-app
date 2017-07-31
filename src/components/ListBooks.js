import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import ContentAdd from 'material-ui-icons/Add';

function ListBooks(props) {

  ListBooks.propTypes = {
    onFabClick: PropTypes.func.isRequired,
    children: PropTypes.array.isRequired
  }

  const { children, onFabClick } = props;

  const fabStyle = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  };

  return (
    <div className="list-books">
      <AppBar position="static">
        <Toolbar>
          <Typography type="title" color="inherit" style={{ color: '#fff' }}>
            MyReads
          </Typography>
        </Toolbar>
      </AppBar>
      {children}
      <Button fab  
        color="accent"
        style={fabStyle}
        onClick={onFabClick}
      ><ContentAdd /></Button>
    </div>
  );
}

export default ListBooks;