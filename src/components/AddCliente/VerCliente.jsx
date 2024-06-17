import React, { useState, useEffect } from "react";
import axios from "axios";
import "./verCliente.css";

export const VerClientes = () => {
    const [clientes, setClientes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredClientes, setFilteredClientes] = useState([]);

    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const response = await axios.get('http://your-api-endpoint.com/api/users'); // Reemplaza con tu URL de backend
                setClientes(response.data);
                setFilteredClientes(response.data);
            } catch (error) {
                console.error("Error fetching clients:", error);
            }
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
