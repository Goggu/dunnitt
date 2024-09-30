import React, { useState, memo, useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import './Profile.css';
import { Box, Typography, Avatar } from '@mui/material';
import { assets } from '../../assets/assets';

const Profile = memo(() => {
  const [activeTab, setActiveTab] = useState('articles');

  const {Profile} = useContext(StoreContext);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  console.log(`http://localhost:3000/profile`);

  return (
    <Box className="profile-container">
      <Box className="profile-header">
        <Avatar 
          alt={profile.name} 
          src={profile.profilepic} 
          className="profile-picture" 
        />
        <Box className="profile-info">
          <Typography variant="h4" className="profile-name">
            {Profile.name}
          </Typography>
          <Typography variant="subtitle1" className="profile-username">
            {Profile.username}
          </Typography>
          <Typography variant="body1" className="profile-bio">
            {Profile.bio}
          </Typography>
        </Box>
      </Box>
      <Box className="profile-tabs">
        <Typography
          variant="button"
          className={`profile-tab ${activeTab === 'articles' ? 'active' : ''}`}
          onClick={() => handleTabChange('articles')}
        >
          Articles (0)
        </Typography>
        <Typography
          variant="button"
          className={`profile-tab ${activeTab === 'groups' ? 'active' : ''}`}
          onClick={() => handleTabChange('groups')}
        >
          Groups
        </Typography>
      </Box>
      <Box className="profile-content">
        {activeTab === 'articles' && (
          <Typography variant="body1">
            Nothing published yet... 😳
          </Typography>
        )}
        {activeTab === 'groups' && (
          <Typography variant="body1">
            No groups joined yet... 🤔
          </Typography>
        )}
      </Box>
    </Box>
  );
});

export default Profile;
