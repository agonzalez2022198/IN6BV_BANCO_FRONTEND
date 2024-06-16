import { login } from "../../services/api";
import { useState } from "react";
import {useNavigate} from "react-router-dom"


export const useLogin = () =>{
    const [login, setLogin] = useState(false);
    const [loginDetails, setLoginDetails] = useState(null);

    const navigate = useNavigate();

    const login2 = async(correo, password) => {
        setLogin(true)

        console.log(correo, password)

        const response = await login({
            correo, password
        });

        setLogin(false)
        if(response.error){
            return toast.error(
                response.e?.response?.data || 'Have a error to start sesion'
            )
        }

        const { loginDetails } = response.data;
        setLoginDetails(loginDetails);

        localStorage.setItem('Login', JSON.stringify(loginDetails))

        navigate('/Principal')
    } 

    return {
        login2, 
        loginDetails
    }
}