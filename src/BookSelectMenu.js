import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menu, { MenuItem } from 'material-ui/Menu'
import IconButton from 'material-ui/IconButton';
// import Subheader from 'material-ui/Subheader';
import MoreVert from 'material-ui-icons/MoreVert';

export default class BookSelectMenu extends Component {

  static propTypes = {
    options: PropTypes.array.isRequired,
  };

  state = {
    anchorEl: undefined,
    open: false,
    selectedIndex: 1,
  };

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleMenuItemClick = (event, shelf, index) => {
    this.setState({ selectedIndex: index, open: false });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render () {

    const {options} = this.props;

    return (
      <div>
        <IconButton aria-label="Add to shelf" onClick={this.handleClick}>
          <MoreVert />
        </IconButton>
        <Menu
          id="lock-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
        >
          {options.map((option, index) =>
            <MenuItem
              key={option.id}
              selected={index === this.state.selectedIndex}
              onClick={event => this.handleMenuItemClick(event, option.id, index)}
            >
              {option.title}
            </MenuItem>,
          )}
          <MenuItem onClick={event => this.handleMenuItemClick(event, 'none', options.length)}>None</MenuItem>
        </Menu>
      </div>
    );
  }
}