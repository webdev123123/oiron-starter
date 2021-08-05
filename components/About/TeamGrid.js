import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ReactWOW from 'react-wow';
import ProfileCard from '../Cards/ProfileCard';
import useStyles from './about-style';

function TeamGrid() {
  const classes = useStyles();

  return (
    <Box py={5}>
      <Grid container spacing={5} className={classes.teamRoot}>
        {[...Array(9)].map((e, index) => (
          <Grid item key={index.toString()} md={4} sm={6} xs={12}>
            <ReactWOW
              animation="fadeInUp"
              duration="0.5s"
              delay={(0.2 + (0.1 * index)) + 's'}
            >
              <div>
                <ProfileCard
                  connection={100}
                  favorites={10}
                  albums={12}
                  cover="https://source.unsplash.com/random"
                  name="John Dalton"
                  title="Web Designer"
                  type="full"
                  orientation="portrait"
                />
              </div>
            </ReactWOW>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default TeamGrid;
