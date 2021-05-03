import './progressBar.scss'
export const ProgressBar = ({tool, progress}) => {
  return (
    <div className="tool">
      <div className="tool__text">{tool}</div>
      <div className="tool__bar"><div style={{width: progress}} className="tool__bar-line">{progress}</div></div>
    </div>
  )
}