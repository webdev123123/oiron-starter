import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import LocalPhone from '@material-ui/icons/LocalPhone';
import DateRange from '@material-ui/icons/DateRange';
import LocationOn from '@material-ui/icons/LocationOn';
import { withTranslation } from '~/i18n';
import Paper from '../../Paper';
import useStyles from '../blog-style';

function ProfileWidget(props) {
  const classes = useStyles();
  const { t } = props;

  return (
    <Paper title={t('common:blog_about')} icon="ion-ios-contact-outline" whiteBg noMargin desc="commodo augue. In dictum leo nec odio euismod pretium.">
      <List dense className={classes.profileList}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <DateRange />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Born" secondary="Jan 9, 1994" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <LocalPhone />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Phone" secondary="(+62)8765432190" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <LocationOn />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Address"
            secondary="Chicendo Street no.105 Block A/5A - Barcelona, Spain"
            classes={{
              root: classes.listText
            }}
          />
        </ListItem>
      </List>
    </Paper>
  );
}

ProfileWidget.propTypes = {
  t: PropTypes.func.isRequired,
};

ProfileWidget.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation(['common'])(ProfileWidget);
