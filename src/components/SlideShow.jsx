import React from 'react';
import { images } from '../data/slideShowContent';
import styles from './../styles/styles.module.scss';

const SlideShow = () => {
  const [current, setCurrent] = React.useState(images?.length ? images[0].id : 0);

  const changeSlide = (curr) => {
    setCurrent(curr);
  };

  const nextSlide = (delta) => {
    let first = images[0].id;
    let last = images[images.length - 1].id;
    let next = current + delta;
    if (next < first) {
      setCurrent(last);
    } else if (next > last) {
      setCurrent(first);
    } else {
      setCurrent(next);
    }
  };

  return (
    <div className={styles.slideshow}>
      {images ? (
        images.map((image) => (
          <div
            key={image.id}
            className={`${styles.slideshowItem} ${
              image.id !== current ? styles.slideshowItemInvisible : ''
            }`}
          >
            <div className={styles.slideshowItemNumber}>
              {image.id}/{images.length}
            </div>
            <img src={image.src} className={styles.slideshowItemImage} />
            <div className={styles.slideshowItemTitle}>{image.title}</div>
          </div>
        ))
      ) : (
        <h2>Image data not found !</h2>
      )}
      {images && (
        <>
          <a className={styles.slideshowBtnPrev} onClick={() => nextSlide(-1)}>
            &#9001;
          </a>
          <a className={styles.slideshowBtnNext} onClick={() => nextSlide(1)}>
            &#9002;
          </a>
        </>
      )}
      {images && (
        <div className={styles.slideshowDots}>
          {images.map((image) => (
            <span
              className={`${styles.slideshowDotsOne} ${
                image.id === current ? styles.slideshowDotsOneActive : ''
              }`}
              key={image.id}
              onClick={() => changeSlide(image.id)}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
};

export default SlideShow;
