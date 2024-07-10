
import React from 'react';
import { useNavigate } from "react-router-dom";
import "./principal.css";
import { useAccountUser } from '../../shared/hooks/useAccountUser.jsx';

export const Principal = () => {
  const navigate = useNavigate();
  const { accounts, isLoading, error, userName } = useAccountUser();     

  const GoToTransfer = () => {
    navigate('/Transfer');
  };

  console.log('Accounts:', accounts);
  console.log('User Name:', userName);

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
          <button type="button">Cerrar sesión</button>
        </div>
      </nav>
  
      <div className="cuentas">
        <h2>Mis Cuentas</h2>
        <h3>Usuario: {userName}</h3> {/* Mostrar el nombre del usuario */}
        {accounts.length === 0 ? (
          <p>No hay cuentas bancarias</p>
        ) : (
          <ul>
            {accounts.map(account => (
              <li key={account.uid}>
                <p>Account Number: {account.accountNumber}</p>
                <p>User: {account.user.name}</p>
                <p>Type Account: {account.typeAccount}</p>
                <p>Money: {account.money}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};