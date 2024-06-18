import { useState } from "react";
import { register } from "../../services/api";

export const useAddUser = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const addUser = async (userData) => {
        setLoading(true);
        try {
            const response = await register(userData);
            setLoading(false);
            return response;
        } catch (error) {
            setLoading(false);
            setError(error);
            return { error: true, e: error };
        }
    };

    return { addUser, loading, error };
};
