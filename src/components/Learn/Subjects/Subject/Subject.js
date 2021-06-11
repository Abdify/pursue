import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core/";
import { BookmarkOutlined, RemoveRedEye } from "@material-ui/icons";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const Subject = ({ subject }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = localStorage.getItem("profile")
        ? JSON.parse(localStorage.getItem("profile"))
        : null;

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={
                    subject.image ||
                    "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
                }
                title={subject.title}
            />
            <div className={classes.overlay}>
                <Typography variant="body2" color="white" component="h2">
                    {subject.tags.map((tag) => `#${tag} `)}
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
                to={`/subjects/${subject._id}`}
            >
                {subject.title}
            </Typography>

            <CardContent>
                <Typography
                    className={classes.description}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                >
                    {subject.description}
                </Typography>
            </CardContent>

            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">
                    <RemoveRedEye /> &nbsp; {subject.viewCount}
                </Button>

                {(user?.result?.googleId === subject?.creator ||
                    user?.result?._id === subject?.creator) && (
                    <Button size="small" color="primary" onClick={() => {}}>
                        <BookmarkOutlined fontSize="small" /> Enroll
                    </Button>
                )}
            </CardActions>
        </Card>
    );
};

export default Subject;
