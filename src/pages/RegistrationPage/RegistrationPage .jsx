import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './RegistrationPage.module.css'

const RegistrationPage = () => {
  return (
    <div className={css.regPage}>
      <h1>Sign Up</h1>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;