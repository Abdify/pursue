import { Container } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Home from './components/Home/Home';
import Learn from "./components/Learn/Learn";
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
                    <Route exact path="/auth">
                        <Auth />
                    </Route>
                </Switch>
            </Container>
        </Router>
    );
};

export default App;
