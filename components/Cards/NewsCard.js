import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import useStyles from './news-card-style';

export default function NewsCard(props) {
  const classes = useStyles();
  const {
    headline,
    title,
    img,
    orientation,
    type
  } = props;
  return (
    <Card className={clsx(classes.newsCard, classes[orientation], classes[type])}>
      <div className={classes.figure}>
        <CardMedia className={classes.media} image={img} title="thumb" />
      </div>
      <div className={classes.properties}>
        <CardContent className={classes.desc}>
          <div className={classes.text}>
            <Typography variant="caption" className={classes.title}>{headline}</Typography>
            <Typography display="block" variant="h6">{title}</Typography>
          </div>
        </CardContent>
        <CardActions>
          {type === 'portrait' && <Box p={1} flexGrow={1} />}
          <Button className={classes.btn}>Read more</Button>
        </CardActions>
      </div>
    </Card>
  );
}

NewsCard.propTypes = {
  headline: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  orientation: PropTypes.string,
  type: PropTypes.string,
};

NewsCard.defaultProps = {
  orientation: 'portrait',
  type: 'full',
};
