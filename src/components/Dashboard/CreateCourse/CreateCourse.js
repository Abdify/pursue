import { Button, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
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
    const history = useHistory();
    const user = useSelector((state) => state.user.authData);
    const courses = useSelector(state => state.courses);
    const [done, setDone] = useState(false);

    const createCourseUrl = () => {
        return courseData.courseTitle.split(" ").map(word => word.toLocaleLowerCase()).join("-") + "-" + Math.floor(Math.random()*10000);
    }

    const handleCreateCourse = (e) => {
        e.preventDefault();
        const courseUrl = createCourseUrl();
        dispatch(createCourse({...courseData, courseBy: user?.result, courseUrl })).then((res) => {
            console.log(res);
            setDone(true);
        })
    };


    const next = () => {
        if(done){
            history.push(`/dashboard/create/${courses[courses.length-1]._id}/chapter`);
        } else {
            alert("Create a course first!");
        }
    }
    
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
                    required
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
                    required
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
                    required
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
                        required
                        onDone={({ base64 }) =>
                            setCourseData({ ...courseData, courseImage: base64 })
                        }
                    />
                </Paper>
                <div className="btn-container">
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Save
                    </Button>
                    <Button variant="contained" color="primary" fullWidth onClick={next} disabled={!done} >
                        Next
                    </Button>
                </div>
                    
                    
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
