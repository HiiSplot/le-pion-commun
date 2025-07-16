import { useTranslation } from 'react-i18next';
import './footer.css'
import { Link } from '../Components/link';

export const Footer: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div className="footer">
      <div className='footer-container'>
        <div className='footer__links-container'>
          <div className='footer__links-container__title'>à propos</div>
          <ul className="footer__links-container__ul">
            <li>
              <Link src="/le-pion-commun/concept" text={t('header.concept')} className="footer__links-container__ul__link" />
            </li>
            <li>
              <Link src="/le-pion-commun/menu" text={t('header.menu')}className="footer__links-container__ul__link" />
            </li>
            <li>
              <Link src="/le-pion-commun/ludotheque" text={t('header.ludotheque')}className="footer__links-container__ul__link" />
            </li>
            <li>
              <Link src="/le-pion-commun/partenaires" text={t('header.partners')}className="footer__links-container__ul__link" />
            </li>
          </ul>
        </div>
        <div className='footer__links-container'>
          <div className='footer__links-container__title'>MENTIONS</div>
          <ul className="footer__links-container__ul">
            <li>
              <Link src="/le-pion-commun/contact" text={t('header.contact')}className="footer__links-container__ul__link" />
            </li>
            <li>
              <Link src="" text={t('footer.confidentiality')}className="footer__links-container__ul__link" />
            </li>
            <li>
              <Link src="" text={t('footer.cgu')}className="footer__links-container__ul__link" />
            </li>
          </ul>
        </div>
        <div>
          <div className='footer__links-container'>
            <div className='footer__links-container__title'>Réseaux</div>
              <ul className="footer__links-container__ul">
                <div className='footer__links-container__icons'>
                  <i className="fa-brands fa-facebook" style={{ fontSize: '22px'}}></i>
                  <i className="fa-brands fa-instagram" style={{ fontSize: '22px'}}></i>
                </div>
              </ul>
              <button
                onClick={() => window.location.href = "/le-pion-commun/reservation"}
                className='footer__links-container__button'
              >
                Réserver une table
              </button>
          </div>
        </div>
      </div>
      <div>
        <div className='footer__logo__container'>
          <img  className="footer__logo__container__img" src="./logo-red-long.png" alt="logo-footer" />
          <div>Le pion commun © - Tous droits réservés</div>
          <div>Site réalisé par <a href="https://www.linkedin.com/in/laura-bensimon/" target='_blank' className='footer__links-container__ul__link'>Laura Bensimon</a></div>
        </div>
      </div>
    </div>
    )
}