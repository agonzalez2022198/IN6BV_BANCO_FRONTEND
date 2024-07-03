import { useState } from 'react';
import { addTransfer } from '../../services/api.jsx';

const useTransfer = () => {
    const [account, setAccount] = useState('');
    const [amount, setAmount] = useState('');
    const [comment, setComment] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleAccountChange = (e) => setAccount(e.target.value);
    const handleAmountChange = (e) => setAmount(e.target.value);
    const handleCommentChange = (e) => setComment(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setIsSuccess(false);

        try {
            const response = await addTransfer({ account, amount, comment });
            if (response.error) {
                setError(response.e.message);
            } else {
                setIsSuccess(true);
                setAccount('');
                setAmount('');
                setComment('');
            }
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    };

    return {
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
    };
};

export default useTransfer;