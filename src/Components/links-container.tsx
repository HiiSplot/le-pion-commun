import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

type LinksContainerPropos = {
  ulClassName: string
  liClassName?: string
  linkClassName: string
}

export const LinksContainer: React.FC<LinksContainerPropos> = ({ ulClassName, liClassName, linkClassName }) => {
  const { t } = useTranslation()
  return (
    <ul className={ulClassName}>
      <li className={liClassName}>
        <Link to="/concept" className={linkClassName}>{t('header.concept')}</Link>
      </li>
      <li className={liClassName}>
        <Link to="/menu" className={linkClassName}>{t('header.menu')}</Link>
      </li>
      <li className={liClassName}>
        <Link to="/ludotheque" className={linkClassName}>{t('header.ludotheque')}</Link>
      </li>
      <li className={liClassName}>
        <Link to="/reservation" className={linkClassName}>{t('header.reservation')}</Link>
      </li>
      <li className={liClassName}>
        <Link to="/partenaires" className={linkClassName}>{t('header.partners')}</Link>
      </li>
      <li className={liClassName}>
        <Link to="/contact" className={linkClassName}>{t('header.contact')}</Link>
      </li>
    </ul>
  )
}