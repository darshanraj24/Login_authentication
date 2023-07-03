import React from 'react';
import Navbar from './Navbar';
import SideBar from './SideBar';
import HomeContent from './HomeContent';

const HomePage = () => {
  return (
    <div >
      <Navbar />
      <div style={{ display: 'flex' }}>
        <SideBar />
        <HomeContent />
      </div>
    </div>
  );
};

export default HomePage;
