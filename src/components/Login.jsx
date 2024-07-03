import { useState } from "react";
import { Input } from "./Input";
import {
    validateEmail,
    passwordValidationMessage,
    emailValidationMessage,
    validatePassword
} from "../shared/validators";
import { useLogin } from "../shared/hooks/useLogin";
import '../css/login.css';
 
export const Login = () => {
    const { login, isLoading } = useLogin()  ;

    const [formState, setFormState] = useState({
        correo: {
            value: "",
            isValid: false,
            showError: false
        },
        password: {
            value: "",
            isValid: false,
            showError: false
        }
    });

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value
            }
        }));
    };

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false;
        switch (field) {
            case "correo":
                isValid = validateEmail(value);
                break;
            case "password":
                isValid = validatePassword(value);
                break;
            default:
                break;
        }
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }));
    };

    const handleLogin = (event) => {
        event.preventDefault();
        if (!formState.correo.isValid || !formState.password.isValid) {
            return;
        }
        login(formState.correo.value, formState.password.value);
    };

    const isSubmitButtonDisabled = isLoading || !formState.password.isValid || !formState.correo.isValid;

    return (
        <div className="login-container">
            
            <form className="auth-form" onSubmit={handleLogin}>
                <Input
                    field='correo'
                    label='Email'
                    value={formState.correo.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.correo.showError}
                    validationMessage={emailValidationMessage}
                />
                <Input
                    field='password'
                    label='Password'
                    value={formState.password.value}
                    onChangeHandler={handleInputValueChange}
                    type='password'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.password.showError}
                    validationMessage={passwordValidationMessage}
                />
                <button type="submit" disabled={isSubmitButtonDisabled}>
                    {isLoading ? 'Logging in...' : 'Log in'}
                </button>
            </form>
        </div>
    );
};