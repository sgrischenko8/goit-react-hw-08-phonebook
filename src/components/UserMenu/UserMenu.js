import { Button } from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import { ReactComponent as Out } from 'icons/Out.svg';
import { useDispatch } from 'react-redux';
import { useCheckUserQuery, useLogoutMutation } from 'redux/auth/authSlice';
import { setToken } from 'redux/auth/tokenSlice';
import styles from './UserMenu.module.css';

export const UserMenu = () => {
  const { data: user } = useCheckUserQuery();
  const [logout, { isLoading }] = useLogoutMutation();

  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      await logout().then(() => {
        dispatch(setToken(''));
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {user && (
        <div className={styles.user_container}>
          <p>{user.email}</p>
          {isLoading ? (
            <Loader />
          ) : (
            <Button onClick={logoutHandler}>
              <Out />
            </Button>
          )}
        </div>
      )}
    </>
  );
};
