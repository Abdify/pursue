import { Grid } from "@material-ui/core";
import React from "react";
import PostSkeleton from "../../Skeletons/PostSkeleton";
import Class from "./Class/Class";
import useStyles from "./styles";

const Classes = () => {
    const classes = useStyles();

    const classList = [
        {
            _id: 1,
            image: "",
            title: "MATH",
            description: "Learn the complex topics of Math in a simple way!",
            tags: ["advance"],
            viewCount: 0,
        },
        {
            _id: 2,
            image: "",
            title: "CSE",
            description: "Computer Science and Engineering",
            tags: ["advance"],
            viewCount: 0,
        },
    ];

    return !classList.length ? (
        <PostSkeleton />
    ) : (
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {classList.map((cls) => (
                <Grid key={cls._id} item xs={12} sm={6} md={4}>
                    <Class cls={cls} />
                </Grid>
            ))}
        </Grid>
    );
};

export default Classes;
