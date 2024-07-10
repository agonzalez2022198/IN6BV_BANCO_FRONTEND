import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAccountUser } from '../../shared/hooks/useAccountUser';
import { TransferList } from '../Transfer/AllTransfer'; // Asegúrate de ajustar la ruta de importación
import "./principal.css";

export const Principal = () => {
  const navigate = useNavigate();
  const { accounts, isLoading, error, userName } = useAccountUser();     
  const [showTransfers, setShowTransfers] = useState(false);

  const GoToTransfer = () =>{
    navigate('/Transfer');
  }

  const handleLogout = () => {
    navigate('/login');
  };

  const toggleTransfers = () => {
    setShowTransfers(prevState => !prevState);
  };

  if (isLoading) {
    return <p>Loading...</p>;     
  }     
  if (error) {         
    return <p>Error: {error.message}</p>;     
  }

  return (
    <div>
      <nav className="menu">
        <div className="menu-toggle">
          <select>
            <option value="Rojo">&#9776;</option>
          </select>
        </div>
        <div className="menu-items">
          <span>Cuentas</span>
          <span>Información de la cuenta</span>
          <button type="button" onClick={handleLogout}>Cerrar sesión</button>
        </div>
      </nav>
  
      <div className="cuentas">
        <h2>Mis Cuentas</h2>
        <h3>Usuario: {userName}</h3>
        {accounts.length === 0 ? (
          <p>No hay cuentas bancarias</p>
        ) : (
          <ul>
            {accounts.map(account => (
              <li key={account.uid}>
                <p>Account Number: {account.accountNumber}</p>
                <p>User: {account.user.name}</p>
                <p>Type Account: {account.typeAccount}</p>
                <p>Saldo: {account.money}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="buttons">
        <button onClick={GoToTransfer}>Transferir</button>
        <button onClick={toggleTransfers}>
          {showTransfers ? 'Ocultar Transferencias' : 'Mostrar Transferencias'}
        </button>
      </div>
      {showTransfers && <TransferList />}
    </div>
  );
};
