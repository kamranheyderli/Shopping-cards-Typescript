import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const Loading = () => {
    return (
        <div>
            <Box  sx={{ display: 'flex',}}>
                <CircularProgress size={100} />
            </Box>
        </div>
    )
}

export default Loading;

