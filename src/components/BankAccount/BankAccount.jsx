import React, { useState, useEffect } from "react";
import axios from "axios";
import apiClient from "./apiClient"; // Asumiendo que tienes un cliente API configurado
import "./bankAccount.css";

export const CreateAccount = () => {
    const [formData, setFormData] = useState({
        accountNumber: "",
        typeAccount: "",
        dpi: "",
        money: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await apiClient.post("/account/acc", formData);
            console.log("Respuesta del servidor:", response.data);
            // Aquí puedes manejar la respuesta del servidor según tus necesidades
        } catch (error) {
            console.error("Error al enviar los datos:", error);
            setSubmitError(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        if (submitError) {
            // Aquí puedes manejar el error de envío, por ejemplo, mostrar un mensaje al usuario
            console.error("Error en la creación de la cuenta:", submitError);
        }
    }, [submitError]);

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
                        <option value="Ahorros">Ahorros</option>
                        <option value="Corriente">Corriente</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>DPI:</label>
                    <input
                        type="text"
                        name="dpi"
                        value={formData.dpi}
                        onChange={handleChange}
                        pattern="\d+\s*dpi"
                        title="Ingrese un número seguido de 'dpi' (ej. 300 dpi)"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Monto:</label>
                    <input
                        type="text"
                        name="money"
                        value={formData.money}
                        onChange={handleChange}
                        pattern="^\$?\d+(,\d{3})*(\.\d{1,2})?$"
                        title="Ingrese un monto válido (ej. $1000)"
                        required
                    />
                </div>
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Creando..." : "Crear Cuenta Bancaria"}
                </button>
            </form>
        </div>
    );
};
