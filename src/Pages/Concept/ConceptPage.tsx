import type React from "react";
import './concept-page.css'

export const ConceptPage: React.FC = () => {
  return (
    <>
    {/* <div className="concept-page__image-container">
      <img className="concept-page__image" src="./Photos/IMG_7824.jpg"/>
      <div className="concept-page__overlay-noir"></div>
    </div> */}
    <div className="concept-page">
      <div className="concept-page__concept">
        <h1 className="concept-page__title">Le concept</h1>
        <p className="concept-page__text">Le Pion Commun, c’est à la fois un bar, un café et un espace de partage autour du jeu de société. Un lieu accueillant dans la superbe rue coloré Léon Jamin. 
        Produits locaux et faits maison, salle privatisable, évènements c’est le lieu idéal pour venir jouer et profiter.</p>
        <p>Une question sur les jeux ? Notre équipe est disponible pour vous conseiller !</p> 

        <p className="concept-page__text">C’est aussi …<br />
        <p className="concept-page__text">Une gamme de jeux de sociétés classiques, stratégiques, d’ambiances jusqu’aux plus complexes pour les experts. </p>
        <p className="concept-page__text">Un fonctionnement au forfait jeu à hauteur de 5€ par heure et par personne. L'idée est de permettre un accès complet aux jeux tout en garantissant la prospérité du lieu. C'est un fonctionnement déjà bien connu et nous vous faisons confiance pour « jouer le jeu » !</p>
        <p className="concept-page__text">Un nouveau repaire familial où enfants comme adultes pourront jouer ensemble ou séparément. En plus des propositions anniversaire ou événement à la carte, nous organiserons certains mercredis, des temps privilégiés pour les enfants dans un espace dédié avec une des gérantes du lieu. Atelier découverte de jeux, atelier création de jeux existants avec des matériaux de récupération (memory végétal, morpion en bois) atelier d’invention d’un jeu…</p>
        </p>
      </div>
      <div className="concept-page__about">
        <h1 className="concept-page__title">Qui sommes nous ?</h1>
        <p className="concept-page__text">Toutes les deux animatrices, nous nous sommes rencontrées dans le cadre associatif notamment à travers des enquêtes mystérieuses vécues par des enfants dans la ville de Nantes. 
        Très vite un projet commun née entre nous pour rassembler nos passions et centres d'intérêts ! Un lieu familial, centré sur le partage, avec pleins de jeux, où on mange bien et s'y sent bien.</p>
        <div className="concept-page__team">
          <img className="concept-page__team__photo" src="./Photos/Axelle.svg" alt="Axelle" />
          <p className="concept-page__text">Axelle, 27 ans,  co-gérante. 
          Je suis arrivée à Nantes en 2019, j'ai travaillé dans l'hôtellerie et ensuite dans l'animation socioculturelle. Je fais aussi de l'improvisation théâtrale et je suis une touche à tout : maquillage, aquarelle, cyanotype, photo, ukulélé... Une grande amatrice de jeux de société depuis longtemps, principalement les jeux familiaux ou stratégiques.</p>
        </div>
        <div className="concept-page__team-reverse">
          <p className="concept-page__text">Chloé, 30 ans, co-gérante. 
          J'ai grandi à Nantes et y ai étudié la cuisine, le graphisme et l'animation. Pâtissière depuis 1 an et demi, je serais derrière les fourneaux du Pion Commun pour ravir vos papilles. J'ai aussi été embarquée dans l'improvisation théâtrale en 2021. J'adore découvrir de nouvelles mécaniques de jeux, les grands jeux ne me font pas peur du tout !  
          </p>
          <img className="concept-page__team__photo" src="./Photos/Chloe.svg" alt="Chloé" />
        </div>
      </div>
      <div className="concept-page__valeurs">
        <h1 className="concept-page__title">Nos valeurs</h1>
        <p className="concept-page__text">Cela nous tient à cœur de créer un lieu inclusif, accessible et humain. Nous restons à votre écoute si vous avez des besoins particuliers.</p>
        <p className="concept-page__text">Nous souhaitons prioriser l’utilisation des produits locaux et régionaux. Une carte avec des mets faits maison. Pâtisseries, Pionnières ou Tartinables, venez découvrir nos créations.
        </p>
      </div>
    </div>
    </>
  );
}