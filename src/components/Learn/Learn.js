import { Container, Grid, Grow } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import Classes from './Classes/Classes';
import useStyles from "./styles";

const Learn = () => {
        const classes = useStyles();
        const dispatch = useDispatch();
        const [currentId, setCurrentId] = useState(null);

        useEffect(() => {
            dispatch(getPosts());
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
                        <Classes />
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