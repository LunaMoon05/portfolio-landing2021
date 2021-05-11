import './contacts.scss'
import 'animate.css'
import WOW from 'wowjs'
import { useEffect } from 'react'

export const Contacts = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  })
  return (
    <section className="contacts">
      <div className="container">
        <div className="content-wrapper contacts__content-wrapper">
          <div data-wow-offset="150" className="icon contacts__icon wow animate__animated animate__fadeIn"></div>
          <div data-wow-offset="150" className="line line-dark wow animate__animated animate__fadeIn"></div>
          <h1 data-wow-offset="150" className="title contacts__title wow animate__animated animate__backInDown">Мои контакты</h1>
          <h5 data-wow-offset="150" className="subtitle contacts__subtitle wow animate__animated animate__backInLeft">get in touch</h5>
          <a data-wow-offset="100" href="mailto:mihailstepanov.stepanoff2015@yandex.ru" className="text contacts__text wow animate__animated animate__fadeIn">mihailstepanov.stepanoff2015@yandex.ru</a>
          <a data-wow-offset="0" href="tel:+79157014103" className="text contacts__text contacts__phone wow animate__animated animate__fadeIn">+7(915)-701-41-03</a>
        </div>
      </div>
    </section>
  )
}