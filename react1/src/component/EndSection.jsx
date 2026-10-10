import React from 'react'

export default function EndSection() {
  return (
   
        <div className="footer-container">
     
      <div className="newsletter-box">
        <div className="newsletter-text">
          <h2>Будьте всегда в курсе!</h2>
          <p>📧 Подпишитесь на рассылку и будьте всегда в курсе новинок, акций и новостей!</p>
        </div>
        <div className="newsletter-form">
          <input type="email" placeholder="Укажите вашу почту" className="newsletter-input" />
          <button className="newsletter-btn">Подписаться</button>
        </div>
      </div>

      <div className="footer-main-info">
        <div className="contact-info">
          <div className="footer-phone">+7 988 500-1-700</div>
          <div className="footer-time">Ежедневно с 09:00 до 21:00</div>
        </div>

        <div className="footer-email">
          hello@pora-poest.com
        </div>

        <div className="social-icons">
          <div className="social-icon"></div>
          <div className="social-icon"></div>
          <div className="social-icon">📷</div>
        </div>
      </div>

      <div className="footer-address">
        ООО «ПораПоесть», г. Краснодар, ул. Кубанская Набережная улица, дом 5, офис 4
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">
          <p>© 2021 ПораПоесть — сервис доставки прогрессивного питания.</p>
          <p className="footer-disclaimer">
            Фотографии блюд на сайте являются вариантом сервировки блюда. Внешний вид блюда может отличаться от фотографии на сайте.<br />
            Указывая электронную почту и номер телефона на сайте, вы соглашаетесь с условиями <a href="#">Публичной оферты</a> и <a href="#">Политикой конфиденциальности</a>
          </p>
        </div>

        <div className="payment-icons">
          <span className="pay-badge">VISA</span>
          <span className="pay-badge">mastercard</span>
          <span className="pay-badge">МИР</span>
          <span className="pay-badge"> Pay</span>
          <span className="pay-badge">G Pay</span>
        </div>
      </div>
    </div>
   
  )
}
