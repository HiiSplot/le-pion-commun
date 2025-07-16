import { useTranslation } from 'react-i18next';
import './footer.css'
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div className="footer">
      <div className='footer-container'>
        <div className='footer__links-container'>
          <div className='footer__links-container__title'>à propos</div>
          <ul className="footer__links-container__ul">
            <li>
              <Link to="/concept" className="footer__links-container__ul__link">{t('header.concept')}</Link>
            </li>
            <li>
              <Link to="menu" className="footer__links-container__ul__link">{t('header.menu')}</Link>
            </li>
            <li>
              <Link to="/ludotheque" className="footer__links-container__ul__link">{t('header.ludotheque')}</Link>
            </li>
            <li>
              <Link to="/partenaires" className="footer__links-container__ul__link">{t('header.partners')}</Link>
            </li>
          </ul>
        </div>
        <div className='footer__links-container'>
          <div className='footer__links-container__title'>MENTIONS</div>
          <ul className="footer__links-container__ul">
            <li>
              <Link to="/le-pion-commun/contact" className="footer__links-container__ul__link">{t('header.contact')}</Link>
            </li>
            <li>
              <Link to="" className="footer__links-container__ul__link">{t('footer.confidentiality')}</Link>
            </li>
            <li>
              <Link to="" className="footer__links-container__ul__link">{t('footer.cgu')}</Link>
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
                onClick={() => window.location.href = "/reservation"}
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