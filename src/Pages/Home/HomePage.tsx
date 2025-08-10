import type React from "react";
import './home-page.css'
import { Map } from "../../Components/map";
import { Direction } from "../../Components/direction";
import { Horaires } from "../../Components/horaires";

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <div className="home-page__image-container">
        <img className="home-page__image" src="./Photos/home-1.JPG"/>
        <img className="home-page__image" src="./Photos/home-2.PNG"/>
        <img className="home-page__image" src="./Photos/home-3.jpg"/>
        <img className="home-page__image" src="./Photos/home-4.JPG"/>
        <img className="home-page__image" src="./Photos/home-5.jpg"/>
        {/* <div className="home-page__overlay-noir"></div> */}
      </div>
      <div className="home-page__flex">
        <Map />
        <div className="home-page__column">
          <Direction />
          <Horaires />
        </div>
      </div>
    </div>
  );
}