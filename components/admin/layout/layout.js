import {Fragment} from 'react';
import Box from '@mui/material/Box';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import MainContentArea from '../MainContentArea/MainContentArea';

function Layout({children}) {

   
    return (
        <Box className='h-screen bg-white'>
            <Header/>
            <Box className='flex h-full'>
                <Sidebar/>
                <MainContentArea>
                    {children}
                </MainContentArea>
            </Box>
        </Box>
    );
}

export default Layout;