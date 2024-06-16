import React, { useState } from 'react';
import styled from 'styled-components';

const TransferContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #007bff, #343a40);
`;

const FormContainer = styled.div`
    width: 100%;
    max-width: 400px;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 16px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    border: 1px solid #e0e0e0;
`;

const Header = styled.h2`
    text-align: center;
    color: #343a40;
    margin-bottom: 20px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const FormGroup = styled.div`
    margin-bottom: 20px;
`;

const Label = styled.label`
    margin-bottom: 10px;
    color: #343a40;
    font-weight: bold;
`;

const Input = styled.input`
    padding: 15px;
    font-size: 18px;
    border-radius: 8px;
    border: 1px solid #6c757d;
    outline: none;
    color: #343a40;
`;

const Textarea = styled.textarea`
    padding: 15px;
    font-size: 18px;
    border-radius: 8px;
    border: 1px solid #6c757d;
    outline: none;
    color: #343a40;
`;

const Button = styled.button`
    padding: 15px 20px;
    font-size: 18px;
    border-radius: 8px;
    border: none;
    background-color: #007bff;
    color: #ffffff;
    cursor: pointer;
    align-self: center;
    margin-top: 10px;
`;

export const Transfer = () => {
    const [account, setAccount] = useState('');
    const [amount, setAmount] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario, como enviar los datos a un servidor
        console.log('Transacción enviada', { account, amount, comment });
    };

    return (
        <TransferContainer>
            <FormContainer>
                <Header>Realizar Transacción</Header>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="account">Cuenta a Acreditar</Label>
                        <Input
                            type="text"
                            id="account"
                            value={account}
                            onChange={(e) => setAccount(e.target.value)}
                            placeholder="Número de cuenta"
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="amount">Monto</Label>
                        <Input
                            type="number"
                            id="amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Monto a transferir"
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="comment">Comentario</Label>
                        <Textarea
                            id="comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Comentario (opcional)"
                        ></Textarea>
                    </FormGroup>
                    <Button type="submit">Enviar</Button>
                </Form>
            </FormContainer>
        </TransferContainer>
    );
};
