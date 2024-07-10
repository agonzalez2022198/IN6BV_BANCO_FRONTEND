import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { getAccount } from '../../services/api'; // Asegúrate de importar el servicio correcto para obtener cuentas

export const useGetAccount = () => {
  const [accountData, setAccountData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const fetchAccountData = async () => {
    setIsFetching(true);
    try {
      const response = await getAccount(); // Llama al servicio para obtener datos de cuenta

      if (response.error) {
        toast.error(response.e?.response?.data || "Error occurred");
      } else {
        // Modifica la respuesta para incluir el nombre del usuario propietario
        const accountsWithUserNames = await Promise.all(
          response.data.map(async account => {
            const userResponse = await getUserById(account.user); // Función para obtener datos del usuario por ID
            const userName = userResponse.data.name; // Ajusta según la estructura de tu respuesta
            return { ...account, userName };
          })
        );

        setAccountData(accountsWithUserNames);
      }
    } catch (error) {
      toast.error("Error occurred while fetching account data.");
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchAccountData(); // Llama a la función de búsqueda de datos cuando se monta el componente
  }, []);

  return {
    getAccountData: fetchAccountData,
    accountData,
    isFetching,
  };
};