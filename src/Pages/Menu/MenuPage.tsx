import type React from "react";
import './menu-page.css'

export const MenuPage: React.FC = () => {
  return (
    <div className="menu-page">
      <div className="menu-page__container">
        <img src="./Menu/Carte-3.jpg" alt="alcool-menu" className="menu-page__menu" />
        <img src="./Menu/Carte-4.jpg" alt="food-menu" className="menu-page__menu" />
        <img src="./Menu/Carte-1.jpg" alt="soft-menu" className="menu-page__menu" />
        <img src="./Menu/Carte-2.jpg" alt="cocktails-menu" className="menu-page__menu" />
      </div>
    </div>
  );
}