import React from "react";
import './home-header.css'
import { Link } from "react-router-dom";
import { BurgerMenu } from "../burger-menu";
import { LinksContainer } from "../../Components/links-container";

export const HomeHeader: React.FC = () => {
  const [isMenuOpened, setIsMenuOpened] = React.useState<boolean>(false)
  return (
    <>
    <header className="home-header">
      <button className="header__burger-menu" onClick={() => setIsMenuOpened(true)}>☰</button>
      <BurgerMenu isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
      <div className="home-header__logo">
          <Link to="/">
            <img  className="home-header__logo__img__desktop" src="./logo-header.png" alt="logo-header" />
          </Link>
          <Link to="/">
            <img  className="header__logo__img__mobile" src="./logo-header.png" alt="logo-header" />
          </Link>
      </div>
      <div className="home-header__links" >
        <LinksContainer ulClassName="header__links-container__ul" linkClassName="home-header__links-container__ul__link"/>
      </div>
    </header>
    </>
  );
}