import { useState } from 'react';
import { EditUser } from '../../services/api.jsx';

export const useEditClient = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const editClient = async (data) => {
        setLoading(true);
        setError(null);
        try {
            const response = await EditUser(data);
            setLoading(false);
            return response;
        } catch (err) {
            setError(err);
            setLoading(false);
            return {
                error: true,
                err,
            };
        }
    };

    return { editClient, loading, error };
};