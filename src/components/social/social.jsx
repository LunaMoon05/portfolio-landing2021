/* eslint-disable jsx-a11y/anchor-is-valid */
import './social.scss'
import { SocialItem } from './socialItem'
import vk from './socialNetworks/vk.svg'
import git from './socialNetworks/git.svg'
import tg from './socialNetworks/telegram.svg'

export const Social = () => {
  return (
    <section className="social">
      <div className="container">
        <div className="content-wrapper social__content-wrapper">
          <div className="icon social__icon"></div>
          <div className="line line-light"></div>
          <h1 className="title social__title">Мои соц. сети</h1>
          <h5 className="subtitle social__subtitle">social networks</h5>
          <div className="social__list">
            <SocialItem link="https://vk.com/id462487345" img={vk} bgColor={'#4d7198'} />
            <SocialItem link="https://github.com/LunaMoon05" img={git} bgColor={'#171515'} />
            <SocialItem link="https://github.com/LunaMoon05" img={tg} bgColor={'#08c'} />
          </div>
        </div>
      </div>
    </section>
  )
}