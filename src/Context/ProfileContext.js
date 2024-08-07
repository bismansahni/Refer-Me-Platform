import React, { createContext, useContext, useState } from 'react';
import { getProfile } from '../services/api';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profileData, setProfileData] = useState(null);

  const fetchProfileData = async (token) => {
    try {
      const data = await getProfile(token);
      setProfileData(data);
      localStorage.setItem('profileData', JSON.stringify(data)); // Save to local storage
    } catch (error) {
      console.error('Failed to fetch profile data:', error);
    }
  };

  const updateProfileData = (newProfileData) => {
    setProfileData(newProfileData);
    localStorage.setItem('profileData', JSON.stringify(newProfileData)); // Save to local storage
  };

  const value = {
    profileData,
    fetchProfileData,
    updateProfileData,
  };

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
};

export const useProfile = () => useContext(ProfileContext);
