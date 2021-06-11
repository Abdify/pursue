import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
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

      try {
        setUser(JSON.parse(localStorage.getItem("profile")));
      } catch (error) {
        console.log(error);  
      } 
  }, [location]);

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography
                    component={Link}
                    to="/"
                    className={classes.heading}
                    variant="h4"
                    align="center"
                >
                    The Pursue Machine
                </Typography>
                
            </div>
            <Toolbar className={classes.toolbar}>
                {user?.result ? (
                    <div className={classes.profile}>
                        <Avatar
                            className={classes.purple}
                            alt={user?.result.name}
                            src={user?.result.imageUrl}
                        >
                            {user?.result.name.charAt(0)}
                        </Avatar>
                        <Typography className={classes.userName} variant="h6">
                            {user?.result.name}
                        </Typography>
                        <Button
                            variant="contained"
                            className={classes.logout}
                            color="secondary"
                            onClick={logOut}
                        >
                            Logout
                        </Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">
                        Sign In
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;