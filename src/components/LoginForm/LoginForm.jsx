import { Field, Form, Formik } from 'formik';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import css from './LoginForm.module.css';
import { Button } from '@mui/material';

const LoginForm = () => {
  const dispatch = useDispatch();
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (value) => {
    dispatch(login(value));
  };

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
      <Form className={css.loginForm}>
        <label htmlFor={emailId}>Email: </label>
        <Field
          id={emailId}
          type="email"
          name="email"
          className={css.textField}
        />

        <label htmlFor={passwordId}>Password: </label>
        <Field
          id={passwordId}
          type="password"
          name="password"
          className={css.textField}
        />

        <Button type="submit" variant="contained" className={css.btn}>
          Login
        </Button>
      </Form>
    </Formik>
  );
};

export default LoginForm;