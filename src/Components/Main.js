
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import UpdateProfile from './UpdateProfile';
import MyRequests from './MyRequests';
import BeReferrer from './BeReferrer';
import GetReferred from './GetReferred';
import MainStyles from '../styles/Main.module.css';
import { useProfile } from '../Context/ProfileContext';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const [activeComponent, setActiveComponent] = useState('Update Profile');
  const { fetchProfileData, profileData } = useProfile();
  const [profileLoaded, setProfileLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
      } else {
        console.log('Fetching profile data...');
        await fetchProfileData(token);
        console.log('Profile data fetched and set');
        setProfileLoaded(true);
      }
    };

    if (!profileLoaded) {
      fetchUserProfile();
    }
  }, [fetchProfileData, navigate, profileLoaded]);

  const handleToggleDashboard = (component) => {
    console.log(`Switching to component: ${component}`);
    setActiveComponent(component);
  };

  useEffect(() => {
    console.log(`Active component: ${activeComponent}`);
  }, [activeComponent]);

  return (
    <div className={MainStyles['main-container']}>
      <Navbar onToggleDashboard={handleToggleDashboard} />
      <div className={MainStyles['right-dashboard']}>
        {activeComponent === 'Update Profile' && <UpdateProfile />}
        {activeComponent === 'My Requests' && <MyRequests />}
        {activeComponent === 'Be A Referrer' && <BeReferrer />}
        {activeComponent === 'Get Referred' && <GetReferred />}
      </div>
    </div>
  );
};

export default Main;
