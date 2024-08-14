import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from './ContactForm.module.css';
import { useId } from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { Button } from '@mui/material';

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(2, 'Too Short!')
    .max(12, 'Too Long!')
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      'Invalid phone number format. Expected format: 222-33-77'
    )
    .required('Required'),
});

const initialValue = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.contactForm}>
        <div className={css.contactForm_Item}>
          <label htmlFor={nameId}>Name</label>
          <Field
            type="text"
            name="name"
            id={nameId}
            className={css.contactField}
          />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>
        <div className={css.contactForm_Item}>
          <label htmlFor={numberId}>Number</label>
          <Field
            type="text"
            name="number"
            id={numberId}
            className={css.contactField}
          />
          <ErrorMessage name="number" component="span" className={css.error} />
        </div>
        <Button type="submit" variant="contained" className={css.btn}>
          Add Contact
        </Button>
      </Form>
    </Formik>
  );
};

export default ContactForm;