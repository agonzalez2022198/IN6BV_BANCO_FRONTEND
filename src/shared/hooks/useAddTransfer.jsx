import { useState } from 'react';
import { addTransfer } from '../../services/api';

const useTransfer = () => {
    const [accountt, setAccount] = useState('');
    const [accountRecibet, setAccountRecibe] = useState('');
    const [monto, setMonto] = useState('');
    const [comment, setComment] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSenderAccountChange = (e) => {
        setAccount(e.target.value);
    };

    const handleRecipientAccountChange = (e) => {
        setAccountRecibe(e.target.value);
    };

    const handleAmountChange = (e) => {
        setMonto(e.target.value);
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setIsSuccess(false);
        setIsLoading(true);

        const data = {
            accountt,
            accountRecibet,
            monto: Number(monto),
            comment
        };

        //console.log(data)

        try {
            const response = await addTransfer(data);
            if (response.error) {
                setError('Error al realizar la transacción.');
            } else {
                setIsSuccess(true);
                setAccount('');
                setAccountRecibe('');
                setMonto('');
                setComment('');
            }
        } catch (e) {
            console.error('Error al realizar la transacción:', e.response ? e.response.data : e.message);
            setError(e.response ? e.response.data : 'Error al realizar la transacción.');
        } finally {
            setIsLoading(false);
        }
    };

    return {
        accountt,
        accountRecibet,
        monto,
        comment,
        error,
        isLoading,
        isSuccess,
        handleSenderAccountChange,
        handleRecipientAccountChange,
        handleAmountChange,
        handleCommentChange,
        handleSubmit
    };
};

export default useTransfer;
