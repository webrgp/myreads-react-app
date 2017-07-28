import React from 'react';
import PropTypes from 'prop-types';

import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';

import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';

export default class BookShelf extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render() {

    const { name, children, icon } = this.props;

    return (
      <Paper
        zDepth={1}>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <IconButton>{icon}</IconButton>
            <ToolbarTitle text={name} />
          </ToolbarGroup>
        </Toolbar>
        {children}
      </Paper>
    );
  }
}