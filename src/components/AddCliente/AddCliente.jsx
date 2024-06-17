import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./addCliente.css";

export const AddCliente = () => {
    const navigate = useNavigate();
    const [currentPart, setCurrentPart] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        nickName: '',
        userName: '',
        password: '',
        role: 'USER_ROLE',
        DPI: '',
        location: '',
        celular: '',
        correo: '',
        monthlyIncome: '',
        credit: '',
        searches: '',
        state: true
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://your-api-endpoint.com/api/users', formData); // Reemplaza con tu URL de backend
            alert("Cliente registrado con éxito");
            navigate("/PrincipalAdminPage/verClientes");
        } catch (error) {
            console.error("Error registrando el cliente:", error);
            alert("Hubo un error al registrar el cliente");
        }
    };

    return(
        <div className="add-client-container">
            <h1>Add New Client To KIBANK</h1>
            <div className="form-navigation">
                <button 
                    className={`nav-button ${currentPart === 1 ? 'active' : ''}`} 
                    onClick={() => setCurrentPart(1)}
                >
                    Parte 1
                </button>
                <button 
                    className={`nav-button ${currentPart === 2 ? 'active' : ''}`} 
                    onClick={() => setCurrentPart(2)}
                >
                    Parte 2
                </button>
            </div>
            <form onSubmit={handleSubmit}>
                {currentPart === 1 && (
                    <div className="form-part">
                        <div>
                            <label>Nombre:</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>NickName:</label>
                            <input type="text" name="nickName" value={formData.nickName} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Username:</label>
                            <input type="text" name="userName" value={formData.userName} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Role:</label>
                            <select name="role" value={formData.role} onChange={handleChange}>
                                <option value="ADMIN_ROLE">ADMIN_ROLE</option>
                                <option value="USER_ROLE">USER_ROLE</option>
                            </select>
                        </div>
                    </div>
                )}
                {currentPart === 2 && (
                    <div className="form-part">
                        <div>
                            <label>DPI:</label>
                            <input type="text" name="DPI" value={formData.DPI} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Location:</label>
                            <input type="text" name="location" value={formData.location} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Celular:</label>
                            <input type="text" name="celular" value={formData.celular} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Correo:</label>
                            <input type="email" name="correo" value={formData.correo} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Monthly Income:</label>
                            <input type="number" name="monthlyIncome" value={formData.monthlyIncome} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Credit:</label>
                            <input type="number" name="credit" value={formData.credit} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Searches:</label>
                            <input type="text" name="searches" value={formData.searches} onChange={handleChange} />
                        </div>
                        <div>
                            <label>State:</label>
                            <input type="checkbox" name="state" checked={formData.state} onChange={(e) => setFormData({...formData, state: e.target.checked})} />
                        </div>
                    </div>
                )}
                <button type="submit">Registrar Cliente</button>
            </form>
        </div>
    );
};
