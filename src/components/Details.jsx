import React from 'react';
import styles from './../styles/styles.module.scss';

const Details = ({ tulip, closeIt }) => {
  return (
    <div className={styles.tulipDetails}>
      <div className={styles.tulipDetailsContent}>
        <div className={styles.tulipDetailsContentImg}>
          <img src={`./tulips/${tulip.img}`} />
        </div>
        <div className={styles.tulipDetailsContentDescription}>
          <h1 className={styles.tulipDetailsContentDescriptionTitle}>{tulip.title}</h1>
          <p className={styles.tulipDetailsContentDescriptionContent}>{tulip.description}</p>
          <p className={styles.tulipDetailsContentDescriptionId}>
            <span>ID in catalog:</span> <span>{tulip.id}</span>
          </p>
          <p className={styles.tulipDetailsContentDescriptionPrice}>
            <span>at</span>
            <span>{tulip.price}&#127;BYN per unit</span>
          </p>
          <div onClick={closeIt} className={styles.tulipDetailsContentDescriptionBtn}>
            BACK
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
