import React, { useState } from 'react';
import Modal from './Modal';

function App() {
  const [data, setData] = useState([
    { id: 1, name: 'Ali', surname: 'Sadiev', age: 21 },
    { id: 2, name: 'Vali', surname: 'Sabiev', age: 25 },
  ]);

  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [elemEdit, setElemEdit] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');


  const handleSubmitAdd = (event) => {
    event.preventDefault();

    const newUser = {
      id: Date.now(),
      name: event.target.name.value,
      surname: event.target.surname.value,
      age: Number(event.target.age.value),
    };

    setData((prev) => [...prev, newUser]);
    setOpenAdd(false);
    event.target.reset();
  };


  const handleEdit = (user) => {
    setElemEdit(user);
    setOpenEdit(true);
  };

  const handleSubmitEdit = (event) => {
    event.preventDefault();
    setData((prev) =>
      prev.map((e) => (e.id === elemEdit.id ? elemEdit : e))
    );
    setOpenEdit(false);
  };

  
  const handleDelete = (id) => {
    setData((prev) => prev.filter((user) => user.id !== id));
  };

  
  const filteredData = data.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.surname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
  
      <input
        type="text"
        placeholder="Search by name or surname..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          border: '2px solid grey',
          padding: '10px',
          width: '100%',
          marginBottom: '20px',
          borderRadius: '5px'
        }}
      />

      <button onClick={() => setOpenAdd(true)}>ADD +</button>

     
      {filteredData.map((user) => (
        <div key={user.id} style={{ borderBottom: '1px solid #ccc', marginBottom: '10px', paddingBottom: '10px' }}>
          <h1>Name: {user.name}</h1>
          <h2>Surname: {user.surname}</h2>
          <h3>Age: {user.age}</h3>
          <button onClick={() => handleEdit(user)}>Edit</button>
          <button onClick={() => handleDelete(user.id)} style={{ marginLeft: '10px' }}>Delete</button>
        </div>
      ))}

     
      <Modal open={openEdit} setOpen={setOpenEdit} title="Edit User">
        <form onSubmit={handleSubmitEdit} style={{ display: 'grid', gap: '10px' }}>
          <input
            value={elemEdit?.name || ''}
            onChange={(e) =>
              setElemEdit((prev) => ({ ...prev, name: e.target.value }))
            }
            name="name"
            placeholder="Name"
            style={{ border: '2px solid grey', padding: '10px' }}
            type="text"
            required
          />
          <input
            value={elemEdit?.surname || ''}
            onChange={(e) =>
              setElemEdit((prev) => ({ ...prev, surname: e.target.value }))
            }
            name="surname"
            placeholder="Surname"
            style={{ border: '2px solid grey', padding: '10px' }}
            type="text"
            required
          />
          <input
            value={elemEdit?.age || ''}
            onChange={(e) =>
              setElemEdit((prev) => ({ ...prev, age: Number(e.target.value) }))
            }
            name="age"
            placeholder="Age"
            style={{ border: '2px solid grey', padding: '10px' }}
            type="number"
            required
          />
          <button
            style={{
              border: '2px solid green',
              background: 'green',
              color: 'white',
              padding: '10px',
              cursor: 'pointer',
            }}
            type="submit"
          >
            Save
          </button>
        </form>
      </Modal>

      <Modal open={openAdd} setOpen={setOpenAdd}>
        <form onSubmit={handleSubmitAdd} style={{ display: 'grid', gap: '10px' }}>
          <input name="name" placeholder="Name" style={{ border: '2px solid grey', padding: '10px' }} type="text" required />
          <input name="surname" placeholder="Surname" style={{ border: '2px solid grey', padding: '10px' }} type="text" required />
          <input name="age" placeholder="Age" style={{ border: '2px solid grey', padding: '10px' }} type="number" required />
          <button style={{ border: '2px solid green', background: 'green', color: 'white', padding: '10px', cursor: 'pointer' }} type="submit">
            Save
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default App;