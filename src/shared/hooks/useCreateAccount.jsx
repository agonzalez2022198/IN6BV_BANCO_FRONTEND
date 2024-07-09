import { useState, useEffect } from "react";
import { addAccount } from "../../services/api"; 

export const useCreateAccount = () => {
    const [formData, setFormData] = useState({
        accountNumber: "",
        typeAccount: "",
        dpi: "",
        money: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);
    const [submitSuccess, setSubmitSuccess] = useState(null);

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
        setSubmitError(null);
        setSubmitSuccess(null);

        try {
            const response = await addAccount(formData);
            if (response.error) {
                throw new Error(response.e.message);
            }
            setSubmitSuccess(response.data);
        } catch (error) {
            setSubmitError(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        if (submitError) {
            console.error("Error en la creación de la cuenta:", submitError);
        }
    }, [submitError]);

    return {
        formData,
        isSubmitting,
        submitError,
        submitSuccess,
        handleChange,
        handleSubmit
    };
};
