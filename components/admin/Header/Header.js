
import {Fragment, useState} from 'react';
// Material Ui
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// Custom Component
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
function Header(props) {
    
    const[profileOption,setProfileOption] = useState(false);
    
    return (
        <Fragment>
            <Container maxWidth={false} className='border-b'>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Button className='border-r border-solid border-gray-200 rounded-none'>
                            <MenuIcon/>
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <h4 className='text-center font-medium text-xl'>
                            KCG FERN ADMIN
                        </h4>
                    </Grid>
                    <Grid item xs={4} className='text-right'>
                        <Box className='inline-flex  relative h-full border-l border-solid border-gray-200 p-0'>
                            <Box onClick={(e)=>setProfileOption(!profileOption)}>
                                <List className='p-0'>
                                    <ListItem disablePadding className='flex flex-col'>
                                        <ListItemButton className='py-1'>
                                        <ListItemIcon>
                                            <PermIdentityIcon/>
                                        </ListItemIcon>
                                            <ListItemText primary="Abdus Salam" />
                                            {
                                                profileOption? <KeyboardArrowUpIcon/>  : <KeyboardArrowDownIcon/>
                                            }
                                            
                                        </ListItemButton>
                                   </ListItem>
                                </List>
                                
                            </Box>
                            {
                                profileOption ? <Box className='absolute top-full border  right-0 p-0 z-40 bg-gray-100  fadeIn'>
                                <List className='flex p-0'>
                                    <ListItem disablePadding className='flex flex-col border-r '>
                                         <ListItemButton>
                                         <ListItemIcon>
                                             <PermIdentityIcon/>
                                         </ListItemIcon>
                                             <ListItemText primary="Profile" />
                                         </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding className='flex flex-col border-r '>
                                         <ListItemButton>
                                         <ListItemIcon>
                                             <PermIdentityIcon/>
                                         </ListItemIcon>
                                             <ListItemText primary="Settings" />
                                         </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                         <ListItemButton>
                                         <ListItemIcon>
                                             <LogoutIcon/>
                                         </ListItemIcon>
                                             <ListItemText primary="Logout" />
                                         </ListItemButton>
                                    </ListItem>
                                </List>
                             </Box> : ''
                            }
                            
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Fragment>
    );
}

export default Header;