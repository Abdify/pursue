import { Container } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from './components/Home/Home';
import Learn from "./components/Learn/Learn";
import Subjects from "./components/Learn/Subjects/Subjects";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
    return (
        <Router>
            <Container maxwidth="lg">
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/learn">
                        <Learn />
                    </Route>
                    <Route path="/classes/:id">
                        <Subjects />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/auth">
                        <Auth />
                    </Route>
                </Switch>
            </Container>
        </Router>
    );
};

export default App;
