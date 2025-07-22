import type React from "react";
import './home-page.css'
import { Map } from "../../Components/map";
import { Direction } from "../../Components/direction";
import { Horaires } from "../../Components/horaires";

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
    <img className="home-page__image" src="./Photos/IMG_9245.jpg"/>
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