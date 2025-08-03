import { LinksContainer } from '../Components/links-container'
import './burger-menu.css'

type BurgerMenuPropos = {
  isMenuOpened: boolean
  setIsMenuOpened: React.Dispatch<React.SetStateAction<boolean>>
}

export const BurgerMenu: React.FC<BurgerMenuPropos> = ({ isMenuOpened, setIsMenuOpened }) => {

  return (
    <div className={isMenuOpened ? 'overlay opened' : 'overlay hidden'}   onClick={() => {setIsMenuOpened(false)}}>
      <div className='burger-menu' onClick={(e) => e.stopPropagation()}>
        <div className='burger-menu__close' onClick={() => {setIsMenuOpened(false)}}>
          <i className="fa-solid fa-xmark" style={{ fontSize: '32px'}}></i>
        </div>
        <LinksContainer onClick={() => {setIsMenuOpened(false)}} ulClassName="burger-menu__links-container__ul" liClassName='burger-menu__links-container__ul__li' linkClassName="burger-menu__links-container__ul__link"/>
        <div className='burger-menu__logo'>
          <img className="burger-menu__logo__img__mobile" src="./logo-yellow-long.png" alt="logo-burger-menu" />
          <p className='burger-menu__logo__rights'>Tous droits réservés</p>
        </div>
      </div>
    </div>
  )
}