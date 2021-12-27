import {Fragment, useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// import MenuIcon from '@mui/icons-material/Menu';
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
import Link from 'next/link'



import ListSubheader from '@mui/material/ListSubheader';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

import Image from 'next/image'
import {adminMenuList} from '../../../utils/adminMenuList'


function Sidebar(props) {

    const [menuOpen,setMenuOpen] = useState(false)
    const [open, setOpen] = useState(null);
    const [showdropdown,setShowdropdown] = useState(false)

//   const handleClick = () => {
//     setOpen(!open);
//   };

    const handleDropdown = (e,i) =>{
        
        setMenuOpen(i);
        if(menuOpen !== i){
            setShowdropdown(true);
        }else{
            setShowdropdown(!showdropdown);
        }
        
    }

    
    console.log('i', menuOpen)
    console.log('showdropdown', showdropdown)

    return (
        <Box className='w-64 border border-solid h-full'>
            <Box className='text-center py-4 border-b border-solid border-gray-200 bg-gray-100'>
                <Image src="/images/userimage.jpg" alt="me" width="64" height="64" className='rounded-full' />
                <h5>Abdus Salam</h5>
            </Box>
            <Box>
                
                <ul>
                {
                    adminMenuList.map((item,i)=>{
                        if(item?.dropdown){
                            return(
                                <li className={`has-dropdown  border cursor-pointer  ${menuOpen === i && showdropdown === true ? ' showing ': ' collapsed '} `} key={i} onClick={(e)=>handleDropdown(e,i)}>
                                    <span className='p-2 w-full block'>
                                        {item.label}
                                    </span>
                                    <ul className={`sub-menu pl-2 ${menuOpen === i && showdropdown === true ? ' fadeIn show-dropdown block  ': 'hide-dropdown hidden '}`} >
                                        {item.dropdown.map((sitem, j) => {
                                        return (
                                            <li key={j} className='p-2 border cursor-pointer '>
                                            <Link href={`${sitem.link}`}>
                                                <a>
                                                {sitem.label}
                                                </a>
                                            </Link>
                                            </li>
                                        );
                                        })}
                                    </ul>
                                </li>
                            )
                        }else{
                            return(
                                <li key={i} className='p-2 border cursor-pointer' onClick={(e)=>handleDropdown(e,i)}>
                                    <Link href={`${item.link}`}>
                                        <a>
                                            {item.label}
                                        </a>
                                    </Link>
                                </li>
                            )
                        }
                    })
                }
                </ul>
            </Box>
        </Box>
    );
}

export default Sidebar;