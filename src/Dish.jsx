import React from 'react';

export function Dish({ name, price }) {
  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '12px',
      display: 'flex',
      justify: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    }}>
      <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#333' }}>{name}</h3>
      <span style={{ fontWeight: 'bold', color: '#007bff' }}>
        {price} ETB
      </span>
    </div>
  );
}

export default Dish;
