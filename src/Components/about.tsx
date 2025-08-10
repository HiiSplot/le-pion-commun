import type React from "react";
import './about.css'

export const About: React.FC = () => {
  return (
    <div className="about__about">
      <h1 className="about__title">Qui sommes-nous ?</h1>
      <p className="about__text text-align-justify">Toutes les deux animatrices, nous nous sommes rencontrées dans le cadre associatif notamment à travers des enquêtes mystérieuses vécues par des enfants dans la ville de Nantes. 
      Très vite un projet commun née entre nous pour rassembler nos passions et centres d'intérêts ! Un lieu familial, centré sur le partage, avec pleins de jeux, où on mange bien et s'y sent bien.</p>
      <div className="responsive-padding"></div>
      <div className="about__team">
        <img className="about__team__photo-axelle" src="./Photos/Axelle.png" alt="Axelle" />
          <div className="about__smoke-1">
            <p className="about__text big-font text-align-left" style={{ marginBottom: '10px'}} >Axelle -  co-gérante</p>
            <p className="about__text text-align-center" style={{ marginTop: '0px'}} >Je suis arrivée à Nantes en 2019, j'ai travaillé dans l'hôtellerie et ensuite dans l'animation socioculturelle. Je fais aussi de l'improvisation théâtrale et je suis une touche à tout : maquillage, aquarelle, cyanotype, photo, ukulélé... Une grande amatrice de jeux de société depuis longtemps, principalement les jeux familiaux ou stratégiques.</p>
        </div>
      </div>
      <div className="about__padding"></div>
      <div className="about__team-reverse">
        <div className="about__smoke-2">
          <p className="about__text text-align-center big-font" style={{ marginBottom: '10px'}} >Chloé - co-gérante</p>
          <p className="about__text text-align-center" style={{ marginTop: '0px'}} >J'ai grandi à Nantes et y ai étudié la cuisine, le graphisme et l'animation. Pâtissière depuis 1 an et demi, je serais derrière les fourneaux du Pion Commun pour ravir vos papilles. J'ai aussi été embarquée dans l'improvisation théâtrale en 2021. J'adore découvrir de nouvelles mécaniques de jeux, les grands jeux ne me font pas peur du tout !</p>
        </div>
        <img className="about__team__photo-chloe" src="./Photos/Chloe.png" alt="Chloé" />
      </div>
    </div>
  )
}