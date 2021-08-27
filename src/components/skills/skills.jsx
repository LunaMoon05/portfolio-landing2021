import { ProgressBar } from './progressBar/progressBar'
import './skills.scss'
import 'animate.css'
import WOW from 'wowjs'
import { useEffect } from 'react'

export const Skills = () => {
    useEffect(() => {
      new WOW.WOW({
        live: false
      }).init();
    })
  return (
    <section className="skills">
      <div className="container">
        <div className="content-wrapper">
          <div data-wow-offset="450" className="icon skills__icon wow animate__animated animate__fadeIn"></div>
          <div data-wow-offset="400" className="line line-dark wow animate__animated animate__fadeIn"></div>
          <h1 data-wow-offset="350" className="title skills__title text preview__text wow animate__animated animate__backInDown">Мои навыки</h1>
          <h5 data-wow-offset="300" className="subtitle skills__subtitle wow animate__animated animate__backInLeft">my favourite tools</h5>
          <div data-wow-offset="200" className="skills__list wow animate__animated animate__fadeIn">
            <ProgressBar tool="HTML" progress="80%" />
            <ProgressBar tool="CSS(LESS/SCSS)" progress="73%" />
            <ProgressBar tool="JavaScript" progress="86%" />
            <ProgressBar tool="Redux" progress="52%" />
            <ProgressBar tool="React.js" progress="64%" />
            <ProgressBar tool="Wepback" progress="55%" />
          </div>
        </div>
      </div>
    </section>
  )
}