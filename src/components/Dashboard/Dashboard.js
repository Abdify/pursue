import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router';
import CreateClass from './CreateClass/CreateClass';
import CreateSubject from "./CreateSubject/CreateSubject";
import ResponsiveDrawer from './Sidebar/Sidebar';
import useStyles from "./styles";

const Dashboard = () => {
    const history = useHistory();
    const user = useSelector((state) => state.user.authData);
    const classes = useStyles();
    
    if(!user){
        history.push('/auth');
    }
    
    return (
        <div className={classes.root}>
            <ResponsiveDrawer />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Switch>
                    <Route path="/dashboard/create/class">
                        <CreateClass />
                    </Route>
                    <Route path="/dashboard/create/subject">
                        <CreateSubject />
                    </Route>
                </Switch>
            </main>
        </div>
    );
};

export default Dashboard;