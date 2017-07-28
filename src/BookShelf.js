import React from 'react';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';

export default class BookShelf extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render() {
    const { name, children } = this.props;

    const styles = {
      root: {
        padding: '10px 15px',
        margin: 10
      }
    };

    return (
      <Paper
        zDepth={0}
        style={styles.root}>
        <h2>{name}</h2>
        {children}
      </Paper>
    );
  }
}