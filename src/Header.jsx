import React from 'react';

export function Header() {
  return (
    <header style={{
      backgroundColor: '#1b1b1b',
      color: '#fff',
      padding: '20px',
      textAlign: 'center',
      marginBottom: '20px',
      borderRadius: '8px'
    }}>
      <h1 style={{ margin: 0, fontSize: '1.8rem' }}>🇪🇹 Addis Eats Menu</h1>
      <p style={{ margin: '6px 0 0 0', opacity: 0.8 }}>Authentic Ethiopian Flavors</p>
    </header>
  );
}

export default Header;
