import { Button } from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import { ReactComponent as Del } from 'icons/Del.svg';
import { Modal } from 'components/Modal/Modal';
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
      <p
        className={styles.contact_info}
        onClick={() => setIsModalOpen(true)}
        title="Edit Contact"
      >
        {contact.name}: {contact.number}
      </p>

      <Button onClick={() => deleteContact(contact.id)}>
        <Del />
      </Button>

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
