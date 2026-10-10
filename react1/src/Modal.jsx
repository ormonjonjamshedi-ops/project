
import React from 'react';

export default function Modal({ open, setOpen, children }) {
  if (!open) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, background: 'rgba(0, 0, 0, 0.5)', width: '100%', height: '100%', zIndex: 1000 }}>
      <div style={{ background: 'white', width: '400px', padding: '20px', margin: '150px auto 0 auto', borderRadius: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ margin: 0 }}>Add User</h2>
          <button onClick={() => setOpen(false)} style={{ cursor: 'pointer', color: 'red', border: 'none', background: 'transparent', fontSize: '20px' }}>
            X
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}