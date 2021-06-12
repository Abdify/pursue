import { Container, Grid, Grow } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { list } from "../../../data/subjects";
import PostSkeleton from "../../Skeletons/PostSkeleton";
import Subject from "./Subject/Subject";

const Subjects = () => {
    const {classId} = useParams();
    const [subjectsList, setSubjectsList] = useState([]);
    console.log(classId)
    
    useEffect(() => {
        setSubjectsList(list.filter(s => s.classId === +classId))
    }, [])

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
