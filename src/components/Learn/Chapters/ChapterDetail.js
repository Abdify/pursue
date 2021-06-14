import { Button, Container, Grid, ListItem, Paper } from "@material-ui/core";
import { EditOutlined, FlightLandOutlined, VerifiedUser } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import chaptersList from "../../../data/chapters";
import topicsList from "../../../data/topics";
import useStyles from "./styles";

const ChapterDetail = () => {
    const { courseId, chapterId } = useParams();
    const match = useRouteMatch();
    const [topics, setTopics] = useState([]);
    const [chapter, setChapter] = useState({});
    const classes = useStyles();

    useEffect(() => {
        setTopics(topicsList.filter((c) => c.courseId === courseId && c.chapterId === chapterId));
        setChapter(chaptersList.filter((c) => c._id === chapterId)[0]);
    }, []);

    return (
        <Container>
            <div className={classes.chapterInfo}>
                <h2>{chapter?.title}</h2>
                <p>{chapter?.description}</p>
            </div>
            <Grid container className={classes.container}>
                <Grid item xs={12} lg={8}>
                    <div>
                        <Paper>
                            {topics.map((chapter) => (
                                <ListItem key={chapter._id}>
                                    <Button
                                        color="primary"
                                        fullWidth
                                        className={classes.chapterBtn}
                                        component={Link}
                                        to={`${match.url}/${chapter._id}`}
                                    >
                                        {chapter.title}
                                    </Button>
                                </ListItem>
                            ))}
                        </Paper>
                        <Paper>
                            <Button color="secondary">Previous year questions</Button>
                            <Button color="secondary">Other students questions</Button>
                        </Paper>
                    </div>
                </Grid>
                <Grid item xs={12} lg={3}>
                    <Paper>
                        <Button
                            color="primary"
                            fullWidth
                            className={classes.chapterBtn}
                            component={Link}
                            to={`${match.url}/${chapter._id}`}
                        >
                            <VerifiedUser />
                            Beginner
                        </Button>
                        <Button
                            color="primary"
                            fullWidth
                            className={classes.chapterBtn}
                            component={Link}
                            to={`${match.url}/${chapter._id}`}
                        >
                            <EditOutlined />
                            Give a Test
                        </Button>
                        <Button
                            color="primary"
                            fullWidth
                            className={classes.chapterBtn}
                            component={Link}
                            to={`${match.url}/${chapter._id}`}
                        >
                            <FlightLandOutlined />
                            Challenge a Friend
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ChapterDetail;
