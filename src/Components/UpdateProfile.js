




// import React, { useState, useEffect } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import { useProfile } from '../Context/ProfileContext';
// import { updateProfile } from '../services/api';
// import styles from '../styles/Profile.module.css';

// const UpdateProfile = () => {
//   const { profileData, updateProfileData } = useProfile();
//   const [formData, setFormData] = useState({
//     current_job_role: profileData?.current_job_role || '',
//     current_company: profileData?.current_company || '',
//     resume: profileData?.resume || ''
//   });

//   const hasUpdatedProfile = profileData?.current_job_role || profileData?.current_company || profileData?.resume;
//   const [isEditable, setIsEditable] = useState(!hasUpdatedProfile);
//   const navigate = useNavigate();

//   useEffect(() => {
//     setFormData({
//       current_job_role: profileData?.current_job_role || '',
//       current_company: profileData?.current_company || '',
//       resume: profileData?.resume || ''
//     });
//   }, [profileData]);

//   const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const validateResumeLink = (resume) => {
//     const re = /^(ftp|http|https):\/\/[^ "]+$/;
//     return re.test(String(resume).toLowerCase());
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.current_job_role || !formData.current_company || !formData.resume) {
//       toast.error("All fields are required");
//       return;
//     }

//     if (!validateResumeLink(formData.resume)) {
//       toast.error('Please enter a valid resume link');
//       return;
//     }

//     const token = localStorage.getItem('token');
//     if (!token) {
//       navigate('/login');
//       return;
//     }

//     try {
//       const response = await updateProfile(token, formData);
//       console.log('Profile update successful:', response);
//       toast.success('Profile updated successfully!', { icon: false });
//       updateProfileData(response);
//       setIsEditable(false);
//     } catch (error) {
//       console.error('Profile update failed:', error);
//       toast.error('Profile update failed.');
//     }
//   };

//   const onButtonClick = () => {
//     setIsEditable(true);
//   };

//   return (
//     <div className={styles['right-dashboard']}>
//       <ToastContainer />
//       <div className={styles['right-dashboard-header']}>
//         <h1>Update Profile</h1>
//       </div>
//       <div className={styles['middle-box-updateprofile']}>
//         <form onSubmit={onSubmit}>
//           <div className={styles['form-group']}>
//             <label htmlFor="current_job_role">Current Job Role</label>
//             <input
//               type="text"
//               id="current_job_role"
//               name="current_job_role"
//               value={formData.current_job_role}
//               onChange={onChange}
//               required
//               disabled={!isEditable}
//               className={!isEditable ? styles['form-group input:disabled'] : ''}
//             />
//           </div>
//           <div className={styles['form-group']}>
//             <label htmlFor="current_company">Current Company</label>
//             <input
//               type="text"
//               id="current_company"
//               name="current_company"
//               value={formData.current_company}
//               onChange={onChange}
//               required
//               disabled={!isEditable}
//               className={!isEditable ? styles['form-group input:disabled'] : ''}
//             />
//           </div>
//           <div className={styles['form-group']}>
//             <label htmlFor="resume">Resume Link</label>
//             <input
//               type="text"
//               id="resume"
//               name="resume"
//               value={formData.resume}
//               onChange={onChange}
//               required
//               disabled={!isEditable}
//               className={!isEditable ? styles['form-group input:disabled'] : ''}
//             />
//           </div>
//         </form>
//       </div>
//       <div className={styles['bottom-box-updateprofile']}>
//         <button type="submit" onClick={isEditable ? onSubmit : onButtonClick}>
//           {isEditable ? 'Update Profile' : 'Edit Profile'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UpdateProfile;



import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useProfile } from '../Context/ProfileContext';
import { updateProfile } from '../services/api';
import styles from '../styles/Profile.module.css';

const UpdateProfile = () => {
  const { profileData, updateProfileData } = useProfile();
  const [formData, setFormData] = useState({
    current_job_role: '',
    current_company: '',
    resume: ''
  });

  const hasUpdatedProfile = profileData?.current_job_role || profileData?.current_company || profileData?.resume;
  const [isEditable, setIsEditable] = useState(!hasUpdatedProfile);
  const navigate = useNavigate();

  useEffect(() => {
    if (profileData) {
      setFormData({
        current_job_role: profileData.current_job_role || '',
        current_company: profileData.current_company || '',
        resume: profileData.resume || ''
      });
    }
  }, [profileData]);

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateResumeLink = (resume) => {
    const re = /^(ftp|http|https):\/\/[^ "]+$/;
    return re.test(String(resume).toLowerCase());
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!formData.current_job_role || !formData.current_company || !formData.resume) {
      toast.error("All fields are required");
      return;
    }

    if (!validateResumeLink(formData.resume)) {
      toast.error('Please enter a valid resume link');
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const response = await updateProfile(token, formData);
      console.log('Profile update successful:', response);
      toast.success('Profile updated successfully!', { icon: false });
      updateProfileData(response);
      setIsEditable(false);
      setFormData({
        current_job_role: response.current_job_role,
        current_company: response.current_company,
        resume: response.resume
      });
    } catch (error) {
      console.error('Profile update failed:', error);
      toast.error('Profile update failed.');
    }
  };

  const onButtonClick = () => {
    setIsEditable(true);
  };

  return (
    <div className={styles['right-dashboard']}>
      <ToastContainer />
      <div className={styles['right-dashboard-header']}>
        <h1>Update Profile</h1>
      </div>
      <div className={styles['middle-box-updateprofile']}>
        <form onSubmit={onSubmit}>
          <div className={styles['form-group']}>
            <label htmlFor="current_job_role">Current Job Role</label>
            <input
              type="text"
              id="current_job_role"
              name="current_job_role"
              value={formData.current_job_role}
              onChange={onChange}
              required
              disabled={!isEditable}
              className={!isEditable ? styles['form-group input:disabled'] : ''}
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="current_company">Current Company</label>
            <input
              type="text"
              id="current_company"
              name="current_company"
              value={formData.current_company}
              onChange={onChange}
              required
              disabled={!isEditable}
              className={!isEditable ? styles['form-group input:disabled'] : ''}
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="resume">Resume Link</label>
            <input
              type="text"
              id="resume"
              name="resume"
              value={formData.resume}
              onChange={onChange}
              required
              disabled={!isEditable}
              className={!isEditable ? styles['form-group input:disabled'] : ''}
            />
   </div>
        </form>
       </div>
       <div className={styles['bottom-box-updateprofile']}>
         <button type="submit" onClick={isEditable ? onSubmit : onButtonClick}>
           {isEditable ? 'Update Profile' : 'Edit Profile'}
         </button>
       </div>
     </div>
  );
};


 export default UpdateProfile;
 

