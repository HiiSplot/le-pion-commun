import { useTranslation } from 'react-i18next';
import './footer.css'
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div className="footer">
      <div className='footer-container'>
        <div className='footer__links-container'>
          <div className='footer__links-container__title'>Horaires</div>
          <ul className="footer__links-container__ul">
            <li>
              <p className="footer__links-container__ul__text">Lundi: 17h - 00h</p>
            </li>
            <li>
              <p className="footer__links-container__ul__text">Mardi: Fermé</p>
            </li>
            <li>
              <p className="footer__links-container__ul__text">Mercredi: 17h - 00h</p>
            </li>
            <li>
              <p className="footer__links-container__ul__text">Jeudi: 17h - 00h</p>
            </li>
            <li>
              <p className="footer__links-container__ul__text">Vendredi: 17h - 1h</p>
            </li>
            <li>
              <p className="footer__links-container__ul__text">Samedi: 14h - 1h</p>
            </li>
            <li>
              <p className="footer__links-container__ul__text">Dimanche: 14h - 21h</p>
            </li>
          </ul>
        </div>
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
              <Link to="https://www.myludo.fr/#!/profil/le-pion-commun-1993" target="_blank" className="footer__links-container__ul__link">{t('header.ludotheque')}</Link>
            </li>
          </ul>
        </div>
        <div className='footer__links-container'>
          <div className='footer__links-container__title'>MENTIONS</div>
          <ul className="footer__links-container__ul">
            <li>
              <Link to="/contact" className="footer__links-container__ul__link">{t('header.contact')}</Link>
            </li>
            <li>
              <Link to="/concept" className="footer__links-container__ul__link">{t('header.about')}</Link>
            </li>
            <li>
              <Link to="/concept" className="footer__links-container__ul__link">{t('header.valeurs')}</Link>
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
                  <a href='https://www.facebook.com/lepioncommun/' className='footer__links-container__ul__link' target='_blank' rel='noopener noreferrer'><i className="fa-brands fa-facebook" style={{ fontSize: '22px'}}></i></a>
                  <a href='https://www.instagram.com/lepioncommun/' className='footer__links-container__ul__link' target='_blank' rel='noopener noreferrer'><i className="fa-brands fa-instagram" style={{ fontSize: '22px'}}></i></a>
                </div>
              </ul>
                <div className='footer__padding'></div>
                
                <div className='footer__links-container__title'>Téléphone</div>
                <p className='footer__links-container__ul__text'>02 59 16 44 79</p>
              <a
                href="https://reservation.laddition.com/booking/sur-un-plateau#/date"
                target="_blank"
                className='footer__links-container__button'
              >
                Réserver une table
              </a>
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