import { Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import PostSkeleton from "../../Skeletons/PostSkeleton";
import Course from "./Course/Course";

const Courses = () => {

    const coursesList = useSelector(state => state.courses);
    console.log(coursesList)

    return !coursesList.length ? (
        <PostSkeleton />
    ) : (
        <Grid container alignItems="stretch" spacing={3}>
            {coursesList.map((course) => (
                <Grid key={course._id} item xs={12} sm={6} md={4}>
                    <Course course={course} />
                </Grid>
            ))}
        </Grid>
    );
};

export default Courses;
