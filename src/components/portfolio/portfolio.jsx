import './portfolio.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import gamePhoto from './worksPhoto/game.png'
import commentariesPhoto from './worksPhoto/widgetCommentary.png'
import 'swiper/swiper.scss'
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation, Pagination]);

export const Portfolio = () => {
  let data = [{
    text: 'Игра "квадраты"',
    img: gamePhoto,
    link: 'https://github.com/LunaMoon05/gameSquares'
  },
  {
    text: 'Виджет комментариев',
    img: commentariesPhoto,
    link: 'https://github.com/LunaMoon05/skillbox-CommentsWidget'
  }]
  const slides = []
  data.forEach((item, i) => {
    slides.push((<SwiperSlide key={i}>
      <a target="_blank" className="portfolio__link" href={item.link} rel="noreferrer">
        <img src={item.img} alt="" />
      </a>
      <div className="portfolio__text">{item.text}</div>
    </SwiperSlide>))
  })
  return (
    <section className="portfolio">
      <div className="container">
        <div className="content-wrapper portfolio__content-wrapper">
          <div className="icon portfolio__icon"></div>
          <div className="line line-light"></div>
          <h1 className="title portfolio__title">Мое портфолио</h1>
          <h5 className="subtitle portfolio__subtitle">my best works</h5>
          <div className="portfolio__slider">
            <button className="prev" />
            <button className="next" />
            <div className="pagination"></div>
            <Swiper
              navigation={{
                prevEl: '.prev',
                nextEl: '.next',
              }} pagination={{
                el: '.pagination',
                clickable: true
              }} spaceBetween={20} id='main'>
              {slides}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}