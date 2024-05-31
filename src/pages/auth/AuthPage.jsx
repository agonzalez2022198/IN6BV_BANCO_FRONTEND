import { useState } from "react";

import { Register } from "../../components/Register";

import './authPage.css';

export const authPage = () => {

    const [isLogin, setIsLogin] = useState(true);

  const handleAuthPageToggle = () => {
    setIsLogin((prev) => !prev);
  };

  return(
    <div className="auth-container">
      <div className="auth-background"></div>
      <div className="auth-form-container">
        {isLogin ? (
          <Login switchAuthHandler={handleAuthPageToggle} />
        ) : (
          <Register switchAuthHandler={handleAuthPageToggle} />
        )}
      </div>
    </div>
  );

}