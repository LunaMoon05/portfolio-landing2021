import { ProgressBar } from './progressBar/progressBar'
import './skills.scss'
export const Skills = () => {
  return (
    <section className="skills">
      <div className="container">
        <div className="content-wrapper">
          <div className="icon skills__icon"></div>
          <div className="line line-dark"></div>
          <h1 className="skills__title">Мои навыки</h1>
          <h5 className="skills__subtitle">my favourite tools</h5>
          <div className="skills__list">
            <ProgressBar tool="HTML" progress="86%" />
            <ProgressBar tool="CSS(LESS/SCSS)" progress="76%" />
            <ProgressBar tool="JavaScript" progress="77%" />
            <ProgressBar tool="Redux" progress="53%" />
            <ProgressBar tool="React.js" progress="62%" />
            <ProgressBar tool="Gulp/Wepback" progress="30%" />
          </div>
        </div>
      </div>
    </section>
  )
}