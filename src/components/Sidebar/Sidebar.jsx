import './Sidebar.css';
import { assets } from '../../assets/assets';
import React from 'react';
import { Box, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Link } from 'react-router-dom';


const Sidebar = ({ selectedMenu, setSidebarOpen }) => {
  const menuItems = [
    { text: 'Home', path: '/', icon: <img src={assets.home_icon} className='icons-in-sidebar' alt='' /> },    
    { text: 'Bookmarks', path: '/bookmarks', icon: <img src={assets.save_article_icon} className='icons-in-sidebar' alt='' /> },
    { text: 'My Page', path: '/profile', icon: <img src={assets.profilepage_icon} className='icons-in-sidebar' alt='' /> },    
    { text: 'Settings', path: '/', icon: <img src={assets.settingspage_icon} className='icons-in-sidebar' alt='' /> },
    // Add more menu items as needed
  ]; 

  return (
    <Box>

       <List>
        {menuItems.map((item, index) => ( 
          <ListItem button key={index} component={Link} to={item.path} >      
              <ListItemIcon className="custom-icon">{item.icon}</ListItemIcon>    
              <ListItemText className='menu-list' primary={item.text} />            
          </ListItem>
        ))}
       </List>

    </Box>
  );
};

export default Sidebar;