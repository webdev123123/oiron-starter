import React, {
  useState,
  useEffect,
  useRef,
  Fragment
} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import useStyles from '../header-style';

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <AnchorLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

function MultiLevelHover(props) {
  const classes = useStyles();
  const { dataMenu } = props;

  // Parent state
  const [open, setOpen] = useState(false);
  const [menuName, setName] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const anchorRef = useRef(null);
  const prevOpen = useRef(open);

  // Child state
  const [menuChild, setMenuChild] = useState({});
  const [anchorChild, setAnchorChild] = useState({});

  // Parent function
  const handleToggle = (event, name) => {
    setOpen((newOpen) => !newOpen);
    setName(name);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setName('');
    setOpen(false);
    setMenuChild({});
    setAnchorChild({});
  };

  // Child function
  const handleToggleChild = (event, parent, id) => {
    event.stopPropagation();
    let menuClose = {};
    let anchorClose = {};
    for (let i = 0; i < parent.child.length; i += 1) {
      if (parent.child[i].id !== id) {
        menuClose = {
          ...menuClose,
          [parent.child[i].id]: false
        };
        anchorClose = {
          ...anchorClose,
          [parent.child[i].id]: null
        };
      }
    }
    setMenuChild({
      ...menuChild,
      ...menuClose,
      [id]: true
    });
    setAnchorChild({
      ...anchorChild,
      ...anchorClose,
      [id]: event.currentTarget
    });
  };

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const childMenu = (menu, item, anchor) => (
    <Popper anchorEl={anchor[item.id] || null} open={menu[item.id] || false} placement="right-start" transition disablePortal>
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{ transformOrigin: placement === 'bottom' ? 'center bottom' : 'center top' }}
        >
          <Paper>
            <MenuList id="menu-list-grow">
              {item.child.map((subitem, index) => {
                if (subitem.child) {
                  return (
                    <MenuItem
                      key={index.toString()}
                      onClick={(e) => handleToggleChild(e, item, subitem.id)}
                      className={classes.menuList}
                    >
                      <ListItemText primary={subitem.name} />
                      { childMenu(menuChild, subitem, anchorChild) }
                      <ChevronRightIcon fontSize="small" />
                    </MenuItem>
                  );
                }
                return (
                  <MenuItem
                    key={index.toString()}
                    onClick={(e) => handleClose(e)}
                    className={classes.menuList}
                  >
                    <ListItemText primary={subitem.name} />
                  </MenuItem>
                );
              })}
            </MenuList>
          </Paper>
        </Grow>
      )}
    </Popper>
  );

  return (
    <ul className={classes.multiMenu}>
      {dataMenu.map((item, index) => (
        <Fragment key={index.toString()}>
          {item.child ? (
            // eslint-disable-next-line
            <li
              onClick={(e) => handleToggle(e, item.name)}
              onKeyDown={(e) => handleToggle(e, item.name)}
              ref={anchorRef}
            >
              <div>
                <Button endIcon={<Icon>expand_more</Icon>}>{item.name}</Button>
                <Popper
                  open={menuName === item.name}
                  anchorEl={anchorEl || null}
                  className={classes.multiMenuRoot}
                  placement="bottom-start"
                  role={undefined}
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList autoFocusItem={open} id="menu-list-grow">
                            {item.child.map((subitem, indexChild) => {
                              if (subitem.child) {
                                return (
                                  <MenuItem
                                    key={indexChild.toString()}
                                    onClick={(e) => handleToggleChild(e, item, subitem.id)}
                                    className={classes.menuList}
                                  >
                                    <ListItemText primary={subitem.name} />
                                    {childMenu(menuChild, subitem, anchorChild)}
                                    <ChevronRightIcon fontSize="small" />
                                  </MenuItem>
                                );
                              }
                              return (
                                <MenuItem
                                  key={indexChild.toString()}
                                  onClick={(e) => handleClose(e)}
                                  className={classes.menuList}
                                >
                                  <ListItemText primary={subitem.name} />
                                </MenuItem>
                              );
                            })}
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </div>
            </li>
          ) : (
            <li key={index.toString()}>
              <div>
                <Button href={item.link}>{item.name}</Button>
              </div>
            </li>
          )}
        </Fragment>
      ))}
    </ul>
  );
}

MultiLevelHover.propTypes = {
  dataMenu: PropTypes.array.isRequired
};

export default MultiLevelHover;
