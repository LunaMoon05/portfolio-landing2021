import './progressBar.scss'
import reactIcon from './react.svg'
import es6Icon from './javascript.svg'
export const ProgressBar = () => {
  return (
    <div className="progress">
      <div className="progress__text">React.js</div>
      <div className="progress__bar">
        <div className="progress__bar-icon">
          <img src={es6Icon} alt=""/>
        </div>
        <div className="progress__bar-line"></div>
      </div>
    </div>
  )
}