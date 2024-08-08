

// // OtpModal.js
// import React from 'react';
// import Modal from 'react-modal';
// import styles from '../styles/OtpModal.module.css';

// Modal.setAppElement('#root'); // Required for accessibility

// const OtpModal = ({ isOpen, onRequestClose, otp, setOtp, handleOtpSubmit, isLoading }) => {
//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onRequestClose}
//       contentLabel="Enter OTP"
//       className={styles['popup-box']}
//       overlayClassName={styles['popup-overlay']}
//     >
//       <h3>Enter OTP</h3>
//       <input
//         type="text"
//         placeholder="Enter OTP"
//         value={otp}
//         onChange={(e) => setOtp(e.target.value)}
//         disabled={isLoading} // Only disable if loading
//       />
//       <div className={styles['popup-box-bottom']}>
//         <button onClick={handleOtpSubmit} disabled={isLoading}>Verify OTP</button>
//         <button onClick={onRequestClose} disabled={isLoading}>Cancel</button>
//       </div>
//     </Modal>
//   );
// };

// export default OtpModal;





import React from 'react';
import Modal from 'react-modal';
import styles from '../styles/OtpModal.module.css';

Modal.setAppElement('#root'); // Required for accessibility

const OtpModal = ({ isOpen, onRequestClose, otp, setOtp, handleOtpSubmit, isLoading, email }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Enter OTP"
      className={styles['popup-box']}
      overlayClassName={styles['popup-overlay']}
    >
      <h3>Enter OTP</h3>
      <p>An OTP has been sent to {email}. If you don't see it, please check your spam folder.</p>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        disabled={isLoading} // Only disable if loading
      />
      <div className={styles['popup-box-bottom']}>
        <button onClick={handleOtpSubmit} disabled={isLoading}>Verify OTP</button>
        <button onClick={onRequestClose} disabled={isLoading}>Cancel</button>
      </div>
    </Modal>
  );
};

export default OtpModal;
