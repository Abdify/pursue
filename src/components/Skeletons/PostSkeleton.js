import { Box } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import React from 'react';

const PostSkeleton = () => {
    return (
        <Box display="flex">
            {[1, 2, 3].map((n) => (
                <Box width="30%" p={2} key={n}>
                    <Skeleton variant="rect" width="100%" height="200px" />
                    <Skeleton width="60%" />
                    <Skeleton />
                    <Box display="flex" justifyContent="space-between">
                        <Skeleton width="30%" />
                        <Skeleton width="30%" />
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

export default PostSkeleton;