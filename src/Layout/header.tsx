import React from "react";
import { BurgerMenu } from "./burger-menu";
import { LinksContainer } from "../Components/links-container";
import './header.css'

export const Header: React.FC = () => {
  const [isMenuOpened, setIsMenuOpened] = React.useState<boolean>(false)
  console.log(isMenuOpened);
  
  
  return (
    <div className="header">
      <button className="header__burger-menu" onClick={() => setIsMenuOpened(true)}>☰</button>
      <BurgerMenu isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
      <div className="header__logo">
          <a href="">
            <img  className="header__logo__img__desktop" src="./logo-header.png" alt="logo-header" />
          </a>
          <a href="">
            <img  className="header__logo__img__mobile" src="./logo-header.png" alt="logo-header" />
          </a>
      </div>
      <div className="header__links-container">
        <LinksContainer ulClassName="header__links-container__ul" linkClassName="header__links-container__ul__link"/>
      </div>
    </div>
    )
}