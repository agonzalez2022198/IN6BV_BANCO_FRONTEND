import React from 'react';
import './transfer.css';
import useTransfer from '../../shared/hooks/useAddTransfer.jsx';

export const Transfer = () => {
    const {
        account,
        accountRecibe,
        monto,
        comment,
        error,
        isLoading,
        isSuccess,
        handleSenderAccountChange,
        handleRecipientAccountChange,
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
                        <label className="Label" htmlFor="senderAccount">Cuenta de Envío</label>
                        <input
                            className="Input"
                            type="text"
                            id="senderAccount"
                            value={account}
                            onChange={handleSenderAccountChange}
                            placeholder="Número de cuenta de envío"
                            required
                        />
                    </div>
                    <div className="FormGroup">
                        <label className="Label" htmlFor="recipientAccount">Cuenta a Acreditar</label>
                        <input
                            className="Input"
                            type="text"
                            id="recipientAccount"
                            value={accountRecibe}
                            onChange={handleRecipientAccountChange}
                            placeholder="Número de cuenta a acreditar"
                            required
                        />
                    </div>
                    <div className="FormGroup">
                        <label className="Label" htmlFor="amount">Monto</label>
                        <input
                            className="Input"
                            type="number"
                            id="amount"
                            value={monto}
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
