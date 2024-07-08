
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./principal.css";

export const Principal = () => {

  const navigate = useNavigate();

  const GoToTransfer = () => {
    navigate('/Transfer');
  }

  return (
    <div>
      <nav className="menu">
        <div className="menu-toggle">
          <select>&#9776;
            <option value="Rojo"></option>
          </select>
        </div>
        <div className="menu-items">
          <span>Cuentas</span>
          <span>Información de la cuenta</span>
          <button type="off">Cerrar sesión</button>
        </div>
      </nav>

      <div className="cuentas">
        <h2>Mis Cuentas</h2>
        
      </div>
    </div>
  );
};
