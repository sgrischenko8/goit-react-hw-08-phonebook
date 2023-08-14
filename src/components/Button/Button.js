import PropTypes from 'prop-types';
import styles from './Button.module.css';
import {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useEditContactMutation,
} from 'redux/contacts/contactsSlice';

export const Button = ({ children, onClick }) => {
  const { isLoading } = useGetContactsQuery();
  const { isLoading: addLoading } = useAddContactMutation();
  const { isLoading: delLoading } = useDeleteContactMutation();
  const { isLoading: editLoading } = useEditContactMutation();

  return (
    <button
      className={styles.btn}
      type={
        children === 'Add contact' || 'Sign Up' || 'Log In' || 'Rewrite'
          ? 'submit'
          : 'button'
      }
      onClick={() => onClick()}
      disabled={
        isLoading || addLoading || delLoading || editLoading ? true : false
      }
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
