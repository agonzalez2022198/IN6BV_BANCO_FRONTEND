import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import './principalAdmin.css';
import { AddCliente } from "../AddCliente/AddCliente";
import { VerClientes } from "../AddCliente/VerCliente";
import { CreateAccount } from "../BankAccount/BankAccount";

const PrincipalAdmin = () => {
    return (
        <div className="admin-container">
            <aside className="sidebar">
                <h2>KIBANK ADMIN</h2>
                <nav>
                    <ul>
                        <li><Link to="/PrincipalAdminPage/addCliente">Añadir Cliente</Link></li>
                        <li><Link to="/PrincipalAdminPage/verClientes">Ver Clientes</Link></li>
                        <li><Link to="/PrincipalAdminPage/addTipoCuenta">Añadir Tipos de Cuenta</Link></li>
                        <li><Link to="/PrincipalAdminPage/verRegistrosPersona">Ver Registros de una Persona</Link></li>
                        <li><Link to="/PrincipalAdminPage/verRegistrosVariasPersonas">Ver Registros de Varias Personas</Link></li>
                        <li><Link to="/PrincipalAdminPage/Cuenta">Cuentas</Link></li>
                    </ul>
                </nav>
            </aside>
            <main className="content">
                <Routes>
                    <Route path="/addCliente" element={<AddCliente />} />
                    <Route path="/verClientes" element={<VerClientes />} />
                    <Route path="/addTipoCuenta" element={<AddTipoCuenta />} />
                    <Route path="/verRegistrosPersona" element={<VerRegistrosPersona />} />
                    <Route path="/verRegistrosVariasPersonas" element={<VerRegistrosVariasPersonas />} />
                    <Route path="/cuenta" element={<CreateAccount />} />
                </Routes>
            </main>
        </div>
    );
};

const AddTipoCuenta = () => <div>Añadir Tipos de Cuenta</div>;
const VerRegistrosPersona = () => <div>Ver Registros de una Persona</div>;
const VerRegistrosVariasPersonas = () => <div>Ver Registros de Varias Personas</div>;
const Editar = () => <div>Editar Más</div>;

export { PrincipalAdmin };
