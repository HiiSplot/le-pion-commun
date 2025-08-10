import type React from "react";
import './concept.css'
import { Link } from "react-router-dom";

export const Concept: React.FC = () => {
  return (
    <div className="concept__concept">
      <h1 className="concept__title">Notre concept</h1>
      <p className="concept__text">Le Pion Commun, c’est à la fois un bar, un café et un espace de partage autour du jeu de société. Un lieu accueillant dans la superbe rue coloré Léon Jamin. 
      Produits locaux et faits maison, salle privatisable, évènements c’est le lieu idéal pour venir jouer et profiter.</p>

      <div className="concept__smoke">
        <img src="./public/Fumée/concept.png" className="concept__smoke-image" alt="" />
      </div>

      <div className="concept__mobile-container">
        <p className="concept__text concept__big-font uppercase">C’est aussi …</p>
        <p className="concept__text">Une gamme de jeux de sociétés classiques, stratégiques, d’ambiances jusqu’aux plus complexes pour les experts. </p>
        <p className="concept__text">Un fonctionnement au forfait jeu à hauteur de 5€ par heure et par personne. L'idée est de permettre un accès complet aux jeux tout en garantissant la prospérité du lieu. C'est un fonctionnement déjà bien connu et nous vous faisons confiance pour « jouer le jeu » !</p>
        <p className="concept__text">Un nouveau repaire familial où enfants comme adultes pourront jouer ensemble ou séparément. En plus des propositions anniversaire ou événement à la carte, nous organiserons certains mercredis, des temps privilégiés pour les enfants dans un espace dédié avec une des gérantes du lieu. Atelier découverte de jeux, atelier création de jeux existants avec des matériaux de récupération (memory végétal, morpion en bois) atelier d’invention d’un jeu…</p>
      </div>

      <p className="concept__text concept__big-font align-center">Une question sur les jeux ? Notre équipe est disponible pour vous conseiller !</p>
      <div className="concept__button-container">
        <Link
          to="/contact"
          className='concept__button'
        >Nous contacter</Link>
      </div>
    </div>
  )
}