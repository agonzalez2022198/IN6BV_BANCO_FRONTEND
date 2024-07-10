import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserById } from "../../services/api";
import { useEditClient } from "../../shared/hooks/useEditUser.jsx";
import "./updateCliente.css";

const UpdateCliente = () => {
    const id = localStorage.getItem('clienteId');
    const navigate = useNavigate();
    const [cliente, setCliente] = useState({
        name: "",
        userName: "",
        DPI: "",
        correo: "",
        celular: ""
    });
    const [loading, setLoading] = useState(true);

    const { editClient, loading: editLoading, error } = useEditClient();

    useEffect(() => {
        const fetchCliente = async () => {
            try {
                const response = await getUserById(id);
                console.log("Datos del cliente:", response.data);
                setCliente(response.data.user);
                setLoading(false);
            } catch (error) {
                console.error("Error al obtener cliente:", error);
                setLoading(false);
            }
        };
        if (id) fetchCliente();
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCliente((prevCliente) => ({
            ...prevCliente,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Previene el comportamiento predeterminado del formulario
        console.log("Se actualiza esto:", cliente);
        const responses = await editClient(cliente);
        if (responses.error) {
            console.error("Error al actualizar el cliente:", responses.error);
        } else {
            window.alert("Actualizado");
            console.log("Cliente actualizado con éxito:", responses);
            
        }
    };

    return (
        <div className="update-cliente-container">
            <h1>Actualizar Cliente</h1>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label>
                        Nombre:
                        <input
                            type="text"
                            name="name"
                            value={cliente.name}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Usuario:
                        <input
                            type="text"
                            name="userName"
                            value={cliente.userName}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        DPI:
                        <input
                            type="text"
                            name="DPI"
                            value={cliente.DPI}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Correo:
                        <input
                            type="email"
                            name="correo"
                            value={cliente.correo}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Celular:
                        <input
                            type="tel"
                            name="celular"
                            value={cliente.celular}
                            onChange={handleChange}
                        />
                    </label>
                    <button type="submit" disabled={editLoading}>Actualizar Cliente</button>
                    {error && <p>Error al actualizar el cliente. Inténtalo de nuevo.</p>}
                </form>
            )}
        </div>
    );
};

export { UpdateCliente };