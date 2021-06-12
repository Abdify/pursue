import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { list } from "../../../data/classes";
import PostSkeleton from "../../Skeletons/PostSkeleton";
import Class from "./Class/Class";

const Classes = () => {
    const [classList, setClassList] = useState([]);

    useEffect(() => {
        setClassList(list);
    }, []);


    return !classList.length ? (
        <PostSkeleton />
    ) : (
        <Grid container alignItems="stretch" spacing={3}>
            {classList.map((cls) => (
                <Grid key={cls._id} item xs={12} sm={6} md={4}>
                    <Class cls={cls} />
                </Grid>
            ))}
        </Grid>
    );
};

export default Classes;
