import './contacts.scss'

export const Contacts = () => {
  return (
    <section className="contacts">
      <div className="container">
        <div className="content-wrapper contacts__content-wrapper">
          <div className="icon contacts__icon"></div>
          <div className="line line-dark"></div>
          <h1 className="title contacts__title">Мои контакты</h1>
          <h5 className="subtitle contacts__subtitle">get in touch</h5>
          <a href="mailto:mihailstepanov.stepanoff2015@yandex.ru" className="text contacts__text">mihailstepanov.stepanoff2015@yandex.ru</a>
          <a href="tel:+79157014103" className="text contacts__text contacts__phone">+7(915)-701-41-03</a>
        </div>
      </div>
    </section>
  )
}