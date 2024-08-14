import { LoginForm } from '../../components';
import css from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={css.loginPage}>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;