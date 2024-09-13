import React from 'react';
import styles from './../styles/styles.module.scss';
import TulipList from './TulipList';
import Cart from './Cart';

const Main = ({ opened, toggleCart }) => {
  return (
    <div className={styles.content}>
      {opened && <Cart toggleCart={toggleCart} />}
      <TulipList toggleCart={toggleCart} />
    </div>
  );
};

export default Main;
