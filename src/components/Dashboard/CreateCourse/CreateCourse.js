import { Button, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createCourse } from "../../../actions/courses";
import "./CreateCourse.css";

const CreateCourse = () => {
    const [courseData, setCourseData] = useState({
        courseTitle: "",
        courseDescription: "",
        courseImage: "",
        courseTags: [],
    });
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.authData);



    const handleCreateCourse = (e) => {
        e.preventDefault();
        dispatch(createCourse({...courseData, courseBy: user?.result}));
        clear();
    };
    const clear = () => {
        setCourseData({
            courseTitle: "",
            courseDescription: "",
            courseImage: "",
            courseTags: [],
        });
    }
    return (
        <Paper>
            <h1>Create course here</h1>
            <form className="form" onSubmit={handleCreateCourse}>
                <TextField
                    name="courseTitle"
                    variant="outlined"
                    fullWidth
                    label="Course Title"
                    value={courseData.courseTitle}
                    onChange={(e) => setCourseData({ ...courseData, courseTitle: e.target.value })}
                />

                <TextField
                    name="courseDescription"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows="5"
                    rowsMax="10"
                    label="Write about the course"
                    value={courseData.courseDescription}
                    onChange={(e) =>
                        setCourseData({ ...courseData, courseDescription: e.target.value })
                    }
                />

                <TextField
                    name="tags"
                    variant="outlined"
                    fullWidth
                    label="Tags (coma separated)"
                    fullWidth
                    value={courseData.courseTags}
                    onChange={(e) =>
                        setCourseData({ ...courseData, courseTags: e.target.value.split(",") })
                    }
                />
                <Paper className="image">
                    <label>Course Image: </label>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) =>
                            setCourseData({ ...courseData, courseImage: base64 })
                        }
                    />
                </Paper>
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

export default CreateCourse;
