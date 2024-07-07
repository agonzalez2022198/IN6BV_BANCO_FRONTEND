import { useState, useEffect } from 'react';
import { getTransfer} from "../../services/api.jsx"
export const useGetTransfer = () => {
  const [transfers, setTransfers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransfers = async () => {
      try {
        const response = await getTransfer();
        if (!response.error) {
          setTransfers(response.data);
        } else {
          setError(response.e);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransfers();
  }, []);

  return { transfers, loading, error };
};
