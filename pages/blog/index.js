import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Head from 'next/head';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useSpacing } from '~/theme/common';
import { withTranslation } from '~/i18n';
import Header from '../../components/Header/BlogHeader';
import Headline from '../../components/Blog/Headline';
import PostCard from '../../components/Cards/PostCard';
import Sidebar from '../../components/Blog/Sidebar';
import Footer from '../../components/Footer';
import brand from '../../public/text/brand';
import link from '../../public/text/link';

function BlogHome(props) {
  const classes = useSpacing();
  const { onToggleDark, onToggleDir, t } = props;
  return (
    <Fragment>
      <Head>
        <title>
          { brand.starter.name }
          &nbsp; - Blog
        </title>
      </Head>
      <CssBaseline />
      <section id="home" />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <div className={classes.containerGeneral}>
          <Container>
            <Grid container>
              <Grid item sm={12}>
                <Headline />
              </Grid>
            </Grid>
            <Box mt={8}>
              <Grid container spacing={3}>
                <Grid item md={6}>
                  <PostCard
                    href={link.starter.blogDetail}
                    img="https://source.unsplash.com/random"
                    title="Maecenas rutrum dolor sed nisi"
                    desc="Proin pretium arcu eget metus porta consectetur Pellentesque habitant"
                    date="12 Nov 2020"
                    orientation="landscape"
                    type="full"
                  />
                </Grid>
                <Grid item md={6}>
                  <PostCard
                    href={link.starter.blogDetail}
                    img="https://source.unsplash.com/random"
                    title="Maecenas rutrum dolor sed nisi"
                    desc="Proin pretium arcu eget metus porta consectetur Pellentesque habitant"
                    date="12 Nov 2020"
                    orientation="landscape"
                    type="full"
                  />
                </Grid>
              </Grid>
            </Box>
            <Box mt={2}>
              <Grid spacing={4} container>
                <Grid item md={8}>
                  {[...Array(6)].map((e, index) => (
                    <Box
                      key={index.toString()}
                      mt={index > 0 ? 6 : 0}
                    >
                      <PostCard
                        href={link.starter.blogDetail}
                        img="https://source.unsplash.com/random"
                        title="Maecenas rutrum dolor sed nisi"
                        desc="Maecenas rutrum dolor sed nisi maximus rhoncus. Nunc vel dignissim enim. Proin pretium arcu eget"
                        date="12 Nov 2020"
                        orientation="portrait"
                        type="round"
                      />
                    </Box>
                  ))}
                  <Box mt={5} className={classes.arrow}>
                    <Grid container justify="space-between">
                      <Button>
                        <ArrowBackIcon />
                        {t('common:btn_prev')}
                      </Button>
                      <Button>
                        {t('common:btn_next')}
                        <ArrowForwardIcon />
                      </Button>
                    </Grid>
                  </Box>
                </Grid>
                <Grid item md={4}>
                  <Sidebar />
                </Grid>
              </Grid>
            </Box>
          </Container>
        </div>
        <div id="footer">
          <Footer toggleDir={onToggleDir} />
        </div>
      </div>
    </Fragment>
  );
}

BlogHome.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

BlogHome.propTypes = {
  t: PropTypes.func.isRequired,
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default withTranslation(['common'])(BlogHome);
