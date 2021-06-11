import { Avatar, Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { signIn, signUp } from '../../actions/auth';
import GoogleIcon from "./GoogleIcon";
import Input from './Input';
import useStyle from './styles';

const initialState = {firstName: "", lastName: "", email: "", password: "", confirmPassword: ""};

const Auth = () => {
    
    const classes = useStyle();
    const history = useHistory();
    const dispatch = useDispatch();

    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => setShowPassword(!showPassword);
    const switchMode = () => {
        setIsSignup(!isSignup);
        setShowPassword(false);
    };
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        if(isSignup) dispatch(signUp(formData, history));
        else dispatch(signIn(formData, history));
    }

    const googleSuccess = (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        
        try {
            dispatch({type: "AUTH", data: {result, token}});

            history.push("/");
        } catch (error) {
            console.log(error);
        }
    }
    const googleFailure = () => {
        console.log("Google sign in failed, try again");
    }
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    {isSignup ? "Sign up" : "Sign in"}
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {isSignup && (
                            <>
                                <Input
                                    name="firstName"
                                    label="First Name"
                                    handleChange={handleChange}
                                    autoFocus
                                    half
                                />
                                <Input
                                    name="lastName"
                                    label="Last Name"
                                    handleChange={handleChange}
                                    half
                                />
                            </>
                        )}
                        <Input
                            name="email"
                            label="Email Address"
                            handleChange={handleChange}
                            type="email"
                        />
                        <Input
                            name="password"
                            label="Password"
                            handleChange={handleChange}
                            type={showPassword ? "text" : "password"}
                            handleShowPassword={handleShowPassword}
                        />
                        {isSignup && (
                            <Input
                                name="confirmPassword"
                                label="Confirm Password"
                                handleChange={handleChange}
                                type="password"
                            />
                        )}
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        {isSignup ? "Sign Up" : "Sign In"}
                    </Button>
                    <GoogleLogin
                        clientId={process.env.REACT_APP_OAUTHID}
                        render={(renderProps) => (
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                startIcon={<GoogleIcon />}

                            >
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />

                    <Grid container justify="center">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup
                                    ? "Already have an account? Sign in"
                                    : "No account yet? Sign up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default Auth;