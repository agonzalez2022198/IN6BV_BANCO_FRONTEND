import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import './principalAdmin.css';
import { AddCliente } from "../AddCliente/AddCliente";
import { VerClientes } from "../AddCliente/VerCliente";
import { CreateAccount } from "../BankAccount/BankAccount";
import { AllTransferPage } from "../../pages/Transfer/AllTransferPage";

const PrincipalAdmin = () => {
    const [expandedSections, setExpandedSections] = useState({
        cliente: false,
        cuenta: false,
        deposito: false,
        servicios: false
    });

    const toggleSection = (section) => {
        setExpandedSections(prevState => ({
            ...prevState,
            [section]: !prevState[section]
        }));
    };

    return (
        <div className="admin-container">
            <aside className="sidebar">
                <h2>KIBANK ADMIN</h2>
                <nav>
                    <ul>
                        <li>
                            <button onClick={() => toggleSection('cliente')}>Cliente</button>
                            {expandedSections.cliente && (
                                <ul>
                                    <li><Link to="/PrincipalAdminPage/addCliente">Añadir Cliente</Link></li>
                                    <li><Link to="/PrincipalAdminPage/verClientes">Ver Clientes</Link></li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <button onClick={() => toggleSection('cuenta')}>Cuenta</button>
                            {expandedSections.cuenta && (
                                <ul>
                                    <li><Link to="/PrincipalAdminPage/addTipoCuenta">Añadir Tipos de Cuenta</Link></li>
                                    <li><Link to="/PrincipalAdminPage/Cuenta">Cuentas</Link></li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <button onClick={() => toggleSection('deposito')}>Deposito</button>
                            {expandedSections.deposito && (
                                <ul>
                                    <li><Link to="/PrincipalAdminPage/verDepositos">Depositos</Link></li>
                                    <li><Link to="/PrincipalAdminPage/verRegistrosVariasPersonas">Ver Registros de Varias Personas</Link></li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <button onClick={() => toggleSection('servicios')}>Servicios</button>
                            {expandedSections.servicios && (
                                <ul>
                                    <li><Link to="/PrincipalAdminPage/servicio1">Servicio 1</Link></li>
                                    <li><Link to="/PrincipalAdminPage/servicio2">Servicio 2</Link></li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </nav>
            </aside>
            <main className="content">
                <Routes>
                    <Route path="/addCliente" element={<AddCliente />} />
                    <Route path="/verClientes" element={<VerClientes />} />
                    <Route path="/addTipoCuenta" element={<AddTipoCuenta />} />
                    <Route path="/verDepositos" element={<AllTransferPage />} />
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
