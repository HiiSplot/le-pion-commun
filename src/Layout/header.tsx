import React from "react";
import { BurgerMenu } from "./burger-menu";
import { LinksContainer } from "../Components/links-container";
import './header.css'
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  const [isMenuOpened, setIsMenuOpened] = React.useState<boolean>(false)
  
  return (
    <div className="header">
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