import './preview.scss'
export const Preview = () => {
  return (
    <section className="preview">
      <div className="container">
        <div className="content-wrapper">
          <div className="icon preview__icon"></div>
          <div className="line line-light"></div>
          <h1 className="title preview__title">Степанов Михаил</h1>
          <h5 className="subtitle preview__subtitle">frontend-developer</h5>
          <p className="text preview__text">Адаптивная &amp; семантичная разработка веб-приложений + ES6 + React.js + scss/less</p>
          <h5 className="subtitle preview__subtitle">since 2020</h5>
        </div>
      </div>
    </section>
  )
}