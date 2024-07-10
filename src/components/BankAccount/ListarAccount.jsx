import React, { useEffect } from 'react';
import { useGetAccount } from '../../shared/hooks/useGetAccount'; // Ajusta la ruta según donde tengas definido tu hook
import toast from 'react-hot-toast';

export const ListarAccount = () => {
    const { accountData, isFetching } = useGetAccount();
  
    if (isFetching) {
      return <p>Cargando...</p>;
    }
  
    return (
      <div>
        <h2>Listado de Cuentas</h2>
        <ul>
          {accountData.map(account => (
            <li key={account._id}>
              <p>Número de cuenta: {account.accountNumber}</p>
              <p>Tipo de cuenta: {account.typeAccount}</p>
              <p>Propietario: {account.userName}</p>
              {/* Agrega más detalles según sea necesario */}
            </li>
          ))}
        </ul>
      </div>
    );
  };