import type React from "react";
import './horaires.css'

export const Horaires: React.FC = () => {
  return (
    <div>
    <h1 className="horaires-container__title">Nos horaires</h1>
    <p className="horaires-container__text">Lundi : 17h - 00h<br />
      Mardi : Fermé<br />
      Mercredi : 17h - 00h<br />
      Jeudi : 17h - 00h<br />
      Vendredi : 17h - 1h<br />
      Samedi : 14h : 1h<br />
      Dimanche : 14h - 21h
    </p>
    </div>
  )
}