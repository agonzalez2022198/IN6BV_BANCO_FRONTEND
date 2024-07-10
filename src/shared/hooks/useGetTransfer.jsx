import { useState, useEffect } from 'react';
import { getTransfer, getUserById } from "../../services/api";

export const useGetTransfer = () => {
  const [transfers, setTransfers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransfers = async () => {
      try {
        const response = await getTransfer();
        if (!response.error) {
          const transfersWithUserNames = await Promise.all(response.data.map(async (transfer) => {
            try {
              const userResponse = await getUserById(transfer.idUser);
              return { ...transfer, userName: userResponse.name };
            } catch (userError) {
              console.error('Error fetching user:', userError);
              return { ...transfer, userName: 'Desconocido' };
            }
          }));
          setTransfers(transfersWithUserNames);
        } else {
          setError(response.error);
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
