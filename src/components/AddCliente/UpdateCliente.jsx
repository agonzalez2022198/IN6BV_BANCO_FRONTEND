import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getUserById } from "../../services/api";
import toast from "react-hot-toast";
import "./updateCliente.css";

const UpdateCliente = () => {
    const location = useLocation();
    const id = location.state?.clienteId;
    const navigate = useNavigate();
    const [cliente, setCliente] = useState({
        name: "",
        userName: "",
        DPI: "",
        correo: "",
        celular: ""
    });

    useEffect(() => {
        const fetchCliente = async () => {
            try {
                const response = await getUserById(id);
                setCliente(response.data);
            } catch (error) {
                console.error("Error fetching client:", error);
            }
        };
        if (id) fetchCliente();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCliente(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateUser(id, cliente);
            toast.success("Cliente actualizado con éxito");
            navigate("/PrincipalAdminPage/verClientes");
        } catch (error) {
            console.error("Error updating client:", error);
            toast.error("Hubo un error al actualizar el cliente");
        }
    };

    return (
        <div className="update-cliente-container">
            <h1>Actualizar Cliente</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input
                        type="text"
                        name="name"
                        value={cliente.name}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Usuario:
                    <input
                        type="text"
                        name="userName"
                        value={cliente.userName}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    DPI:
                    <input
                        type="text"
                        name="DPI"
                        value={cliente.DPI}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Correo:
                    <input
                        type="email"
                        name="correo"
                        value={cliente.correo}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Celular:
                    <input
                        type="tel"
                        name="celular"
                        value={cliente.celular}
                        onChange={handleInputChange}
                    />
                </label>
                <button type="submit">Actualizar Cliente</button>
            </form>
        </div>
    );
};

export { UpdateCliente };
