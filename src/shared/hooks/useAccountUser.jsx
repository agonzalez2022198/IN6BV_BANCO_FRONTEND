import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAccountUser } from '../../services/api';

export const useAccountUser = () => {
    const [accounts, setAccounts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBankAccounts = async () => {
            setIsLoading(true);
            try {
                const data = await getAccountUser();
                console.log('Fetched accounts:', data);
                if (Array.isArray(data)) {
                    setAccounts(data);
                    if (data.length > 0) {
                        setUserName(data[0].user.name);
                    }
                } else {
                    setAccounts([]);
                }
            } catch (error) {
                console.error('Error fetching bank accounts:', error);
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

    return { 
        accounts, 
        isLoading, 
        error,
        userName 
    };
};