import React from "react";
import "./principal.css";

export const Principal = () => {
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
        <ul>
          <li>
            <div className="card">
              <div className="front">
                <h3>Tipo de cuenta: Corriente</h3>
                <h4>Número de cuenta: 1234567890</h4>
                <p>Nombre del cliente: John Doe</p>
              </div>
              <div className="back">
                <p>Saldo: Q5000</p>
                <p>Saldo disponible</p>
                <div className="buttons">
                  <button>Transferir</button>
                  <button>Pagar</button>
                  <button className="options-btn">
                    <strong>...</strong>
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
