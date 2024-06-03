import { Register } from "../../components/Register";
import './authPage.css';
import React from "react";


export const AuthPage = () => {
  


  return (
    <div className="auth">
      <div className="div">
        <div className="overlap-group">
          <div className="content">
            <div className="copy">
              <div className="text-wrapper">WELCOME TO KIBANK</div>
              <p className="text-wrapper-2">Ingresa los siguientes datos para iniciar sesión</p>
            </div>
            <div className="text-wrapper-2">Username:</div>
            <div className="input-and-button">
              <input
                className="label"
                type="text"
                value={formState.username.value}
                onChange={(event) => handleInputValueChange(event.target.value, "username")}
                onBlur={(event) => handleInputValidationOnBlur(event.target.value, "username")}
              />
            </div>
            <div className="text-wrapper-2">Password</div>
            <div className="input-and-button">
              <input
                className="label"
                type="password"
                value={formState.password.value}
                onChange={(event) => handleInputValueChange(event.target.value, "password")}
                onBlur={(event) => handleInputValidationOnBlur(event.target.value, "password")}
              />
            </div>
            <div className="text-wrapper-2">Code</div>
            <div className="input-and-button">
              <input
                className="label"
                type="text"
                value={formState.code.value}
                onChange={(event) => handleInputValueChange(event.target.value, "code")}
                onBlur={(event) => handleInputValidationOnBlur(event.target.value, "code")}
              />
            </div>
            <button
              className="button"
              onClick={handleLogin}
              disabled={isSubmitButtonDisabled}
            >
              <div className="text-wrapper-4">Login</div>
            </button>
          </div>
        </div>
        <div className="text-wrapper-6">KIBANK</div>
      </div>
    </div>
  );
};

