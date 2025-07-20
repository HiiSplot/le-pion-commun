import type React from "react";
import './concept-page.css'

export const ConceptPage: React.FC = () => {
  return (
    <div className="concept-page">
      <h1>Le concept</h1>
      <p className="concept-page__text">Le Pion Commun, c’est à la fois un bar, un café et un espace de partage autour du jeu. Un lieu accueillant dans la superbe rue coloré Léon Jamin. Produits locaux et faits maison, salle privatisable, évènements c’est le lieu idéal pour venir jouer et profiter.</p>
      <p>Une question sur les jeux ? Notre équipe est disponible pour vous conseiller !</p>
    </div>
  );
}