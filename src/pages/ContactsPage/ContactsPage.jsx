import { ContactForm, ContactList, SearchBox } from '../../components';
import css from './ContactsPage.module.css';

const ContactsPage = () => {
  return (
    <div className={css.contactsPage}>
      <h1>Contacts Page</h1>
      <div className={css.contactSearchBlock}>
        <ContactForm />
        <SearchBox />
      </div>
      <ContactList />
    </div>
  );
};

export default ContactsPage;