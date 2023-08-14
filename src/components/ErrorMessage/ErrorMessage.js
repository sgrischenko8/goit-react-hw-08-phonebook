import toast from 'react-hot-toast';

const ErrorMessage = ({ error }) => {
  if (error.status === 400 && !error.data.message) {
    toast.error('E-mail and password not fit');
    return;
  }
  if (error.data.code === 11000) {
    toast.error('Your access denied');
  }
  if (error.status === 400 && error.data.code !== 11000) {
    toast.error('Fill all fields');
    return;
  }
};

export default ErrorMessage;
