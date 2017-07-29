import React from 'react';
import PropTypes from 'prop-types';

import {Card, CardActions, CardHeader} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';

import {
  green600,
  green50
} from 'material-ui/styles/colors';

export default class BookShelf extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render() {

    const { name, children, icon } = this.props;

    const styles = {
      cardHeader: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: green50
      },
      cardHeaderTitle: {
        fontSize: 20
      },
      cardHeaderSubtitle: {
        display: 'none'
      }
    };

    return (
      <Card>
        <CardHeader
          title={name}
          titleStyle={ styles.cardHeaderTitle }
          subtitleStyle={ styles.cardHeaderSubtitle }
          avatar={<Avatar backgroundColor={green600} icon={icon} />}
          style={ styles.cardHeader }
        />
        {children}
      </Card>
    );
  }
}