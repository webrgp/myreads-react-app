import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menu, { MenuItem } from 'material-ui/Menu'
import Button from 'material-ui/Button';
import ArrowDropDown from 'material-ui-icons/ArrowDropDown';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet(theme => ({
  wrapper: {
    position: 'absolute',
    right: 0,
    top: -7
  },
  fab: {
    width: 36,
    height: 36,
    color: '#fff'
  }
}));

class BookSelectMenu extends Component {

  static propTypes = {
    options: PropTypes.array.isRequired,
  };

  state = {
    anchorEl: undefined,
    open: false,
    selectedShelf: false,
  };

  componentWillMount() {
    this.setState({ selectedShelf: this.props.selectedShelf, open: false });
  }

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleMenuItemClick = (event, shelf) => {
    this.setState({ selectedShelf: shelf, open: false });
    this.props.onChange(event, shelf.id);
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render () {

    const {options, classes} = this.props;

    return (
      <div className={classes.wrapper}>
        <Button 
          fab
          color="primary" 
          dense={true} 
          aria-label="Add to shelf" 
          onClick={this.handleClick}
          className={classes.fab}
          style={ this.state.selectedShelf && this.state.selectedShelf.id !== 'none' ? { backgroundColor: this.state.selectedShelf.color } : {} }
        >
          <ArrowDropDown />
        </Button>
        <Menu
          id="lock-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
        >
          {options.map((option) =>
            <MenuItem
              key={option.id}
              selected={this.state.selectedShelf && option.id === this.state.selectedShelf.id}
              onClick={event => this.handleMenuItemClick(event, option)}
            >
              {option.title}
            </MenuItem>
          )}
        </Menu>
      </div>
    );
  }
}

export default withStyles(styleSheet)(BookSelectMenu)