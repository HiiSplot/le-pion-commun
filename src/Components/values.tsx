import type React from "react";
import './values.css'

export const Values: React.FC = () => {
    return (
    <div className="valeurs__valeurs">
      <h1 className="valeurs__title">Nos valeurs</h1>
      <p className="valeurs__text">Cela nous tient à cœur de créer un lieu inclusif, accessible et humain. Nous restons à votre écoute si vous avez des besoins particuliers.</p>
      <p className="valeurs__text">Nous souhaitons prioriser l’utilisation des produits locaux et régionaux. Une carte avec des mets faits maison. Pâtisseries, Pionnières ou Tartinables, venez découvrir nos créations.
      </p>
    </div>
    )
}