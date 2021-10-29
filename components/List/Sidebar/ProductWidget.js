import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import { withTranslation } from '~/i18n';
import Paper from '../../Paper';
import useStyles from '../list-style';

function ProfileWidget(props) {
  const classes = useStyles();
  const { t } = props;
  const products = [{
    image: 'https://source.unsplash.com/random',
    text: 'Sed lacinia velit',
    price: '32'
  },
  {
    image: 'https://source.unsplash.com/random',
    text: 'Sed lacinia velit',
    price: '20'
  },
  {
    image: 'https://source.unsplash.com/random',
    text: 'Sed lacinia velit',
    price: '15'
  },
  {
    image: 'https://source.unsplash.com/random',
    text: 'Sed lacinia velit',
    price: '21'
  }];

  return (
    <Paper title={t('common:list_related')} icon="ion-ios-pricetag" whiteBg desc="Donec commodo convallis ligula eget suscipit orci.">
      <div className={classes.albumRoot}>
        <Grid container spacing={2}>
          {products.map((item, index) => (
            <Grid
              key={index.toString()}
              item
              xs={6}
              sm={3}
              md={6}
              className={classes.productItem}
            >
              <ButtonBase href="!#">
                <div className={classes.image} style={{ backgroundImage: `url(${item.image})` }} />
                <Typography noWrap display="block" variant="body1">{item.text}</Typography>
                <Typography variant="h6" className={classes.price}>
                  $
                  {item.price}
                </Typography>
              </ButtonBase>
            </Grid>
          ))}
        </Grid>
        <Grid container justify="center">
          <Button fullWidth color="secondary">
            {t('common:btn_seeall')}
          </Button>
        </Grid>
      </div>
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
