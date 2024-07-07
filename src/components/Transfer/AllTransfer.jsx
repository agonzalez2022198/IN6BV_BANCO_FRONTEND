import React from 'react';
import './allTransfer.css';
import { useGetTransfer } from '../../shared/hooks/useGetTransfer';

export const TransferList = () => {
  const { transfers, loading, error } = useGetTransfer();

  if (loading) {
    return <div>Cargando transferencias...</div>;
  }

  if (error) {
    return <div>Error al cargar transferencias: {error.message}</div>;
  }

  return (
    <div className="transfer-list">
      <h2>Transferencias</h2>
      <table>
        <thead>
          <tr>
            <th>Cuenta</th>
            <th>Monto</th>
            <th>Fecha</th>
            <th>Revertido</th>
            <th>Usuario</th>
            <th>Cuenta Recibe</th>
            <th>Comentario</th>
          </tr>
        </thead>
        <tbody>
          {transfers.map((transfer) => (
            <tr key={transfer._id}>
              <td>{transfer.account}</td>
              <td>{transfer.monto}</td>
              <td>{new Date(transfer.date).toLocaleDateString()}</td>
              <td>{transfer.revertido ? 'Sí' : 'No'}</td>
              <td>{transfer.idUser}</td>
              <td>{transfer.accountRecibe}</td>
              <td>{transfer.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
