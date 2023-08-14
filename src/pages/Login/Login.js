import { useDispatch } from 'react-redux';
import { setToken } from 'redux/auth/tokenSlice';
import Loader from 'components/Loader/Loader';
import { CredentialForm } from 'components/CredentialForm/CredentialForm';
import { useLoginMutation } from 'redux/auth/authSlice';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

const Login = () => {
  const dispatch = useDispatch();
  const [login, { isLoading, error }] = useLoginMutation();

  const loginHandler = async values => {
    try {
      await login(values).then(res => {
        dispatch(setToken(res?.data?.token));
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {error && <ErrorMessage error={error} />}
      {isLoading && <Loader />}
      <CredentialForm loginHandler={loginHandler} />
    </>
  );
};

export default Login;
