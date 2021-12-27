import {Fragment, useState} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MenuList from '@mui/material/MenuList';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DescriptionIcon from '@mui/icons-material/Description';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Avatar from '@mui/material/Avatar';




import ListSubheader from '@mui/material/ListSubheader';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';


import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import userImage from '../../assets/images/userimage.jpg'

function Sidebar(props) {

    const [open, setOpen] = useState(false);

//   const handleClick = () => {
//     setOpen(!open);
//   };


    return (
        <Box className='w-64 border border-solid h-full'>
            <Box className='text-center py-4 border-b border-solid border-gray-200 bg-gray-100'>
                <Avatar
                className='inline-flex' 
                alt="Remy Sharp" 
                src={userImage} 
                />
                <h5>Abdus Salam</h5>
            </Box>
            <Box>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                
                >
                <ListItemButton>
                    <ListItemIcon>
                    <SendIcon />
                    </ListItemIcon>
                    <Link to='/'>
                        Dashboard
                    </Link>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                    <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </ListItemButton>
                <ListItemButton onClick={()=>setOpen(!open)}>
                    <ListItemIcon>
                    <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Pages" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                        <StarBorder />
                        </ListItemIcon>
                        <Link to='/editor-test'>
                            Editor Test
                        </Link>
                    </ListItemButton>
                    </List>
                </Collapse>
                </List>
            </Box>
        </Box>
    );
}

export default Sidebar;