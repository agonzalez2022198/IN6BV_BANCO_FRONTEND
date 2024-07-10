import React from 'react';
import { useNavigate } from "react-router-dom";
import { useAccountUser } from '../../shared/hooks/useAccountUser';
import "./principal.css";

export const Principal = () => {
  const navigate = useNavigate();
  const { accounts, isLoading, error, userName } = useAccountUser();     

  const handleLogout = () => {
    // Aquí deberías implementar la lógica para cerrar sesión
    // Por ejemplo, limpiar el token de sesión y redirigir al usuario a la página de inicio de sesión.
    navigate('/login');
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
                <p>Money: {account.money}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

