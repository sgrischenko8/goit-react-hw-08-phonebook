import { useDispatch } from 'react-redux';
import { setToken } from 'redux/auth/tokenSlice';
import { useRegisterMutation } from 'redux/auth/authSlice';
import { CredentialForm } from 'components/CredentialForm/CredentialForm';
import toast from 'react-hot-toast';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

const Register = () => {
  const dispatch = useDispatch();
  const [register, { error, isSuccess }] = useRegisterMutation();

  const showCongrats = () => {
    toast.success('You successfully registered');
  };

  const registerHandler = async values => {
    try {
      await register(values).then(res => {
        dispatch(setToken(res.data.token));
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {error && <ErrorMessage error={error} />}
      {isSuccess && showCongrats()}
      <CredentialForm registerHandler={registerHandler} />
    </>
  );
};

export default Register;
