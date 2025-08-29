import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

type LinksContainerPropos = {
  ulClassName: string
  liClassName?: string
  linkClassName: string
  onClick?: () => void
}

export const LinksContainer: React.FC<LinksContainerPropos> = ({ ulClassName, liClassName, linkClassName, onClick }) => {
  const { t } = useTranslation()
  return (
    <ul className={ulClassName}>
      <li className={liClassName}>
        <Link onClick={onClick} to="/concept" className={linkClassName}>{t('header.concept')}</Link>
      </li>
      <li className={liClassName}>
        <Link onClick={onClick} to="/menu" className={linkClassName}>{t('header.menu')}</Link>
      </li>
      <li className={liClassName}>
        <Link onClick={onClick} to="https://www.myludo.fr/#!/profil/le-pion-commun-1993" target="_blank" className={linkClassName}>{t('header.ludotheque')}</Link>
      </li>
      <li className={liClassName}>
        <Link onClick={onClick} to="https://reservation.laddition.com/booking/lepioncommun" target="_blank" className={linkClassName}>{t('header.reservation')}</Link>
      </li>
      <li className={liClassName}>
        <Link onClick={onClick} to="/contact" className={linkClassName}>{t('header.contact')}</Link>
      </li>
    </ul>
  )
}