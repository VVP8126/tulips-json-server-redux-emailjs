import React from 'react';
import styles from './../styles/styles.module.scss';

const Room = ({ closeRoom }) => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutBlock}>
        <div onClick={closeRoom} title="CLOSE" className={styles.aboutBlockCloseBtn}>
          &#215;
        </div>
        <h2>I'm too lazy to do this part on JSON-server !!!</h2>
        <p>Fuck it !</p>
      </div>
    </div>
  );
};

export default Room;
