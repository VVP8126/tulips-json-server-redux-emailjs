import React from 'react';
import styles from './../styles/styles.module.scss';
import SlideShow from './SlideShow';

const About = ({ closeAbout }) => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutBlock}>
        <div onClick={closeAbout} title="CLOSE" className={styles.aboutBlockCloseBtn}>
          &#215;
        </div>
        <h1>About US</h1>
        <div className={styles.aboutBlockIntroduction}>
          Blabla bla blabla bla-bla bla. Blabla bla blabla bla-bla blabla bla bla-bla. Blabla bla
          blabla bla-bla blablabla. Blabla bla blabla bla-bla blabla bla-blabla. Blabla bla blabla
          bla-bla bla blabla bla blabla bla-bla bla.
        </div>
        <div>
          <h4>Own production</h4>
          <SlideShow />
        </div>
        <div className={styles.aboutBlockDescription}>
          Blabla bla blabla bla-bla bla. Blabla bla blabla bla-bla blabla bla bla-bla. Blabla bla
          blabla bla-bla blablabla. Blabla bla blabla bla-bla blabla bla-blabla. Blabla bla blabla
          bla-bla bla blabla bla blabla bla-bla bla. Blabla bla blabla bla-bla bla. Blabla bla
          blabla bla-bla blabla bla bla-bla. Blabla bla blabla bla-bla blablabla. Blabla bla blabla
          bla-bla blabla bla-blabla. Blabla bla blabla bla-bla bla blabla bla blabla bla-bla bla.
          Blabla bla blabla bla-bla bla. Blabla bla blabla bla-bla blabla bla bla-bla. Blabla bla
          blabla bla-bla blablabla. Blabla bla blabla. Blabla bla blabla bla-bla bla. Blabla bla
          blabla bla-bla blabla bla bla-bla. Blabla bla blabla bla-bla blablabla. Blabla bla blabla
          bla-bla blabla bla-blabla. Blabla bla blabla bla-bla bla blabla bla blabla bla-bla bla.
        </div>
        <div className={styles.aboutBlockReturn} onClick={closeAbout}>
          Return
        </div>
      </div>
    </div>
  );
};

export default About;
