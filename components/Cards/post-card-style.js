import { makeStyles } from '@material-ui/core/styles';

const cardsStyles = makeStyles(theme => ({
  figure: {},
  newsCard: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(8)
    },
    '& $figure': {
      margin: 0,
      overflow: 'hidden',
      borderRadius: 15,
      zIndex: 1,
      '& img': {
        marginLeft: '50%',
        transform: 'translateX(-50%)'
      }
    },
  },
  properties: {
    flex: 1
  },
  media: {
    height: '100%'
  },
  action: {
    padding: theme.spacing(2, 3)
  },
  desc: {
    whiteSpace: 'initial',
    '-webkit-line-clamp': 3,
    '-webkit-box-orient': 'vertical',
    display: '-webkit-box',
    height: 80,
    overflow: 'hidden',
    marginBottom: 16,
    padding: 0,
    fontSize: 18
  },
  text: {
    padding: theme.spacing(0, 1),
  },
  title: {
    whiteSpace: 'nowrap',
    width: '100%',
    fontSize: 16,
    fontWeight: theme.typography.fontWeightBold
  },
  caption: {
    display: 'block',
    margin: theme.spacing(2, 0),
    color: theme.palette.text.secondary,
  },
  btn: {
    minWidth: 200,
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
  },
  /* Orientation */
  landscape: {
    marginBottom: theme.spacing(5),
    flexDirection: 'row',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
    '& $figure': {
      width: 200,
    },
  },
  portrait: {
    flexDirection: 'column',
    '& $figure': {
      height: 200,
    }
  },
  /* Type */
  full: {
    overflow: 'hidden',
    position: 'relative',
    '& $figure': {
      borderRadius: 0
    }
  },
  round: {
    '& $figure': {
      margin: theme.spacing(1),
      overflow: 'hidden',
      borderRadius: theme.rounded.medium
    },
    '&$landscape': {
      '& figure': {
        [theme.breakpoints.down('xs')]: {
          margin: theme.spacing(1)
        }
      }
    }
  },
  oval: {
    overflow: 'hidden',
    '&$portrait': {
      '& $figure': {
        width: '120%',
        marginLeft: '-10%',
        overflow: 'hidden',
        borderRadius: '0 0 50% 50%',
      }
    },
    '&$landscape': {
      '& $figure': {
        overflow: 'hidden',
      },
      '& $media': {
        borderRadius: '0 50% 50% 0 !important',
        height: '120% !important',
        marginTop: '-10%',
      },
    }
  },
  over: {
    overflow: 'visible',
    '& $figure': {
      boxShadow: theme.shadows[8],
    },
    '&$portrait': {
      '& $figure': {
        margin: theme.spacing(-2, 2, 0),
        [theme.breakpoints.down('xs')]: {
          height: 180
        },
        '& img': {
          width: '100%'
        }
      }
    },
    '&$landscape': {
      '& $figure': {
        width: 150,
        height: 150,
        margin: 0,
        marginLeft: theme.spacing(-2),
        [theme.breakpoints.down('xs')]: {
          width: '93%',
          margin: '0 auto',
          height: 180
        },
        '& img': {
          height: '100%',
          minWidth: '100%',
          [theme.breakpoints.down('xs')]: {
            height: 'auto',
            width: '100%'
          }
        }
      }
    }
  }
}));

export default cardsStyles;
