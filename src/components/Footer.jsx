import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import styles from './../styles/styles.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.coordinates}>
        <p>
          <span>
            <FontAwesomeIcon icon={faPhoneVolume} />
            &#127;Tel:
          </span>
          <span>0-000-000-00-00</span>
        </p>
        <p>
          <span>
            <FontAwesomeIcon icon={faAddressCard} />
            &#127;Address:
          </span>
          <span>BLABLA City, BlaBla Street, 11/4</span>
        </p>
      </div>
      <div className={styles.copyright}>
        <FontAwesomeIcon icon={faCopyright} />
        &#127;All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
