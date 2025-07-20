import type React from "react";
import './direction.css'

export const Direction: React.FC = () => {
  return (
    <div className="direction-container">
      <h1 className="direction-container__title">S'y rendre</h1>
      <p className="direction-container___text">Tram Ligne 2 arrêt 50 otages.<br />
      Tram ligne 3 arrêt Bretagne ou Jean Jaurès.</p>
      <p className="direction-container__text">Il y a également des parkings à proximité.</p>
    </div>
  )
}