import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './../styles/styles.module.scss';
import { faClose, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import emailjs from '@emailjs/browser';

const Contacts = ({ closeWindow }) => {
  //  Used to send letters at: vvp.test.smtp@gmail.com
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const clearForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS service settings
    const serviceId = 'service_5flb44r';
    const templateId = 'template_84ewv0s';
    const publicKey = 'Arrp9dSx4-1WveQys';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Vvp',
      message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((res) => {
        console.log('Letter sent');
        alert('Letter sent');
        clearForm();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className={styles.contacts}>
      <div className={styles.contactsCloseBtn}>
        <span onClick={closeWindow}>
          <FontAwesomeIcon icon={faClose} size="2x" />
        </span>
      </div>
      <div className={styles.contactsContent}>
        <h1>Our Contacts</h1>
        <div className={styles.contactsContentMain}>
          <p className={styles.contactsContentMainPar}>
            <span>Phone:</span>
            <span>0-000-000-00-00</span>
          </p>
          <p className={styles.contactsContentMainPar}>
            <span>Address:</span>
            <span>BLABLA City, BlaBla Street, 11/4</span>
          </p>
        </div>
        <div className={styles.contactsContentMainEmail}>
          <form onSubmit={handleSubmit}>
            <h2>SEND EMAIL</h2>
            <div className={styles.inputContainer}>
              <span>
                <FontAwesomeIcon icon={faUser} size="2x" />
              </span>
              <input
                type="text"
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.inputContainer}>
              <span>
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </span>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.inputContainerText}>
              <span>
                <FontAwesomeIcon icon={faPenToSquare} size="2x" />
              </span>
              <textarea
                placeholder="Email text ..."
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <input className={styles.inputContainerSendBtn} type="submit" value={'Send'} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
