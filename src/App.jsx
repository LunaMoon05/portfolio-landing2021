import './App.scss'
import { Hobby } from './components/hobby/hobby'
import { Portfolio } from './components/portfolio/portfolio'
import {Preview} from './components/preview/preview'
import { Skills } from './components/skills/skills'
import { Social } from './components/social/social'
function App() {
  return (
    <div className="App">
      <div className="frame frame-left"></div>
      <div className="frame frame-top"></div>
      <div className="frame frame-right"></div>
      <div className="frame frame-bottom"></div>
      <Preview />
      <Skills />
      <Portfolio />
      <Hobby />
      <Social />
    </div>
  )
}

export default App
