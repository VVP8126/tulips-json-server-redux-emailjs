import React from 'react';
import styles from './../styles/styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, clearCart, removeFromCart } from './../redux/slices/cart';
import { formatNumber } from '../formatter/numberFormatter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ toggleCart }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const totalCount = useSelector((state) => state.cart.totalCount);
  const totalSum = useSelector((state) => state.cart.totalSum);

  const onClearClick = () => {
    dispatch(clearCart());
  };

  const onRemoveClick = (id) => {
    dispatch(removeFromCart({ tulipId: id }));
  };

  const onAddClick = (tulip) => {
    dispatch(
      addToCart({
        tulipId: tulip.tulipId,
        price: tulip.price,
        title: tulip.title,
        img: tulip.img,
        count: 1,
      }),
    );
  };

  return (
    <div className={styles.cart}>
      <div className={styles.cartContent}>
        <div className={styles.cartCloseBtn}>
          <span onClick={toggleCart}>&#215;</span>
        </div>
        <div className={styles.cartContentInner}>
          <h1>Cart</h1>
          <p className={styles.cartContentInnerTotals}>
            <span>
              {totalCount === 0 ? 'Cart is empty' : `Found ${totalCount} items in a Cart`}
            </span>
            <span>
              {totalCount !== 0 && (
                <FontAwesomeIcon
                  className={styles.cartContentInnerTotalsClear}
                  icon={faTrashAlt}
                  size="1.5x"
                  title="CLEAR CART"
                  onClick={onClearClick}
                />
              )}
            </span>
            <span>
              {totalCount === 0
                ? 'Total sum in check is 0'
                : `Check for ${formatNumber(totalSum)} BYN`}
            </span>
          </p>
          <hr />
          {totalCount !== 0 && (
            <>
              <div className={styles.cartContentInnerHeader}>
                <div className={styles.cartContentInnerHeaderBriefInfo}>Information</div>
                <div className={styles.cartContentInnerHeaderCount}>Count</div>
                <div className={styles.cartContentInnerHeaderSum}>Sum</div>
              </div>
              <hr />
              <div className={styles.cartContentInnerCartList}>
                {cart.map((item) => (
                  <div key={item.tulipId} className={styles.cartContentInnerCartListItem}>
                    <div className={styles.cartContentInnerCartListItemBrief}>
                      <img src={`./tulips/${item.img}`} width={100} />
                      <div>
                        <p>{item.title}</p>
                        <p>{item.price} BYN per unit</p>
                      </div>
                    </div>
                    <div className={styles.cartContentInnerCartListItemCount}>
                      <span title="decrement" onClick={() => onRemoveClick(item.tulipId)}>
                        -
                      </span>
                      <div>{item.count}</div>
                      <span title="increment" onClick={() => onAddClick(item)}>
                        +
                      </span>
                    </div>
                    <div className={styles.cartContentInnerCartListItemSum}>
                      {formatNumber(item.count * item.price)}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          <div className={styles.cartContentInnerFooter}>
            <div>Ordered:</div>
            <div>
              <span>{totalCount}</span> <em>items</em>
            </div>
            <div>
              at <span>{formatNumber(totalSum)}</span> BYN
            </div>
            {totalCount !== 0 && (
              <FontAwesomeIcon
                icon={faCheckSquare}
                title="CHECK OUT"
                className={styles.cartContentInnerFooterClear}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
