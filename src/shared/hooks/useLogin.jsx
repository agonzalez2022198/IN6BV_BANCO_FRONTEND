import { useState } from "react";
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

        const { token, userDetails } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(userDetails));

        const userRole = userDetails.role;

        console.log('Rol del usuario:', userRole);

        // Verifica el rol del usuario y redirige a la página correspondiente
        if (userRole === 'ADMIN_ROLE') {
            navigate('/PrincipalAdminPage', { state: { correo } });
        } else if (userRole === 'USER_ROLE') {
            navigate('/Principal', { state: { correo } });
        } else {
            // Manejar otros roles o errores
            toast.error('Rol de usuario no reconocido');
        }
    };

    return {
        login,
        isLoading
    };
};