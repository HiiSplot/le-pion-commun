import type React from "react";
import './map.css'

export const Map: React.FC = () => {
  return (
    <div className="map-container">
      <h1 className="map-container__title">Où nous trouver ?</h1>
      <div className="map-width">
        <iframe className="map-width" height="400" style={{ border:'0' }} loading="lazy"  src="https://maps.google.com/maps?q=Le%20pion%20commun&output=embed&z=14"></iframe>
      </div>
      <div className="responsive-padding"></div>
    </div>
  )
}