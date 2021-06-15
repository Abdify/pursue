import { Container, Grid, Grow } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getChapters } from '../../actions/chapters';
import { getCourses } from '../../actions/courses';
import Courses from './Courses/Courses';
import useStyles from "./styles";

const Learn = () => {
        const classes = useStyles();
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(getCourses());
            dispatch(getChapters());
        }, [dispatch]);

    return (
        <Grow in>
            <Container>
                <Grid
                    className={classes.mainContainer}
                    container
                    justify="space-between"
                    alignItems="stretch"
                >
                    <Grid item xs={12}>
                        <Courses />
                    </Grid>
                    {/* <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid> */}
                </Grid>
            </Container>
        </Grow>
    );
};

export default Learn;