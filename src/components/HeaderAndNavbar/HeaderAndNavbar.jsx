/* useState hook is using for toggle menu */
import React, {useState} from 'react';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import umbcLogo from '../../assets/logo.png';
import './HeaderAndNavbar.css';

const Menu = () => (
  <>
    <p><a href='#about'>about</a></p>
    <p><a href='#academics'>academics</a></p>
    <p><a href='#admissions'>admissions</a></p>
    <p><a href='#artsAndCrafts'>arts & Crafts</a></p>
    <p><a href='#athletics'>athletics</a></p>
    <p><a href='#research'>research</a></p>
    <p><a href='#supportUmbc'>support umbc</a></p>  
  </>
)

const HeaderAndNavbar = () => {
  
  const [toggleMenu, setToggleMenu] = useState(false); 
  
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={ umbcLogo } alt="logo" />
        </div>
        <div className="navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="navbar-menu">
          {toggleMenu
            ? <RiCloseLine color='#000' size={27} onClick={ () => setToggleMenu(false) } />
            : <RiMenuLine color='#000' size={27} onClick={ () => setToggleMenu(true) } />
          }
          {toggleMenu && (
            <div className="navbar-menu_container scale-up-center">
              <div className="navbar-menu_container-links">
                <Menu />
              </div>
            </div>
          )}
      </div>
    </div>
  )
}

export default HeaderAndNavbar