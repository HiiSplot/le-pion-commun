import type React from "react";
import './map.css'

export const Map: React.FC = () => {
  return (
    <div className="map-container">
      <h1 className="map-container__title">Où nous trouver ?</h1>
      <div className="map-width">
        <iframe className="map-width" height="380" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=36%20Rue%20L%C3%A9on%20Jamin,%2044000%20Nantes+(Le%20pion%20commun)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
      </div>
  )
}