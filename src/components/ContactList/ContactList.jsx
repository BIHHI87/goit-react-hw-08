import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import {
  selectError,
  selectLoading,
  selectFilteredContacts,
} from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts) || [];
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      <ul className={css.contactList}>
        {Array.isArray(contacts) &&
          contacts?.map((contact) => {
            return (
              <li className={css.contact} key={contact.id}>
                <Contact {...contact} />
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default ContactList;