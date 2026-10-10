import React from 'react'

export default function Section2() {
  return (
    <div className="main-container">
      
      <div className="diet-box">
        <h2>Подберите рацион для своих целей</h2>
        
        <div className="form-row">
          <div className="input-group">
            <label>Пол</label>

            <div className="gender-switch">
              <button className="gender-btn active">Ж</button>
              <button className="gender-btn">М</button>
            </div>
          </div>
          <div className="input-group">

            
            <label>Ваш вес</label>
            <input type="text" placeholder="Ваш вес" />
          </div>
          <div className="input-group">
            <label>Ваш рост</label>
            <input type="text" placeholder="Ваш рост" />
          </div>
          <div className="input-group">
            <label>Ваш возраст</label>
            <input type="text" placeholder="Ваш возраст" />
          </div>
          <div className="input-group">
            <label>Активность</label>
            <select>
             <option>Активность</option>
              <option>Актив</option>
                 <option>NeАктив</option>
            </select>
          </div>
          <div className="input-group">
            <label>Выберите цель</label>
            <select>
              <option>Выберите цель</option>

            
            </select>
          </div>
          <button className="submit-btn">Рассчитать рацион</button>
        </div>
      </div>
     
    <div className="box">
        
      <div className="title"><h1>Программа ПремиумБоул</h1>
        <p>Калорийность</p></div>
      
      <div className="card-container">
        <div className="card">
          <div className="card-title">900 ккал</div>
          <div className="card-text">3 блюда</div>
        </div>

        <div className="card active">
          <div className="card-title">1250 ккал</div>
          <div className="card-text">4 блюда</div>
        </div>

        <div className="card">
          <div className="card-title">1600 ккал</div>
          <div className="card-text">5 блюд</div>
        </div>

        <div className="card">
          <div className="card-title">2050 ккал</div>
          <div className="card-text">6 блюд</div>
        </div>
      </div>
<br />
<br />
   <div className="title">
        <p>Продолжительность</p></div>
      <div className="card-container">
        <div className="card">
          <div className="card-title">Пробные 2 дня</div>
          <div className="card-text">16 блюд</div>
        </div>

        <div className="card active">
          <div className="card-title">2 недели</div>
          <div className="card-text">5 блюд</div>
        </div>

        <div className="card">
          <div className="card-title">3 недели</div>
          <div className="card-text">5 блюд</div>
        </div>

        <div className="card">
          <div className="card-title">4 недели</div>
          <div className="card-text">6 блюд</div>
        </div>
      </div>
    </div>
  
    </div>
  )
}
