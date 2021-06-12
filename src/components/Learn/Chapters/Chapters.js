import { Container, Grid, Grow } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { list } from "../../../data/chapters";
import PostSkeleton from "../../Skeletons/PostSkeleton";
import Chapter from "./Chapter/Chapter";

const Chapters = () => {
    const { subjectId } = useParams();
    const [chaptersList, setChaptersList] = useState([]);

    useEffect(() => {
        setChaptersList(list.filter((s) => s.subjectId === +subjectId));
    }, []);

    return !chaptersList.length ? (
        <PostSkeleton />
    ) : (
        <Grow in>
            <Container xs={12}>
                <Grid container alignItems="stretch" spacing={3}>
                    {chaptersList.map((chapter) => (
                        <Grid key={chapter._id} item xs={12} sm={6} md={4}>
                            <Chapter chapter={chapter} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Grow>
    );
};

export default Chapters;
