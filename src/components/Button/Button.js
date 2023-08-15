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

  const showTitle = () => {
    if (children === '+') {
      return 'Add Contact';
    }
    if (children?._owner?.child?.return?.type?.name === 'UserMenu') {
      return 'Log Out';
    }
  };

  return (
    <button
      className={styles.btn}
      type={children === '✔' || 'Sign Up' || 'Log In' ? 'submit' : 'button'}
      onClick={() => onClick()}
      disabled={
        isLoading || addLoading || delLoading || editLoading ? true : false
      }
      title={showTitle()}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
