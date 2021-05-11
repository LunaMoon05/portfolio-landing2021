/* eslint-disable jsx-a11y/anchor-is-valid */
import './social.scss'
import { SocialItem } from './socialItem'
import vk from './socialNetworks/vk.svg'
import git from './socialNetworks/git.svg'
import tg from './socialNetworks/telegram.svg'
import 'animate.css'
import WOW from 'wowjs'
import { useEffect } from 'react'

export const Social = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  })
  return (
    <section className="social">
      <div className="container">
        <div className="content-wrapper social__content-wrapper">
          <div data-wow-offset="350" className="icon social__icon wow animate__animated animate__fadeIn"></div>
          <div data-wow-offset="350" className="line line-light wow animate__animated animate__fadeIn"></div>
          <h1 data-wow-offset="350" className="title social__title wow animate__animated animate__backInDown">Мои соц. сети</h1>
          <h5 data-wow-offset="350" className="subtitle social__subtitle wow animate__animated animate__backInLeft">social networks</h5>
          <div data-wow-offset="350" className="social__list wow animate__animated animate__fadeIn">
            <SocialItem link="https://vk.com/id462487345" img={vk} bgColor={'#4d7198'} />
            <SocialItem link="https://github.com/LunaMoon05" img={git} bgColor={'#171515'} />
            <SocialItem link="https://t.me/Luna_Moon" img={tg} bgColor={'#08c'} />
          </div>
        </div>
      </div>
    </section>
  )
}