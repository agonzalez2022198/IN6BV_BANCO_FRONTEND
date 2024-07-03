import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginRequest } from "../../services/api";
import toast from "react-hot-toast";

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const login = useCallback(async (email, password) => {
        setIsLoading(true);
        try {
            const response = await loginRequest({ email, password });
            if (response.error) {
                throw new Error(response.error?.response?.data || 'Ocurrió un error al iniciar sesión');
            }
            const { userDetails } = response.data;
            localStorage.setItem('user', JSON.stringify(userDetails));
            console.log({ userDetails }, "user");
            navigate('/Principal');
        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    }, [navigate]);

    return {
        login,
        isLoading
    };
};
