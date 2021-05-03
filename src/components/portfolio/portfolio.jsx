import './portfolio.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import gamePhoto from './worksPhoto/game.png'
import commentariesPhoto from './worksPhoto/widgetCommentary.png'
import 'swiper/swiper.scss'

export const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="container">
        <div className="content-wrapper">
          <div className="icon portfolio__icon"></div>
          <div className="line line-light"></div>
          <h1 className="portfolio__title">Мое портфолио</h1>
          <h5 className="portfolio__subtitle">my best works</h5>
          <div className="portfolio__slider">
            <Swiper
              spaceBetween="20"
              slidesPerView="2"
            >
              <SwiperSlide>
                <a target="_blank" className="portfolio__link" href="https://github.com/LunaMoon05/gameSquares" rel="noreferrer"><img src={gamePhoto} alt="" /></a>
                <div className="portfolio__text">Игра "квадраты"</div>
              </SwiperSlide>
              <SwiperSlide>
                <a target="_blank" className="portfolio__link" href="https://github.com/LunaMoon05/skillbox-CommentsWidget" rel="noreferrer"><img src={commentariesPhoto} alt="" /></a>
                <div className="portfolio__text">Виджет комментариев</div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}