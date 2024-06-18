import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getAllUsers } from "../../services/api";
import "./verCliente.css";

export const VerClientes = () => {
    const [clientes, setClientes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredClientes, setFilteredClientes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchClientes = async () => {
            setIsLoading(true);
            const response = await getAllUsers();
            if (response.error) {
                toast.error("Error fetching clients: " + (response.error.response?.data || response.error.message));
            } else {
                setClientes(response);
                setFilteredClientes(response);
            }
            setIsLoading(false);
        };

        fetchClientes();
    }, []);

    useEffect(() => {
        const results = clientes.filter(cliente =>
            cliente.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cliente.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cliente.DPI.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredClientes(results);
    }, [searchTerm, clientes]);

    const handleEdit = (id) => {
        // Aquí puedes redirigir al usuario a una página de edición o abrir un modal
        console.log(`Editar cliente con ID: ${id}`);
    };

    const handleDelete = async (id) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar este cliente?")) {
            try {
                await axios.delete(`http://your-api-endpoint.com/api/users/${id}`); // Reemplaza con tu URL de backend
                setClientes(clientes.filter(cliente => cliente._id !== id));
                setFilteredClientes(filteredClientes.filter(cliente => cliente._id !== id));
                toast.success("Cliente eliminado con éxito");
            } catch (error) {
                console.error("Error deleting client:", error);
                toast.error("Hubo un error al eliminar el cliente");
            }
        }
    };

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="ver-clientes-container">
            <h1>Clientes de KIBANK</h1>
            <input
                type="text"
                placeholder="Buscar por nombre, usuario o DPI"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <table className="clientes-table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Usuario</th>
                        <th>DPI</th>
                        <th>Email</th>
                        <th>Celular</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredClientes.map(cliente => (
                        <tr key={cliente._id}>
                            <td>{cliente.name}</td>
                            <td>{cliente.userName}</td>
                            <td>{cliente.DPI}</td>
                            <td>{cliente.correo}</td>
                            <td>{cliente.celular}</td>
                            <td>
                                <button className="edit-button" onClick={() => handleEdit(cliente._id)}>Editar</button>
                                <button className="delete-button" onClick={() => handleDelete(cliente._id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
