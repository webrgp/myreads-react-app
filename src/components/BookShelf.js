import React from 'react';
import PropTypes from 'prop-types';

import Card, { CardContent } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';

import Grid from 'material-ui/Grid';

export default class BookShelf extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render() {

    const { name, children, icon } = this.props;

    const styles = {
      header: {
        display: 'flex',
        alignItems: 'center'
      },
      avatar: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: 'auto',
        marginRight: 16
      },
      title: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 'auto',
      }
    };

    return (
      <Grid container={true} gutter={0}>
        <Grid item xs={12} sm={10} style={{ margin: 'auto' }}>
          <Card>
            <CardContent style={styles.header}>
              <Avatar aria-label={name} style={styles.avatar}>{icon}</Avatar>
              <Typography style={styles.title} type='title'>{name}</Typography>
            </CardContent>          
            <CardContent>
              
                {children}
                
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}