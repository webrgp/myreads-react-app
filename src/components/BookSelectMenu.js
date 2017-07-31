import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menu, { MenuItem } from 'material-ui/Menu'
import Button from 'material-ui/Button';
// import Subheader from 'material-ui/Subheader';
import ArrowDropDown from 'material-ui-icons/ArrowDropDown';

export default class BookSelectMenu extends Component {

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

    const {options} = this.props;

    const styles = {
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
    }

    return (
      <div style={styles.wrapper}>
        <Button 
          fab
          color="primary" 
          dense={true} 
          aria-label="Add to shelf" 
          onClick={this.handleClick}
          style={styles.fab}
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