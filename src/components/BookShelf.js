import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';

const styleSheet = createStyleSheet(theme => ({
  cardContentHeader: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 'auto',
    marginRight: 16
  },
  typography: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
  },
  gridContainer: {
    marginBottom: 0,
    [theme.breakpoints.up('sm')]: {
      marginBottom: 20
    }
  },
  gridItem: {
    margin: 0,
    [theme.breakpoints.up('sm')]: {
      margin: '20px auto 0'
    }
  }
}));

import Grid from 'material-ui/Grid';

class BookShelf extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    children: PropTypes.element.isRequired
  }

  render() {

    const { name, children, icon, classes } = this.props;

    return (
      <Grid container gutter={0} className={classes.gridContainer}>
        <Grid item xs={12} sm={10} className={classes.gridItem}>
          <Card>
            <CardContent className={classes.cardContentHeader}>
              <Avatar aria-label={name} className={classes.avatar}>{icon}</Avatar>
              <Typography className={classes.typography} type='title'>{name}</Typography>
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

export default withStyles(styleSheet)(BookShelf)