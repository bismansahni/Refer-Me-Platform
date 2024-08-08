// import axios from 'axios';

// const API_URL = process.env.REACT_APP_API_URL;

// export const register = async (name, email, password) => {
//   const response = await axios.post(`${API_URL}/api/auth/register`, { name, email, password });
//   return response.data;
// };

// export const login = async (email, password) => {
//   const response = await axios.post(`${API_URL}/api/auth/login`, { email, password });
//   return response.data;
// };

// export const updateProfile = async (token, profileData) => {
//   const response = await axios.patch(`${API_URL}/api/user/profile`, profileData, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   return response.data;
// };

// export const requestReferral = async (token, referralData) => {
//   const response = await axios.post(`${API_URL}/api/referral`, referralData, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   return response.data;
// };

// export const getNotifications = async (token) => {
//   const response = await axios.get(`${API_URL}/api/notifications`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   return response.data;
// };


// export const getProfile = async (token) => {
//   const response = await axios.get(`${API_URL}/api/user/profile`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   return response.data;
// };


// export const getReferrals = async (token) => {
//   try {
//     console.log('Fetching referrals with token:', token);
//     const response = await axios.get(`${API_URL}/api/referral`, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     console.log('Fetched referrals:', response.data);
//     return response.data.referrals; 
//   } catch (error) {
//     console.error('Error fetching referrals:', error);
//     throw error;
//   }
// };



import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const register = async (name, email, password) => {
  const response = await axios.post(`${API_URL}/api/auth/register`, { name, email, password });
  return response.data;
};

export const verifyOTP = async (email, otp) => {
  const response = await axios.post(`${API_URL}/api/auth/verify-otp`, { email, otp });
  return response.data;
};

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/api/auth/login`, { email, password });
  return response.data;
};

export const updateProfile = async (token, profileData) => {
  const response = await axios.patch(`${API_URL}/api/user/profile`, profileData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const requestReferral = async (token, referralData) => {
  const response = await axios.post(`${API_URL}/api/referral`, referralData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getNotifications = async (token) => {
  const response = await axios.get(`${API_URL}/api/notifications`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getProfile = async (token) => {
  const response = await axios.get(`${API_URL}/api/user/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getReferrals = async (token) => {
  try {
    console.log('Fetching referrals with token:', token);
    const response = await axios.get(`${API_URL}/api/referral`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log('Fetched referrals:', response.data);
    return response.data.referrals; 
  } catch (error) {
    console.error('Error fetching referrals:', error);
    throw error;
  }
};
