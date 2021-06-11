import { Container, Grid, Grow } from "@material-ui/core";
import React from "react";
import PostSkeleton from "../../Skeletons/PostSkeleton";
import Subject from "./Subject/Subject";

const Subjects = () => {

    const subjectsList = [
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

    return !subjectsList.length ? (
        <PostSkeleton />
    ) : (
        <Grow in>
            <Container xs={12}>
                <Grid container alignItems="stretch" spacing={3}>
                    {subjectsList.map((subject) => (
                        <Grid key={subject._id} item xs={12} sm={6} md={4}>
                            <Subject subject={subject} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Grow>
    );
};

export default Subjects;
