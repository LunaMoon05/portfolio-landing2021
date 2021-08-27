import './App.scss'
import 'animate.css'
import { Contacts } from './components/contacts/contacts'
import { Hobby } from './components/hobby/hobby'
import { Portfolio } from './components/portfolio/portfolio'
import { Preview } from './components/preview/preview'
import { Skills } from './components/skills/skills'
import { Social } from './components/social/social'
import { HashRouter } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
    <div className="App">
      <div className="load-screen animate__animated animate__delay-1s animate__bounceOutUp">
        <div className="load-screen__wrapper">
          <div className="load-screen__title animate__animated animate__bounceInRight">Привет! Добро пожаловать на мой сайт-визитку!</div>
        </div>
      </div>
      <div className="frame frame-left"></div>
      <div className="frame frame-top"></div>
      <div className="frame frame-right"></div>
      <div className="frame frame-bottom"></div>
      <Preview />
      <Skills />
      <Portfolio />
      <Hobby />
      <Social />
      <Contacts />
    </div>
    </HashRouter>
  )
}

export default App
