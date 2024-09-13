import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt, faContactBook } from '@fortawesome/free-regular-svg-icons';
import { faDoorClosed, faCartShopping } from '@fortawesome/free-solid-svg-icons';

import styles from './../styles/styles.module.scss';
import About from './About';
import Contacts from './Contacts';
import Room from './Room';

const Header = ({ toggleCart }) => {
  const [isAboutShown, setIsAboutShown] = React.useState(false);
  const [areContactsShown, setAreContactsShown] = React.useState(false);
  const [isRoomShown, setIsRoomShown] = React.useState(false);

  const toggleAbout = () => {
    setIsAboutShown(!isAboutShown);
  };

  const toggleContacts = () => {
    setAreContactsShown(!areContactsShown);
  };

  const toggleRoom = () => {
    setIsRoomShown(!isRoomShown);
  };

  return (
    <header className={styles.header}>
      {isAboutShown && <About closeAbout={toggleAbout} />}
      {areContactsShown && <Contacts closeWindow={toggleContacts} />}
      {isRoomShown && <Room closeRoom={toggleRoom} />}
      <div className={styles.top}>
        <span className={styles.logo}>TULIPS</span>
        <ul className={styles.nav}>
          <li onClick={toggleCart}>
            <FontAwesomeIcon icon={faCartShopping} />
            Cart
          </li>
          <li onClick={toggleAbout}>
            <FontAwesomeIcon icon={faListAlt} />
            About
          </li>
          <li onClick={toggleContacts}>
            <FontAwesomeIcon icon={faContactBook} /> Contacts
          </li>
          <li onClick={toggleRoom}>
            <FontAwesomeIcon icon={faDoorClosed} />
            Room
          </li>
        </ul>
      </div>
      <div className={styles.presentation}></div>
    </header>
  );
};

export default Header;
