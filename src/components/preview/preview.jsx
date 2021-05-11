import './preview.scss'
import 'animate.css'
export const Preview = () => {
  return (
    <section className="preview">
      <div className="container">
        <div className="content-wrapper">
          <div className="icon preview__icon animate__animated animate__delay-2s animate__fadeIn"></div>
          <div className="line line-light animate__animated animate__delay-2s animate__fadeIn"></div>
          <h1 className="title preview__title animate__animated animate__delay-2s animate__backInDown">Степанов Михаил</h1>
          <h5 className="subtitle preview__subtitle animate__animated animate__delay-2s animate__backInDown animate__delay-1s">frontend-developer</h5>
          <p className="text preview__text animate__animated wow animate__backInLeft animate__delay-2s animate__delay-2s">Адаптивная &amp; семантичная разработка веб-приложений + ES6 + React.js + scss/less</p>
          <h5 className="subtitle preview__subtitle animate__animated animate__delay-2s animate__fadeIn animate__delay-3s">since 2020</h5>
        </div>
      </div>
    </section>
  )
}