import React from 'react';
import Tulip from './Tulip';
// import { tulips } from './../data/data';  // For tests only, if JSON-server not used !!!
import { useDispatch, useSelector } from 'react-redux';
import { fetchTulips } from '../redux/slices/tulips';

import styles from './../styles/styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Details from './Details';
import Loader from './Loader';
import LoadError from './LoadError';
import Snack from './Snack';

const TulipList = ({ toggleCart }) => {
  const [tulipDetails, setTulipDetails] = React.useState(null);
  const [showDetailWindow, setShowDetailWindow] = React.useState(false);
  const [showSnack, setShowSnack] = React.useState(false);

  const dispatch = useDispatch();
  const tulips = useSelector((state) => state.tulips.tulips);
  const loading = useSelector((state) => state.tulips.loading);
  const error = useSelector((state) => state.tulips.error);
  const tulipsInCart = useSelector((state) => state.cart.totalCount);

  React.useEffect(() => {
    dispatch(fetchTulips());
  }, []);

  const showDetails = (tulip) => {
    setTulipDetails(tulip);
    setShowDetailWindow(true);
  };

  const closeDetailsWindow = () => {
    setShowDetailWindow(false);
  };

  const activateSnack = () => {
    setShowSnack(true);
    setTimeout(() => {
      setShowSnack(false);
    }, 500);
  };

  return (
    <>
      {showSnack && <Snack />}
      {showDetailWindow && <Details closeIt={closeDetailsWindow} tulip={tulipDetails} />}
      <p className={styles.contentTitle}>Available flowers</p>
      {loading ? (
        <Loader />
      ) : error ? (
        <LoadError error={error} />
      ) : (
        <div className={styles.tulipList}>
          <div
            className={styles.tulipListCartLink}
            onClick={() => toggleCart()}
            title={`In cart: ${tulipsInCart}`}
          >
            <FontAwesomeIcon icon={faCartShopping} size="2x" />
          </div>
          {tulips ? (
            tulips.map((tulip) => (
              <div key={tulip.id} onClick={() => showDetails(tulip)} className={styles.card}>
                <Tulip tulip={tulip} activateSnack={activateSnack} />
              </div>
            ))
          ) : (
            <p>Flowers not found</p>
          )}
        </div>
      )}
    </>
  );
};

export default TulipList;
