import './progressBar.scss'
import 'animate.css'
import WOW from 'wowjs'
import { useEffect } from 'react'

export const ProgressBar = ({tool, progress}) => {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  })
  return (
    <div className="tool">
      <div className="tool__text">{tool}</div>
      <div className="tool__bar"><div data-wow-offset="200" style={{width: progress}} className="tool__bar-line wow animate__animated animate__fadeInLeftBig">{progress}</div></div>
    </div>
  )
}