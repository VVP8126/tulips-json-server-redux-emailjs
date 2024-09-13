import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import styles from './../styles/styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './../redux/slices/cart';

const Tulip = ({ tulip, activateSnack }) => {
  const dispatch = useDispatch();

  const onAddToCartClick = (e) => {
    e.stopPropagation();
    // console.log(`tulipId=${tulip.id}, price=${tulip.price}, title=${tulip.title}`);
    dispatch(
      addToCart({
        tulipId: tulip.id,
        price: tulip.price,
        title: tulip.title,
        img: tulip.img,
        count: 1,
      }),
    );
    activateSnack();
  };

  return (
    <>
      <img src={`/tulips/${tulip.img}`} alt={tulip.id} />
      <div className={styles.cardBody}>
        <h2>{tulip.title}</h2>
        <i>
          {tulip.description.length > 60
            ? `${tulip.description.substring(0, 60)} ...`
            : tulip.description}
        </i>
        <p>
          <span>Price:</span>
          <strong>
            <span>{tulip.price}</span>&#127;BYN
          </strong>
        </p>
        <div title={'Add to cart'} onClick={(e) => onAddToCartClick(e)}>
          <FontAwesomeIcon icon={faCartPlus} />
          &#127;ADD
        </div>
      </div>
    </>
  );
};

export default Tulip;
