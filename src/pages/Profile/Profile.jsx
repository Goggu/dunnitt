import React, { useState, memo } from 'react';
import './Profile.css';
import { Box, Typography, Avatar } from '@mui/material';
import { assets } from '../../assets/assets';

const Profile = memo(() => {
  const [activeTab, setActiveTab] = useState('articles');

  const user = {
    name: 'Goku',
    username: '@goggu-p45',
    bio: 'pbafgengr lbh znqr vg',
    profilePicture: `http://localhost:5173${assets.profile_pic}`, // Replace with actual image URL
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Box className="profile-container">
      <Box className="profile-header">
        <Avatar
          alt={user.name}
          src={user.profilePicture}
          className="profile-picture"
        />
        <Box className="profile-info">
          <Typography variant="h4" className="profile-name">
            {user.name}
          </Typography>
          <Typography variant="subtitle1" className="profile-username">
            {user.username}
          </Typography>
          <Typography variant="body1" className="profile-bio">
            {user.bio}
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
