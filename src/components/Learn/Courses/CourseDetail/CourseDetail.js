import { Button, ListItem, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import chaptersList from '../../../../data/chapters';
import coursesList from '../../../../data/courses';
import useStyles from './styles';

const CourseDetail = () => {
    const { courseId } = useParams();
    const match = useRouteMatch();
    const [chapters, setChapters] = useState([]);
    const [course, setCourse] = useState({});
    const classes = useStyles();

    useEffect(() => {
        setChapters(chaptersList.filter(c => c.courseId === courseId));
        setCourse(coursesList.filter(c => c._id === courseId)[0]);
    }, []);

    return (
        <div>
            <div className={classes.courseInfo}>
                <h2>{course?.title}</h2>
                <p>{course?.description}</p>
            </div>
            <div>
                <Paper>
                    {chapters.map((chapter) => (
                        <ListItem key={chapter._id}>
                            <Button color="primary" className={classes.chapterBtn} fullWidth component={Link} to={`${match.url}/${chapter._id}`}>{chapter.title}</Button>
                        </ListItem>
                    ))}
                </Paper>
            </div>
        </div>
    );
};

export default CourseDetail;