import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginRequest } from "../../services/api";
import toast from "react-hot-toast";

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const login = async (correo, password) => {
        setIsLoading(true);
        const response = await loginRequest({
            correo,
            password
        });
        setIsLoading(false);
        if (response.error) {
            return toast.error(
                response.e?.response?.data || 'Ocurrió un error al iniciar sesión'
            );
        }
        const { userDetails } = response.data;
        localStorage.setItem('user', JSON.stringify(userDetails));
        console.log({ userDetails }, "user");
        navigate('/Principal',{state: {correo}});
    };


    return {
        login,
        isLoading
    };
};