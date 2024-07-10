import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAccountUser } from '../../services/api';

export const useAccountUser = () => {
    const [accounts, setAccounts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBankAccounts = async () => {
            setIsLoading(true);
            try {
                const data = await getAccountUser();
                console.log('Fetched accounts:', data); // Verifica los datos recibidos desde el backend
                if (Array.isArray(data)) {
                    setAccounts(data);
                    if (data.length > 0) {
                        setUserName(data[0]?.user?.name); // Acceso seguro para evitar errores
                    }
                } else {
                    setAccounts([]);
                }
            } catch (error) {
                console.error('Error fetching bank accounts:', error); // Muestra cualquier error al obtener datos
                setError(error);
                if (error.response && error.response.status === 401) {
                    navigate('/login');
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchBankAccounts();
    }, [navigate]);

    useEffect(() => {
        console.log('Accounts state:', accounts); // Verifica el estado actual de accounts
        console.log('User Name state:', userName); // Verifica el estado actual de userName
    }, [accounts, userName]);

    return { 
        accounts, 
        isLoading, 
        error,
        userName 
    };
};