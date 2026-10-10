import React from 'react'

export default function Section4() {
  return (
    <div>
        <div className="service-container">

      <h2 className="service-main-title">О нашем сервисе</h2>

      
      <div className="service-grid">
        <div className="service-card">
          <div className="service-icon">👨‍🍳</div>
          <div className="service-card-title">Мы используем деликатные технологии приготовления блюд</div>
          <div className="service-card-text">Сухой гриль без прямого контакта продукта с жарочной поверхностью, запекание, су-вид</div>
        </div>

        <div className="service-card">
          <div className="service-icon">📋</div>
          <div className="service-card-title">Меню из 90 блюд на две недели без повтора</div>
          <div className="service-card-text">Сбалансированные блюда, содержащие в себе все необходимые элементы за счёт большого количества компонентов</div>
        </div>

        <div className="service-card">
          <div className="service-icon">🏆</div>
          <div className="service-card-title">Здоровые рецепты</div>
          <div className="service-card-text">Без молочки, белой муки, сахара, консервантов, усилителей вкуса и глубокой прожарки. А также мы используем сыродавленные масла собственного производства</div>
        </div>

        <div className="service-card">
          <div className="service-icon">💰</div>
          <div className="service-card-title">Гарантия возврата</div>
          <div className="service-card-text">100%-ная гарантия возврата денежных средств за предоплаченные дни, если что-то не понравилось в течение первой недели</div>
        </div>

        <div className="service-card">
          <div className="service-icon">📦</div>
          <div className="service-card-title">Контроль температуры</div>
          <div className="service-card-text">Все курьеры оснащены сумками-холодильниками, что позволяет сохранять температурный режим от 2°C до 4°C от кухни до ваших рук</div>
        </div>

        <div className="service-card">
          <div className="service-icon">🌿</div>
          <div className="service-card-title">Забота о природе</div>
          <div className="service-card-text">Все блюда доставляем в экоупаковке из крафтового картона со столовыми приборами из кукурузного крахмала</div>
        </div>
      </div>

      
      <div className="promo-section">
        <div className="promo-text-content">
          <h3 className="promo-title">
            Попробуйте новый формат рационов — Боулы!<br />
            Это богатый набор полезных веществ и масса вкусовых впечатлений!
          </h3>
          <p className="promo-desc">
            Боулы — это сбалансированный вариант блюда, содержащего в себе все необходимые элементы за счёт большого количества компонентов. Ингредиенты блюда не смешиваются между собой, а не спеша поедаются по отдельности.
          </p>
          <p className="promo-desc">
            Мы готовим полноценное здоровое питание на день и ежедневно доставляем утром к вашим дверям.
          </p>
          <p className="promo-desc">
            Наш сервис помогает экономить время, поддерживать стройность, работоспособность и укреплять здоровье.
          </p>
        </div>

        <div className="promo-slider-container">
          <button className="slider-btn left-btn">←</button>
          <div className="slider-image-card">
        
            <img src="/Mask Group (16).png" alt="Боулы" className="slider-img" />
          </div>
          <button className="slider-btn right-btn">→</button>
        </div>
      </div>
    </div>
    </div>
  )
}
