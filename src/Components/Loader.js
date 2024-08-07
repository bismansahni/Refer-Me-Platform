// src/components/Loader.js
import React from 'react';
import styles from '../styles/Loader.module.css';

const Loader = () => (
    <div className={`${styles.loaderOverlay} ${styles.show}`}>
      <div className={styles.loader}></div>
    </div>
  );
  
  export default Loader;


