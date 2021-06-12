import { Container } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import CheckUser from "./components/Auth/CheckUser";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from './components/Home/Home';
import ChapterDetail from './components/Learn/Chapters/ChapterDetail/ChapterDetail';
import Chapters from "./components/Learn/Chapters/Chapters";
import Learn from "./components/Learn/Learn";
import Subjects from "./components/Learn/Subjects/Subjects";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
    CheckUser();
    
    return (
        <Router>
            <Container maxwidth="lg">
                <Switch>
                    <Route exact path="/">
                        <Navbar />
                        <Home />
                    </Route>
                    <Route path="/learn">
                        <Navbar />
                        <Learn />
                    </Route>
                    <Route path="/classes/:classId">
                        <Navbar />
                        <Subjects />
                    </Route>
                    <Route path="/subjects/:subjectId">
                        <Navbar />
                        <Chapters />
                    </Route>
                    <Route path="/chapters/:chapterId">
                        <Navbar />
                        <ChapterDetail />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/auth">
                        <Navbar />
                        <Auth />
                    </Route>
                </Switch>
            </Container>
        </Router>
    );
};

export default App;
