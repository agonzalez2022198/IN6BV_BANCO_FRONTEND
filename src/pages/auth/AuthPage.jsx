import { Register } from "../../components/Register";
import './authPage.css';

export const AuthPage = () => {
  return (
    <div className="auth-container">
      <div className="auth-background"></div>
      <div className="auth-form-container">
        <Register />
      </div>
    </div>
  );
}