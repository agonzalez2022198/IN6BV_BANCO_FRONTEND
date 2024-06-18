import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useGetUser } from "../../shared/hooks/useGetUser";
import "./verCliente.css";

export const VerClientes = () => {
    const { userD: clientes, isFetching, getUser } = useGetUser();
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredClientes, setFilteredClientes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);

    useEffect(() => {
        getUser(); 
    }, []);

    useEffect(() => {
        console.log("Clientes: ", clientes);
    
        if (clientes.length > 0) {
            const results = clientes.filter(cliente =>
                cliente.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                cliente.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                cliente.DPI.toLowerCase().includes(searchTerm.toLowerCase())
            );
    
            console.log("Filtered Results: ", results);
            setFilteredClientes(results);
            setCurrentPage(1);
        }
    }, [searchTerm, clientes]);
    

    const handleEdit = (id) => {
        console.log(`Editar cliente con ID: ${id}`);
    };

    const handleDelete = async (id) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar este cliente?")) {
            try {
                await axios.delete(`http://your-api-endpoint.com/api/users/${id}`); // Reemplaza con tu URL de backend
                setFilteredClientes(filteredClientes.filter(cliente => cliente._id !== id));
                toast.success("Cliente eliminado con éxito");
            } catch (error) {
                console.error("Error deleting client:", error);
                toast.error("Hubo un error al eliminar el cliente");
            }
        }
    };

    if (isFetching) {
        return <div>Cargando...</div>;
    }

    const totalPages = Math.ceil(filteredClientes.length / itemsPerPage);

    const indexOfLastCliente = currentPage * itemsPerPage;
    const indexOfFirstCliente = indexOfLastCliente - itemsPerPage;
    const currentClientes = filteredClientes.slice(indexOfFirstCliente, indexOfLastCliente);

    console.log("Current Page: ", currentPage);
    console.log("Current Clients: ", currentClientes);
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
                    {currentClientes.length > 0 ? (
                        currentClientes.map(cliente => (
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
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6">No se encontraron clientes</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="pagination">
                <button
                    onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Anterior
                </button>
                <span>Página {currentPage} de {totalPages}</span>
                <button
                    onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
};
