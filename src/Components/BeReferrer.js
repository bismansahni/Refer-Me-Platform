

// // import React, { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { getNotifications } from '../services/api.js';
// // import BeReferrerStyles from '../styles/BeReferrer.module.css';
// // import { useProfile } from '../Context/ProfileContext';
// // import { ToastContainer, toast } from 'react-toastify';


// // const BeReferrer = () => {
// //   const [selectedRequest, setSelectedRequest] = useState(null);
// //   const [notifications, setNotifications] = useState([]);
// //   const navigate = useNavigate();
// //   const { profileData, fetchProfileData } = useProfile();

// //   const [toastShown, setToastShown] = useState(false);
// //   const [showOverlay, setShowOverlay] = useState(false);

// //   useEffect(() => {
// //     const fetchNotifications = async () => {
// //       try {
// //         const token = localStorage.getItem('token');
// //         if (!token) {
// //           navigate('/login');
// //           console.error('No token found');
// //           return;
// //         }

// //         const response = await getNotifications(token);
// //         setNotifications(response.notifications);
// //       } catch (error) {
// //         console.error('Error fetching notifications', error);
// //       }
// //     };

// //     fetchNotifications();
// //   }, [navigate]);

// //   useEffect(() => {
// //     if (!profileData || !profileData.current_job_role || !profileData.current_company || !profileData.resume) {
// //       if (!toastShown) {
// //         toast.error(
// //           <div>
// //             Please update your profile first.
// //             <a
// //               href="/update-profile"
// //               onClick={(e) => {
// //                 e.preventDefault();
// //                 navigate('/update-profile', { state: { profileData } });
// //               }}
// //               style={{ marginLeft: '10px', color: 'blue', textDecoration: 'underline', cursor: 'pointer', textAlign: 'right' }}
// //             >
// //               Update Profile
// //             </a>
// //           </div>,
// //           { autoClose: false, closeOnClick: false, draggable: false, closeButton: false }
// //         );
// //         setToastShown(true);
// //       }
// //       setShowOverlay(true);
// //     }
// //   }, [navigate, profileData, toastShown]);

// //   const handleDivClick = () => {
// //     navigate('/dashboard');
// //   };






// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { getNotifications } from '../services/api.js';
// import BeReferrerStyles from '../styles/BeReferrer.module.css';
// import { useProfile } from '../Context/ProfileContext';
// import { ToastContainer, toast } from 'react-toastify';

// const BeReferrer = () => {
//   const [selectedRequest, setSelectedRequest] = useState(null);
//   const [notifications, setNotifications] = useState([]);
//   const navigate = useNavigate();
//   const { profileData, fetchProfileData } = useProfile();

//   const [toastShown, setToastShown] = useState(false);
//   const [showOverlay, setShowOverlay] = useState(false);

//   useEffect(() => {
//     const fetchNotifications = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           navigate('/login');
//           console.error('No token found');
//           return;
//         }

//         const response = await getNotifications(token);
//         setNotifications(response.notifications);
//       } catch (error) {
//         console.error('Error fetching notifications', error);
//       }
//     };

//     fetchNotifications();
//   }, [navigate]);

//   useEffect(() => {
//     if (!profileData || !profileData.current_job_role || !profileData.current_company || !profileData.resume) {
//       if (!toastShown) {
//         toast.error(
//           <div>
//             Please update your profile first.
//             <a
//               href="/update-profile"
//               onClick={(e) => {
//                 e.preventDefault();
//                 navigate('/update-profile', { state: { profileData } });
//               }}
//               style={{ marginLeft: '10px', color: 'blue', textDecoration: 'underline', cursor: 'pointer', textAlign: 'right' }}
//             >
//               Update Profile
//             </a>
//           </div>,
//           { autoClose: false, closeOnClick: false, draggable: false, closeButton: false }
//         );
//         setToastShown(true);
//       }
//       setShowOverlay(true);
//     }
//   }, [navigate, profileData, toastShown]);

//   const handleDivClick = () => {
//     navigate('/dashboard');
//   };

//   return (
//     <div className={BeReferrerStyles["right-dashboard"]}>
//       <ToastContainer />
//       {showOverlay && <div className={BeReferrerStyles.overlay}></div>}
//       <div className={BeReferrerStyles["right-dashboard-header"]}>
//         <h1>Referral Requests</h1>
//       </div>
//       <div className={BeReferrerStyles["right-dashboard-left-box"]}>
//         {notifications.map((notification, index) => (
//           <button
//             key={index}
//             className={BeReferrerStyles["request-preview"]}
//             onClick={() => setSelectedRequest(notification)}
//           >
//             Request from {notification.referralRequest.user_name}
//           </button>
//         ))}
//       </div>
//       <div className={BeReferrerStyles["right-dashboard-right-box"]}>
//         {notifications.length === 0 ? (
//           <p className={BeReferrerStyles["no-requests"]}>You don't have any requests</p>
//         ) : selectedRequest ? (
//           <div className={BeReferrerStyles["request-details"]}>
//           <h3>Requestor: {selectedRequest.user.name}</h3>
//           <h3>Target Company: {selectedRequest.referralDetails.target_company}</h3>

//             <h3>
//               Job Link: &nbsp;
//               <a
//                 href={selectedRequest.referralDetails.target_job}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 View Job Posting
//               </a>
//             </h3>
//             <h3>
//               Resume Link: &nbsp;
//               <a
//                 href={selectedRequest.user.resume}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 View Resume
//               </a>
//             </h3>
//             <h3>Current Company: {selectedRequest.user.current_company}</h3>
//             <h3>Current Job Role: {selectedRequest.user.current_job_role}</h3>
//           </div>
//         ) : (
//           <div className={BeReferrerStyles["no-selection"]}>
//             <p>Select a referral request to view details</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BeReferrer;





import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getNotifications } from "../services/api.js";
import styles from "../styles/MyRequests.module.css";
import { useProfile } from "../Context/ProfileContext";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyRequests = () => {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();
  const { profileData, fetchProfileData } = useProfile();
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          console.error("No token found");
          return;
        }

        const fetchedNotifications = await getNotifications(token);
        setNotifications(fetchedNotifications.notifications);
      } catch (error) {
        console.error("Error fetching notifications", error);
      }
    };

    fetchNotifications();
  }, [navigate]);

  useEffect(() => {
    if (!profileData || !profileData.current_job_role || !profileData.current_company || !profileData.resume) {
      toast.error(
        <div>
          Please update your profile first.
          <a
            href="/update-profile"
            onClick={(e) => {
              e.preventDefault();
              navigate('/update-profile', { state: { profileData } });
            }}
            style={{ marginLeft: '10px', color: 'blue', textDecoration: 'underline', cursor: 'pointer', textAlign: 'right' }}
          >
            Update Profile
          </a>
        </div>,
        { autoClose: false, closeOnClick: false, draggable: false, closeButton: false }
      );
      setShowOverlay(true);
    }
  }, [navigate, profileData]);

  const handleDivClick = () => {
    navigate("/dashboard");
  };

  return (
    <div className={styles["right-dashboard"]}>
      <ToastContainer style={{ zIndex: 10000 }} />
      {showOverlay && <div className={styles.overlay}></div>}
      <div className={styles["right-dashboard-header"]}>
        <h1>Referral Requests</h1>
      </div>
      <div className={styles["right-dashboard-left-box"]}>
        {notifications.map((notification, index) => (
          <button
            key={index}
            className={styles["request-preview"]}
            onClick={() => setSelectedRequest(notification)}
          >
            Request from {notification.referralRequest.user.name}
          </button>
        ))}
      </div>
      <div className={styles["right-dashboard-right-box"]}>
        {notifications.length === 0 ? (
          <p className={styles["no-requests"]}>You don't have any requests</p>
        ) : selectedRequest ? (
          <div className={styles["request-details"]}>
            <p>Requestor: {selectedRequest.referralRequest.user.name}</p>
            <p>Target Company: {selectedRequest.target_company}</p>
            <p>
              Job Link: &nbsp;
              <a
                href={selectedRequest.target_job}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Job Posting
              </a>
            </p>
            <p>
              Resume Link: &nbsp;
              <a
                href={selectedRequest.user.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </p>
            <p>Current Company: {selectedRequest.user.current_company}</p>
            <p>Current Job Role: {selectedRequest.user.current_job_role}</p>
          </div>
        ) : (
          <div className={styles["no-selection"]}>
            <p>Select a referral request to view details</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyRequests;
