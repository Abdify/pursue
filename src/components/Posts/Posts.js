import { Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import PostSkeleton from "../Skeletons/PostSkeleton";
import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = ({setCurrentId}) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    return !posts.length ? (
        <PostSkeleton />
    ) : (
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {posts.map((post) => (
                <Grid key={post._id} item xs={12} sm={6} md={4}>
                    <Post post={post} setCurrentId={setCurrentId} />
                </Grid>
            ))}
        </Grid>
    );
};

export default Posts;
