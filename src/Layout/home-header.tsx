import React from "react";
import { LinksContainer } from "../Components/links-container";
import { BurgerMenu } from "./burger-menu";
import './home-header.css'

export const HomeHeader: React.FC = () => {
  const [isMenuOpened, setIsMenuOpened] = React.useState<boolean>(false)
  return (
    <>
    <img className="home-header__image" src="./public/Photos/IMG_9245.jpg"/>
    <header className="home-header">
      <button className="header__burger-menu" onClick={() => setIsMenuOpened(true)}>☰</button>
      <BurgerMenu isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
      <div className="home-header__logo">
          <a href="/le-pion-commun/">
            <img  className="home-header__logo__img__desktop" src="./logo-header.png" alt="logo-header" />
          </a>
          <a href="/le-pion-commun/">
            <img  className="header__logo__img__mobile" src="./logo-header.png" alt="logo-header" />
          </a>
      </div>
      <div className="home-header__links" >
        <LinksContainer ulClassName="header__links-container__ul" linkClassName="home-header__links-container__ul__link"/>
      </div>
    </header>
    </>
  );
}