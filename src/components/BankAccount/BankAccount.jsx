import React, { useState } from "react";
import axios from "axios";
import "./bankAccount.css";

export const CreateAccount = () => {
    const [formData, setFormData] = useState({
        accountNumber: "",
        typeAccount: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        
    };

    return (
        <div className="create-account-container">
            <h2>Crear Nueva Cuenta Bancaria</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Número de Cuenta:</label>
                    <input
                        type="text"
                        name="accountNumber"
                        value={formData.accountNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Tipo de Cuenta:</label>
                    <select
                        name="typeAccount"
                        value={formData.typeAccount}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Seleccionar Tipo de Cuenta</option>
                        {/* Aquí podrías incluir las opciones de tipos de cuentas desde tu base de datos */}
                        <option value="Ahorros">Ahorros</option>
                        <option value="Corriente">Corriente</option>
                    </select>
                </div>
                <button type="submit">Crear Cuenta Bancaria</button>
            </form>
        </div>
    );
};