import React from "react";
//import "./authPage";




export const Register = ({ switchAuthHandler }) => {
  //const { register, isLoading } = useRegister();

  const [formState, setFormState] = useState({
    email: {
      value: "",
      isValid: false,
      showError: false,
    },
    password: {
      value: "",
      isValid: false,
      showError: false,
    },
    passwordConfir: {
      value: "",
      isValid: false,
      showError: false,
    },
    name: {
      value: "",
      isValid: false,
      showError: false,
    },
    lastName: {
      value: "",
      isValid: false,
      showError: false,
    },
  });

  const handleInputValueChange = (value, field) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        value,
      },
    }));
  };

  const handleInputValidationOnBlur = (value, field) => {
    let isValid = false;
    switch (field) {
      case "email":
        isValid = validateEmail(value);
        break;
      case "password":
        isValid = validatePassword(value);
        break;
      case "passwordConfir":
        isValid = validatePasswordConfir(formState.password.value, value);
        break;
      case "name":
        isValid = validateName(value);
        break;
      case "lastName":
        isValid = validateLastName(value);
        break;
      default:
        break;
    }
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isValid,
        showError: !isValid,
      },
    }));
  };

  const handleRegister = (event) => {
    event.preventDefault();
    console.log(formState)
    register(
      formState.email.value,
      formState.password.value,
      formState.name.value,
      formState.lastName.value
    );
  };

  const isSubmitButtonDisabled =
    isLoading ||
    !formState.password.isValid ||
    !formState.email.isValid ||
    !formState.name.isValid ||
    !formState.lastName.isValid;
  return (
    <div className="auth">
      <div className="div">
        <div className="overlap-group">
          <div className="content">
            <div className="copy">
              <div className="text-wrapper">WELCOME TO KIBANK</div>
              <p className="text-wrapper-2">Ingresa los siguientes datos para crear tu ceunta KIBANK</p>
            </div>
            <div className="text-wrapper-2">Name:</div>
            <div className="input-and-button">
              <div className="field" />
            </div>
            <div className="text-wrapper-2">LastName</div>
            <div className="input-and-button">
              <div className="field" />
            </div>
            <div className="text-wrapper-2">Password</div>
            <div className="input-and-button">
              <div className="field" />
            </div>
            <div className="text-wrapper-2">Password again</div>
            <div className="input-and-button">
              <div className="field" />
            </div>
            <div className="text-wrapper-2">DPI</div>
            <div className="field-2" />
            <div className="text-wrapper-3">Location</div>
            <div className="field-wrapper">
              <div className="field" />
            </div>
          </div>
          <div className="content">
            <div className="copy">
              <div className="text-wrapper">WELCOME TO KIBANK</div>
              <p className="text-wrapper-2">Ingresa los siguientes datos para crear tu ceunta KIBANK</p>
            </div>
            <div className="text-wrapper-2">Name:</div>
            <div className="input-and-button">
              <div className="field" />
            </div>
            <div className="text-wrapper-2">LastName</div>
            <div className="input-and-button">
              <div className="field" />
            </div>
            <div className="text-wrapper-2">Password</div>
            <div className="input-and-button">
              <div className="field" />
            </div>
            <div className="text-wrapper-2">Password again</div>
            <div className="input-and-button">
              <div className="field" />
            </div>
            <div className="text-wrapper-2">DPI</div>
            <div className="field-2" />
            <div className="text-wrapper-3">Location</div>
            <div className="field-wrapper">
              <div className="field" />
            </div>
          </div>
          <div className="content">
            <div className="copy">
              <div className="text-wrapper">WELCOME TO KIBANK</div>
              <p className="text-wrapper-2">Ingresa los siguientes datos para crear tu ceunta KIBANK</p>
            </div>
            <div className="text-wrapper-2">Name:</div>
            <div className="input-and-button">
              <div className="field" />
            </div>
            <div className="text-wrapper-2">LastName</div>
            <div className="input-and-button">
              <div className="field" />
            </div>
            <div className="text-wrapper-2">Password</div>
            <div className="input-and-button">
              <div className="field" />
            </div>
            <div className="text-wrapper-2">Password again</div>
            <div className="input-and-button">
              <div className="field" />
            </div>
            <div className="text-wrapper-2">DPI</div>
            <div className="field-2" />
            <div className="text-wrapper-3">Location</div>
            <div className="field-wrapper">
              <div className="field" />
            </div>
          </div>
        </div>
        <div className="content-2">
          <div className="div-wrapper">
            <div className="text-wrapper">Others dates</div>
          </div>
          <div className="text-wrapper-2">Celular</div>
          <div className="input-and-button">
            <div className="field" />
          </div>
          <div className="text-wrapper-2">MonthLy Income</div>
          <div className="input-and-button">
            <div className="field" />
          </div>
          <div className="text-wrapper-2">Correo</div>
          <div className="input-and-button">
            <input className="label" placeholder="email@domain.com" type="email" />
            <button className="button">
              <div className="text-wrapper-4">Create Account</div>
            </button>
          </div>
          <p className="by-clicking-continue">
            <span className="span">By clicking continue, you agree to our </span>
            <span className="text-wrapper-5">Terms of Service</span>
            <span className="span"> and </span>
            <span className="text-wrapper-5">Privacy Policy</span>
          </p>
        </div>
        <div className="text-wrapper-6">KIBANK</div>
      </div>
    </div>
  );
};
