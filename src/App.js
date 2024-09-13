import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import styles from './styles/styles.module.scss';

function App() {
  const [isCartOpened, setIsCartOpened] = React.useState(false);

  const toggleCart = () => {
    setIsCartOpened(!isCartOpened);
  };

  return (
    <div className={styles.wrapper}>
      <Header toggleCart={toggleCart} />
      <Main opened={isCartOpened} toggleCart={toggleCart} />
      <Footer />
    </div>
  );
}

export default App;
