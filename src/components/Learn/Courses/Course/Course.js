import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core/";
import { BookmarkOutlined, EditRounded, RemoveRedEye } from "@material-ui/icons";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const Course = ({ course }) => {
    const classes = useStyles();
    const user = localStorage.getItem("profile")
        ? JSON.parse(localStorage.getItem("profile"))
        : null;


    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={
                    course.courseImage ||
                    "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
                }
                title={course.courseTitle}
            />
            <div className={classes.overlay}>
                <Typography variant="body2" color="white" component="h2">
                    {course.courseTags.map((tag) => `#${tag} `)}
                </Typography>
            </div>

            <div className={classes.overlay2}>
                <Button style={{ color: "white" }} size="small" onClick={() => {}}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>

            <Typography
                className={classes.title}
                gutterBottom
                variant="h5"
                component={Link}
                to={`/courses/${course._id}`}
            >
                {course.courseTitle}
            </Typography>

            <CardContent>
                <Typography
                    className={classes.courseDescription}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                >
                    {course.courseDescription}
                </Typography>
            </CardContent>

            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">
                    <RemoveRedEye /> &nbsp;
                </Button>

                {user?.result?.googleId === course?.courseBy.googleId ||
                user?.result?._id === course?.courseBy._id ? (
                    <Button size="small" color="secondary" onClick={() => {}}>
                        <EditRounded fontSize="small" /> &nbsp; Manage
                    </Button>
                ) : (
                    <Button size="small" color="primary" onClick={() => {}}>
                        <BookmarkOutlined fontSize="small" /> Enroll
                    </Button>
                )}
            </CardActions>
        </Card>
    );
};

export default Course;
