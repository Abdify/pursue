import { Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import decode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useStyles from './styles';
const Navbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const [user, setUser] = useState(
        localStorage.getItem("profile") ? JSON.parse(localStorage.getItem("profile")) : null
    );

    
    const logOut = () => {
        dispatch({type: "LOGOUT"});
        setUser(null);
        // history.push('/');
        window.location.reload();
    }
    

  useEffect(() => {
      const token = user?.token;

      if(token) {
          const decodedToken = decode(token);
          if(decodedToken.exp * 1000 < new Date().getTime()) logOut();
      }

      try {
        setUser(JSON.parse(localStorage.getItem("profile")));
      } catch (error) {
        console.log(error);  
      } 
  }, [location]);

    return (
        <div className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography
                    component={Link}
                    to="/"
                    className={classes.heading}
                    color="primary"
                    variant="h5"
                    align="center"
                >
                    The Pursue Machine
                </Typography>
            </div>
            <Toolbar className={classes.toolbar}>
                {/* <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                >
                    <MenuIcon />
                </IconButton> */}
                <Button color="primary" component={Link} to="/">
                    Home
                </Button>
                <Button color="primary" component={Link} to="/learn">
                    Learn
                </Button>
                <Button color="primary" component={Link} to="/challenge">
                    Live Challenge
                </Button>
                {user?.result ? (
                    <>
                        <Button color="primary" component={Link} to="/profile">
                            {user?.result.name}
                        </Button>
                        <Button className={classes.logout} color="secondary" onClick={logOut}>
                            Logout
                        </Button>
                        <Avatar
                            className={classes.purple}
                            alt={user?.result.name}
                            src={user?.result.imageUrl}
                        >
                            {user?.result.name.charAt(0)}
                        </Avatar>
                    </>
                ) : (
                    <Button component={Link} to="/auth" color="secondary">
                        Sign In
                    </Button>
                )}
            </Toolbar>
        </div>
    );
};

export default Navbar;