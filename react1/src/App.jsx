
import './App.css'
import React, { useState } from 'react'
import Header from './component/Header' 
import Section from './component/Seaction' 
import Section2 from './component/Section2'
import Section4 from './component/Section4'
import Carta from './component/Carta'
import EndSection from './component/EndSection'
import Modal from './component/Modal'

function App() {
 const [data, setData] = useState([
    {
      id: 1,
      image: '/image_1_1.png',
      name: 'Sup',
      prise: 300,
      status: false
    },
    {
      id: 2,
      image: '/Mask Group (16).png',
      name: 'Book',
      prise: 150,
      status: false
    }
  ])

  const [openAdd, setOpenAdd] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const [elemEdit, setElemEdit] = useState(null)
  const [openInfo, setOpenInfo] = useState(false)
const [elemInfo, setElemInfo] = useState(null)
  const [search, setSearch] = useState('')

  const handleSubmitAdd = (event) => {
    event.preventDefault()

    const newUser = {
      id: Date.now(),
      image: event.target.image.value,
      name: event.target.name.value,
      prise: Number(event.target.prise.value),
      status: false
    }

    setData((prev) => [...prev, newUser])
    setOpenAdd(false)
    event.target.reset()
  }

  const handleSubmitEdit = (event) => {
    event.preventDefault()

    setData((prev) =>prev.map((e) =>e.id === elemEdit.id ? elemEdit : e))
    setOpenEdit(false)
    setElemEdit(null)
  }

  const handleDelete = (id) => {
    setData((prev) =>
      prev.filter((e) => e.id !== id)
    )
  }

  const handleEdit = (e) => {
    setElemEdit({ ...e })
    setOpenEdit(true)
  }

  const handleCheck = (id) => {
    setData((prev) =>prev.map((e) =>e.id === id? { ...e, status: !e.status }: e
     )
    )
  }
  const handleInfo = (e) => {
  setElemInfo(e)
  setOpenInfo(true)
}
     
  const filteredData = data.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <div>
        <Header />
      </div>
      <div className='divManu'>
        <img src="../public/Group 161.png" alt="" />
        <div className='divManu1'>
 <p>Подбор рациона</p>
  <p>Программы питания</p>
     <p>О нас</p>
         <p>Доставка</p>
  <p>Акции</p>
          <p>FAQ</p>
    <p>Отзывы</p>
    
        </div>
        <div className='divManu2'>
          <h6 style={{height:"0.5px"}}>Перезвоните мне</h6>
        <h3 >+7 988 500-1-700</h3>
        
        </div>
      </div>
      <div className='divSectoin1'>
      <div className='divSection1div'>
        <h1 style={{fontSize:"60px"}}>Доставка прогрессивного
питания для гурманов</h1>
<div className='divButton' >
<button style={{width:"250px", height:"60px", borderRadius:"20px", border:"none", backgroundColor:"green", color:"white"}}>Подобрать питание</button>
<button style={{width:"250px", height:"60px", borderRadius:"20px",border:"none", color:"green" }}>Получить консультаци</button>
  
</div>
      </div>
      <img src="/porapoest-top 1.png" alt="" />
      </div>
   <div>
    <Section/>
   </div>

   <div>
   <Section2/>
   </div>
   <div className='divButton'>
    <button>понедельник</button>
    <button>вторник</button>
    <button>четверг</button>
    <button>пятница</button>
    <button>суббота</button>
    <button>воскресенье</button>
   </div>
   <div className='divAmagefood'>
   <div className='divAmagefoodaa'>
    <img src="/image_1_1.png" alt="" />
    <h2>Утренний боул с перепелиным яйцом, киноа и лососем</h2>
   </div>

   <div className='divAmagefoodaa'>
    <img src="/image_1_1.png" alt="" />
    <h2>Боул с куриными фрикадельками в кунжуте, брокколи и миндальным соусом</h2>
   </div>
   <div className='divAmagefoodaa'>
    <img src="/image_1_1.png" alt="" />
    <h2>Кукурузные блинчики с кокосовым припеком и фруктовым тар-таром</h2>
   </div >
   <div  className='divAmagefoodaa'>
    <img src="/image_1_1.png" alt="" />
    <h2>Морепродукты в соусе Гарсия со стручковой фасолью</h2>
   </div>
   
   </div><div>
    <Section4/>
   </div>
   <div>
    <Carta/>
   </div>
   <div>
    <EndSection/>
   </div>
<div className="app">
      <h1 className="title">Product Shop</h1>

      <div className="top">
        <input type="text"placeholder="Search product..." value={search} onChange={(e) => setSearch(e.target.value)} className="search"/>

        <button className="addBtn" onClick={() => setOpenAdd(true)} > Add +</button>
      </div>

      <div className="productGrid">
        {filteredData.map((e) => (
          <div className="productCard" key={e.id}>
            <img className="productImage" src={e.image} alt={e.name}/>
              <h2>{e.name}</h2>
              <p className="price">Price: {e.prise} TJS </p>

     <label className="check">
         <input type="checkbox" checked={e.status}onChange={() => handleCheck(e.id)}/>Selected
     </label>
            
     <div className="actions">
              <button className="editBtn" onClick={() => handleEdit(e)}>Edit</button>
                <button className="deleteBtn" onClick={() => handleDelete(e.id)}>Delete</button>
                <button className="infoBtn" onClick={() => handleInfo(e)}>Info</button>
              </div>
        </div>
             ))}
      </div>

      <Modal open={openAdd} setOpen={setOpenAdd}  title="Add" > 
        <form onSubmit={handleSubmitAdd} className="productForm" >
          <input name="image" placeholder="Image URL..." type="text" required  />
          <input  name="name" placeholder="Product name..." type="text" required />
          <input  name="prise"  placeholder="Price..."  type="number"   required />
          <button type="submit" className="saveBtn">Save </button>
        </form>
      </Modal>

      <Modal   open={openEdit}  setOpen={setOpenEdit} title="Edit" >
        <form onSubmit={handleSubmitEdit}  className="productForm" >
          <input name="image"  value={elemEdit?.image} onChange={(e) => setElemEdit((prev) => ({ ...prev,image: e.target.value }))
            } placeholder="Image URL..." type="text" required />
          <input   name="name" value={elemEdit?.name} onChange={(e) => setElemEdit((prev) => ({...prev,name: e.target.value }))  }  placeholder="Product name..." required/>
          <input  name="prise" value={elemEdit?.prise } onChange={(e) =>  setElemEdit((prev) => ({...prev, prise: Number(e.target.value)}))  } placeholder="Price..."type="number" required />
          <button type="submit" className="saveBtn"> Save</button>  
        </form>
      </Modal>
      <Modal
  open={openInfo}
  setOpen={setOpenInfo}
  title="Info"
>
  {elemInfo && (
    <div className="infoContent">
      <img src={elemInfo.image} alt={elemInfo.name} className="infoImage" />
      <h2>{elemInfo.name}</h2>
      <p>  <strong>Price:</strong> {elemInfo.prise} TJS </p>
      <p> <strong>Status:</strong>{' '}{elemInfo.status ? 'Selected' : 'Not selected'}</p>
      <button className="infoCloseBtn" onClick={() => setOpenInfo(false)} >Close </button>
    </div>
  )}
</Modal>
    </div>
    </>
  )
}

export default App