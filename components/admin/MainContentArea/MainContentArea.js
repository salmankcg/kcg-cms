import React from 'react';
import Box from '@mui/material/Box';

function MainContentArea({children}) {
    return (
        <Box className='w-full flex-1 p-4 bg-gray-50'>
            <Box className='bg-white min-h-screen shadow-md p-4'>
                {children}
            </Box>
        </Box>
    );
}

export default MainContentArea;