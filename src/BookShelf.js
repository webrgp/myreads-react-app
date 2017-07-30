import React from 'react';
import PropTypes from 'prop-types';

import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';

import Grid from 'material-ui/Grid';

export default class BookShelf extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render() {

    const { name, children, icon } = this.props;

    return (
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="Book Shelf">
              {icon}
            </Avatar>
          }
          title={name}
        />
        <CardContent>
          <Grid container style={{ flexGrow: 1 }}>
            <Grid item xs={12}>
            {children}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}