import type React from "react";
import { Link } from "../Components/link";
import { useTranslation } from "react-i18next";
import './header.css'

export const Header: React.FC = () => {
  const { t } = useTranslation()

  console.log(t('header.concept'));
  
  return (
    <div className="header">
      <div className="header__logo">
          <a href="">
            <img  className="header__logo__img" src="/logo-header.png" alt="logo-header" />
          </a>
      </div>
      <div className="header__links-container">
        <ul className="header__links-container__ul">
          <li>
            <Link src="" text={t('header.concept')} className="header__links-container__ul__link" />
          </li>
          <li>
            <Link src="" text={t('header.menu')}className="header__links-container__ul__link" />
          </li>
          <li>
            <Link src="" text={t('header.ludotheque')}className="header__links-container__ul__link" />
          </li>
          <li>
            <Link src="" text={t('header.reservation')} className="header__links-container__ul__link" />
          </li>
          <li>
            <Link src="" text={t('header.partners')}className="header__links-container__ul__link" />
          </li>
          <li>
            <Link src="" text={t('header.contact')}className="header__links-container__ul__link" />
          </li>
        </ul>
      </div>
    </div>
    )
}