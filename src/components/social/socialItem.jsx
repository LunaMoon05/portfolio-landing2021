/* eslint-disable jsx-a11y/anchor-is-valid */
export const SocialItem = ({ img, link, bgColor }) => {
  return (
    <div className="social__item">
      <a target="_blank" className="social__link" href={link} rel="noreferrer">
        <img src={img} alt="" />
      </a>
      <a target="_blank" className="social__link social__link-hover" style={{ backgroundColor: bgColor }} href={link} rel="noreferrer">
        <img src={img} alt="" />
      </a>
    </div>
  )
}