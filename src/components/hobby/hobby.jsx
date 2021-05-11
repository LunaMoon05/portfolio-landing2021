import './hobby.scss'
import 'animate.css'
import WOW from 'wowjs'
import { useEffect } from 'react'

export const Hobby = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  })
  return (
    <section className="hobby">
      <div className="container">
        <div className="content-wrapper hobby__content-wrapper">
          <div data-wow-offset="400" className="icon hobby__icon wow animate__animated animate__fadeIn"></div>
          <div data-wow-offset="400" className="line line-light wow animate__animated animate__fadeIn"></div>
          <h1 data-wow-offset="350" className="title hobby__title wow animate__animated animate__backInDown">Мое хобби</h1>
          <h5 data-wow-offset="350" className="subtitle hobby__subtitle wow animate__animated animate__backInLeft">stuff i like</h5>
          <p data-wow-offset="350" className="text hobby__text wow animate__animated animate__fadeIn">Увлекаюсь шахматами и кинематографом</p>
        </div>
      </div>
    </section>
  )
}