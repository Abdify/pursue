import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core/";
import { BookmarkOutlined, RemoveRedEye } from "@material-ui/icons";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const Class = ({ cls }) => {
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
                    cls.image ||
                    "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
                }
                title={cls.title}
            />
            <div className={classes.overlay}>
                <Typography variant="body2" color="white" component="h2">
                    {cls.tags.map((tag) => `#${tag} `)}
                </Typography>
            </div>

            <div className={classes.overlay2}>
                <Button style={{ color: "white" }} size="small" onClick={() => {}}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>

            <Typography className={classes.title} gutterBottom variant="h5" component={Link} to={`/subjects/${cls._id}`}>
                {cls.title}
            </Typography>

            <CardContent>
                <Typography
                    className={classes.description}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                >
                    {cls.description}
                </Typography>
            </CardContent>
            
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">
                    <RemoveRedEye /> &nbsp; {cls.viewCount}
                </Button>

                {(user?.result?.googleId === cls?.creator ||
                    user?.result?._id === cls?.creator) && (
                    <Button size="small" color="primary" onClick={() => {}}>
                        <BookmarkOutlined fontSize="small" /> Enroll
                    </Button>
                )}
            </CardActions>
        </Card>
    );
};

export default Class;
