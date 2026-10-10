import React from 'react'

export default function Carta() {
  return (
    <div><div className="delivery-container">

      <h2 className="delivery-title">Карта доставки</h2>
      <p className="delivery-subtitle">
        Доставка осуществляется каждый день с 06:00 до 12:00.<br />
        Выбор интервала — 2 часа.
      </p>

      <div className="delivery-content">
     
        <div className="map-box">
          <img src="/image 2.png" alt="Карта доставки" className="map-image" />
        </div>
        <div className="delivery-sidebar">
          <div className="delivery-card green-border">
            <span>По городу бесплатно</span>
          </div>

          <div className="delivery-card blue-border">
            <span>Пригород 25 км — 100 ₽</span>
          </div>

          <div className="delivery-card yellow-border">
            <span>Пригород 35 км — 300 ₽</span>
          </div>

          <div className="delivery-card red-border">
            <span>Пригород 50 км — 500 ₽</span>
          </div>

          <div className="delivery-info-text">
            Уточните стоимость и время доставки
          </div>

          <div className="delivery-phone">
            +7 988 500-1-700
            <span className="phone-time">с 09:00 до 21:00</span>
          </div>

          <button className="callback-btn">Перезвоните мне</button>
        </div>
      </div>
    </div></div>
  )
}
