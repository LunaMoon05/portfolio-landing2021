import './preview.scss'
export const Preview = () => {
  return (
    <section className="preview">
      <div className="container">
        <div className="content-wrapper">
          <div className="icon preview__icon"></div>
          <div className="line line-light"></div>
          <h1 className="preview__title">Степанов Михаил</h1>
          <h5 className="preview__subtitle">frontend-developer</h5>
          <p className="preview__text">Адаптивная &amp; семантичная разработка веб-приложений + scss/less + ES6 + React.js</p>
          <h5 className="preview__subtitle">since 2020</h5>
        </div>
      </div>
    </section>
  )
}