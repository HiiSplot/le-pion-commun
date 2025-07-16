import { useTranslation } from "react-i18next"
import { Link } from "./link"

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
        <Link src="/le-pion-commun/concept" text={t('header.concept')} className={linkClassName} />
      </li>
      <li className={liClassName}>
        <Link src="/le-pion-commun/menu" text={t('header.menu')}className={linkClassName} />
      </li>
      <li className={liClassName}>
        <Link src="/le-pion-commun/ludotheque" text={t('header.ludotheque')}className={linkClassName} />
      </li>
      <li className={liClassName}>
        <Link src="/le-pion-commun/reservation" text={t('header.reservation')} className={linkClassName} />
      </li>
      <li className={liClassName}>
        <Link src="/le-pion-commun/partenaires" text={t('header.partners')}className={linkClassName} />
      </li>
      <li className={liClassName}>
        <Link src="/le-pion-commun/contact" text={t('header.contact')}className={linkClassName} />
      </li>
    </ul>
  )
}