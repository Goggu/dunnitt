import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Homee from './pages/Home/Homee';
import Postt from './pages/Postt/Postt';
import AddPost from './pages/AddPost/AddPost';
import { Box } from '@mui/material';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './pages/Profile/Profile';
import Bookmarks from './pages/Bookmarks/Bookmarks';

const App = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box>
      <Navbar selectedMenu={selectedMenu} toggleSidebar={toggleSidebar} />

      <Box sx={{ display: 'flex' }}>
      {sidebarOpen && (
          <Box
            sx={{
              width: '180px',
              position: 'fixed',
              top: '70px',
              left: 0,
              height: 'calc(100vh - 80px)',
              zIndex: 1200,
              backgroundColor: 'white',
              boxShadow: 1,
            }}>
            <Sidebar selectedMenu={selectedMenu} setSidebarOpen={setSidebarOpen} />
          </Box>
        )}

        <Box 
          sx={{ 
            marginLeft: sidebarOpen ? '140px' : 0, 
            marginRight: sidebarOpen ? '20px' : 0,
            flex: 1, 
            marginTop: '55px', 
          }}>
          <Routes>
            <Route path="/" element={<Homee />} />
            <Route path="/article/:id" element={<Postt />} />
            <Route path="/add-article" element={<AddPost />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
