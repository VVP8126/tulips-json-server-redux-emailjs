import React from 'react';
import styles from './../styles/styles.module.scss';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loaderContent}></div>
      <div className={styles.loaderContentInner}>
        <h4>Loading...</h4>
      </div>
    </div>
  );
};

export default Loader;
