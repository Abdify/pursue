import { Box } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import React from 'react';

const PostSkeleton = () => {
    return (
        <Box display="flex">
            <Box width="40%" p={2}>
                <Skeleton variant="rect" width="100%" height="200px" />
                <Skeleton width="60%" />
                <Skeleton />
                <Box display="flex" justifyContent="space-between">
                    <Skeleton width="30%" />
                    <Skeleton width="30%" />
                </Box>
            </Box>
            <Box width="40%" p={2}>
                <Skeleton variant="rect" width="100%" height="200px" />
                <Skeleton width="60%" />
                <Skeleton />
                <Box display="flex" justifyContent="space-between">
                    <Skeleton width="30%" />
                    <Skeleton width="30%" />
                </Box>
            </Box>
        </Box>
    );
};

export default PostSkeleton;