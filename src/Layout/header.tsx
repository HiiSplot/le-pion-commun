import React from "react";
import { LinksContainer } from "../Components/links-container";
import './header.css'
import { Link, useLocation } from "react-router-dom";
import { BurgerMenu } from "./burger-menu";

export const Header: React.FC = () => {
  const [isMenuOpened, setIsMenuOpened] = React.useState<boolean>(false)
  
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  return (
    <div className="header">
      <img src="./Fumée/header-2.png" alt="smoke" className="header__img" />
      <button className="header__burger-menu" onClick={() => setIsMenuOpened(true)}>☰</button>
      <BurgerMenu isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
      <div className="header__logo">
          <Link to="/">
            <img  className="header__logo__img__desktop" src="./logo-header.png" alt="logo-header" />
          </Link>
          <Link to="/">
            <img  className="header__logo__img__mobile" src="./logo-header.png" alt="logo-header" />
          </Link>
      </div>
      <div className="header__links-container">
        <LinksContainer ulClassName="header__links-container__ul" linkClassName="header__links-container__ul__link"/>
      </div>
    </div>
    )
}