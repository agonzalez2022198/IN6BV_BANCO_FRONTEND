import React from 'react';
import './transfer.css';
import useTransfer from '../../shared/hooks/useAddTransfer';

export const Transfer = () => {
    const {
        account,
        amount,
        comment,
        error,
        isLoading,
        isSuccess,
        handleAccountChange,
        handleAmountChange,
        handleCommentChange,
        handleSubmit,
    } = useTransfer();

    return (
        <div className="TransferContainer">
            <div className="FormContainer">
                <h2 className="Header">Realizar Transacción</h2>
                <form className="Form" onSubmit={handleSubmit}>
                    <div className="FormGroup">
                        <label className="Label" htmlFor="account">Cuenta a Acreditar</label>
                        <input
                            className="Input"
                            type="text"
                            id="account"
                            value={account}
                            onChange={handleAccountChange}
                            placeholder="Número de cuenta"
                            required
                        />
                    </div>
                    <div className="FormGroup">
                        <label className="Label" htmlFor="amount">Monto</label>
                        <input
                            className="Input"
                            type="number"
                            id="amount"
                            value={amount}
                            onChange={handleAmountChange}
                            placeholder="Monto a transferir"
                            required
                        />
                    </div>
                    <div className="FormGroup">
                        <label className="Label" htmlFor="comment">Comentario</label>
                        <textarea
                            className="Textarea"
                            id="comment"
                            value={comment}
                            onChange={handleCommentChange}
                            placeholder="Comentario (opcional)"
                        ></textarea>
                    </div>
                    <button className="Button" type="submit" disabled={isLoading}>Enviar</button>
                    {error && <p className="Error">{error}</p>}
                    {isSuccess && <p className="Success">Transacción enviada con éxito</p>}
                </form>
            </div>
        </div>
    );
};