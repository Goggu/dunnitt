import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';

const Navbar = ({selectedMenu, toggleSidebar}) => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const notificationRef = useRef(null);

  // Toggle notification dropdown
  const toggleNotificationDropdown = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsNotificationOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [notificationRef]);

  return (
    <div className="navbar">
      <div className='navbar-left'>        
        <IconButton onClick={toggleSidebar}>
          <img src={assets.sidebar_icon} className='sidebar-icon' alt='' />
        </IconButton>
        <Link to="/" className='app-logo'>
          <h2>DunnIt</h2>
        </Link>
      </div>

      <div className='navbar-center'>
        <input type="text" className="search-input" placeholder="Search here" />
      </div>

      <div className="navbar-right">
        <Link to="/add-article">
          <div className='navbar-right-add-items'>
            <img src={assets.Add_Post_Icon} alt="Add New Article" className="add-article-icon" />
            <h2>Write</h2>
          </div>
        </Link>

        <IconButton>
          <img src={assets.dark_mode_icon} className='dark-mode-icon' alt='darkmode' />
        </IconButton>

        {/* Notification Dropdown */}
        <div ref={notificationRef} className="notification-wrapper">
          <IconButton onClick={toggleNotificationDropdown}>
            <img src={assets.notification_icon} className='notification-icon' alt='Notifications' />
          </IconButton>
          {isNotificationOpen && (
            <div className="notification-dropdown">
              <ul>
                <li>Notification 1</li>
                <li>Notification 2</li>
                <li>Notification 3</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

