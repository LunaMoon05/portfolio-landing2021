import './hobby.scss'

export const Hobby = () => {
  return (
    <section className="hobby">
      <div className="container">
        <div className="content-wrapper hobby__content-wrapper">
          <div className="icon hobby__icon"></div>
          <div className="line line-light"></div>
          <h1 className="title hobby__title">Мое хобби</h1>
          <h5 className="subtitle hobby__subtitle">stuff i like</h5>
          <p className="text hobby__text">Увлекаюсь шахматами и кинематографом</p>
        </div>
      </div>
    </section>
  )
}