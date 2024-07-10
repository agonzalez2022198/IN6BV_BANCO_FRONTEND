import React from "react";
import { useCreateAccount } from "../../shared/hooks/useCreateAccount";
import "./bankAccount.css";

export const CreateAccount = () => {
    const {
        formData,
        isSubmitting,
        submitError,
        submitSuccess,
        handleChange,
        handleSubmit
    } = useCreateAccount();

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
                        <option value="Monetaria">Monetaria</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>DPI:</label>
                    <input
                        type="text"
                        name="dpi"
                        value={formData.dpi}
                        onChange={handleChange}
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
                {submitError && <p className="error">Error al crear la cuenta: {submitError.message}</p>}
                {submitSuccess && <p className="success">Cuenta creada exitosamente</p>}
            </form>
        </div>
    );
};
