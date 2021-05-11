import './portfolio.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import gamePhoto from './worksPhoto/game.png'
import commentariesPhoto from './worksPhoto/widgetCommentary.png'
import 'swiper/swiper.scss'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import 'swiper/components/navigation/navigation.scss'
import 'animate.css'
import WOW from 'wowjs'
import { useEffect } from 'react'

SwiperCore.use([Navigation, Pagination]);

export const Portfolio = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  })
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
          <div data-wow-offset="400" className="icon portfolio__icon wow animate__animated animate__fadeIn"></div>
          <div data-wow-offset="400" className="line line-light wow animate__animated animate__fadeIn"></div>
          <h1 data-wow-offset="400" className="title portfolio__title wow animate__animated animate__backInDown">Мое портфолио</h1>
          <h5 data-wow-offset="400" className="subtitle portfolio__subtitle wow animate__animated animate__backInLeft">my best works</h5>
          <div data-wow-offset="400" className="portfolio__slider wow animate__animated animate__fadeIn">
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