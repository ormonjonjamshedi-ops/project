import React from 'react'

export default function Header() {
  return (
    <header className="custom-header">
      <div className="header-left">
        <img src="/Vector (8).png" alt="logo" className="header-logo" />
        <span className="header-title">
          Скидка 20% на первый заказ
        </span>
      </div>
      
      <div className="header-right">
        <span className="header-link">Заказать</span>
        <span className="header-arrow">→</span>
      </div>
    </header>
  )
}