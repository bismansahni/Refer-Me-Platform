import React, { useState } from 'react';
import Navbar from './Navbar';
import UpdateProfile from './UpdateProfile';
import MyRequests from './MyRequests';
import BeReferrer from './BeReferrer';
import GetReferred from './GetReferred';
import MainStyles from '../styles/Main.module.css';

const Main = () => {
  const [activeComponent, setActiveComponent] = useState('');

  const handleToggleDashboard = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className={MainStyles['main-container']}>
      <Navbar onToggleDashboard={handleToggleDashboard} />
      <div className={MainStyles['right-dashboard']}>
        {activeComponent === 'Update Profile' && <UpdateProfile />}
        {activeComponent === 'My Requests' && <MyRequests />}
        {activeComponent === 'Be A Referrer' && <BeReferrer />}
        {activeComponent === 'Get Referred' && <GetReferred />}
        {/* Add other components as necessary */}
      </div>
    </div>
  );
};

export default Main;
