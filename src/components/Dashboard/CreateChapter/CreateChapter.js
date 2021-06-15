import { Button, InputLabel, MenuItem, Paper, Select, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { createChapter, getChapters } from "../../../actions/chapters";
import { getCourses } from "../../../actions/courses";
import "../CreateCourse/CreateCourse.css";

const CreateChapter = () => {
    const { courseId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector((state) => state.user.authData);
    const userCourses = useSelector((state) =>state.courses.filter((course) => course.courseBy._id === user.result._id));

    const [chapterData, setChapterData] = useState({
        courseId: courseId,
        chapterTitle: "",
        chapterDescription: "",
        chapterTags: [],
    });
    
    useEffect(() => {
        dispatch(getCourses());
        // setTimeout(() => {
        //     setChapterData({ ...chapterData, courseId: userCourses[userCourses.length - 1]?._id });
        // }, 500);
    }, [dispatch]);




    const handleCreateChapter = (e) => {
        e.preventDefault();
        dispatch(createChapter(chapterData)).then((data) => {
            dispatch(getChapters());
            history.push(`/courses/${courseId}`)
        })
    };
    const clear = () => {
        setChapterData({
            courseId: userCourses[userCourses.length - 1]?._id,
            chapterTitle: "",
            chapterDescription: "",
            chapterTags: [],
        });
    };
    return (
        <Paper>
            <h1>Create Chapter here</h1>
            <form className="form" onSubmit={handleCreateChapter}>
                <InputLabel id="demo-simple-select-label">Course</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={chapterData.courseId}
                    onChange={(e) => setChapterData({ ...chapterData, courseId: e.target.value })}
                >
                    {userCourses.map((course) => (
                        <MenuItem value={course._id}>{course.courseTitle}</MenuItem>
                    ))}
                </Select>
                <TextField
                    name="chapterTitle"
                    variant="outlined"
                    fullWidth
                    label="Chapter Title"
                    value={chapterData.chapterTitle}
                    onChange={(e) =>
                        setChapterData({ ...chapterData, chapterTitle: e.target.value })
                    }
                />

                <TextField
                    name="chapterDescription"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows="5"
                    rowsMax="10"
                    label="Write about the Chapter"
                    value={chapterData.chapterDescription}
                    onChange={(e) =>
                        setChapterData({ ...chapterData, chapterDescription: e.target.value })
                    }
                />

                <TextField
                    name="tags"
                    variant="outlined"
                    fullWidth
                    label="Tags (coma separated)"
                    fullWidth
                    value={chapterData.chapterTags}
                    onChange={(e) =>
                        setChapterData({ ...chapterData, chapterTags: e.target.value.split(",") })
                    }
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Next
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={clear}
                    fullWidth
                >
                    Clear
                </Button>
            </form>
        </Paper>
    );
};

export default CreateChapter;
