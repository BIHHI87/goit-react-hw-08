import css from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import { useId } from 'react';
import { register } from '../../redux/auth/operations';
import { Button } from '@mui/material';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (values) => {
    dispatch(register(values));
  };
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      <Form className={css.regForm}>
        <label htmlFor={nameId}>Name: </label>
        <Field id={nameId} type="text" name="name" className={css.textField} />
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
          Register
        </Button>
      </Form>
    </Formik>
  );
};
export default RegistrationForm;