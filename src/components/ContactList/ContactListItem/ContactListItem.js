import { Button } from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import { Modal } from './Modal/Modal';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';
import styles from './ContactListItem.module.css';
import { useState } from 'react';

export const ContactListItem = ({ contact }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  return (
    <>
      <div className={styles.div}>
        {contact.name}: {contact.number}
      </div>

      <ul className={styles.list}>
        <li>
          <Button onClick={() => setIsModalOpen(true)}>Edit</Button>
        </li>
        <li>
          <Button onClick={() => deleteContact(contact.id)}>Delete</Button>
        </li>
      </ul>
      {isModalOpen && <Modal onClose={toggleModal} contact={contact}></Modal>}
      {isLoading && <Loader />}
    </>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
