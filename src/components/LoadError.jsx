import React from 'react';
import styles from './../styles/styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadCry } from '@fortawesome/free-regular-svg-icons';

const LoadError = ({ error }) => {
  return (
    <div className={styles.loadError}>
      <h2>Load error</h2>
      <FontAwesomeIcon icon={faSadCry} size="2x" />
      <p>{error}</p>
    </div>
  );
};

export default LoadError;
