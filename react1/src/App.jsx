import React, { useState } from 'react'
import './App.css'

export default function App() {
  const [data, setData] = useState([
    { id: 1, name: "Ahmad", age: 20 },
    { id: 2, name: "vali", age: 22 },
  ])

  const [idx, setIdx] = useState(null)
  const [addOpen, setAddOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)
  const [editName, setEditName] = useState("")
  const [editAge, setEditAge] = useState("")
  const [search, setSearch] = useState("")

  const handleDelete = (id) => {
    setData(data.filter((user) => user.id !== id))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newUser = {
      id: Date.now(),
      name: e.target.elements.name.value,
      age: Number(e.target.elements.age.value),
    }
    setData([...data, newUser])
    e.target.reset()
    setAddOpen(false)
  }

  const handleEditSubmit = (e) => {
    e.preventDefault()
    const newUser = {
      id: idx,
      name: editName,
      age: Number(editAge),
    }
    setData(data.map((user) => (user.id === idx ? newUser : user)))
    setEditOpen(false)
    setIdx(null)
  }
  const filteredData = data.filter((user) = user.name.toLowerCase().includes(search.toLowerCase().trim()))

  return (
    <div className="container">
      <input  className="search" type="text" placeholder="Search name..." value={search}  onChange={(ev) => setSearch(ev.target.value)} />

      <div className="add-block">
        <button className="btn add" onClick={() => setAddOpen(!addOpen)}>
          ADD
        </button>

        {addOpen ? (
          <form className="form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="age" placeholder="Age" />
            <button type="submit" className="btn save">Save</button>
          </form>
        ) : null}
      </div>

      {filteredData.length === 0 ? <p className="empty">Not found</p> : null}

      {filteredData.map((user) => {
        return (
          <div className="card" key={user.id}>
            <h1>Name: {user.name}</h1>
            <h2>Age: {user.age}</h2>

            <div className="actions">
              <button className="btn delete" onClick={() => handleDelete(user.id)}>
                Delete
              </button>
              <button
                className="btn edit"
                onClick={() => {
                  setEditOpen(true)
                  setEditName(user.name)
                  setEditAge(user.age)
                  setIdx(user.id)
                }} > Edit </button>
            </div>

            {editOpen && idx === user.id ? (
              <form className="form" onSubmit={handleEditSubmit}>
                <input value={editName} onChange={(ev) => setEditName(ev.target.value)} type="text" name="name"  />
               <input  value={editAge} onChange={(ev) => setEditAge(ev.target.value)} type="text"  name="age" />
                <button type="submit" className="btn save">Save</button>
              </form>   ) : null}
          </div> )  })}
    </div>
  )
}