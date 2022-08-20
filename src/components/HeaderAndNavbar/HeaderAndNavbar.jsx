/* useState hook is using for toggle menu */
import React, {useState} from 'react';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import umbcLogo from '../../assets/logo.png';
import './HeaderAndNavbar.css';

import facebookVector from '../../assets/facebookExpandVector.svg';
import twitterVector from '../../assets/twitterExpandVector.svg';
import instagramVector from '../../assets/instagramExpandVector.svg';
import youtubeVector from '../../assets/youtubeExpandVector.svg';


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

const getSocialMediaLinks=()=>{
  return (
    <div className="utilitybar-links_socialMedia">
          <img src={ facebookVector } alt="vector" />
          <img src={ twitterVector } alt="vector" />
          <img src={ instagramVector } alt="vector" />
          <img src={ youtubeVector } alt="vector" />
      </div>
  )
}

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
                {
                  getSocialMediaLinks()
                }
              </div>
            </div>
          )}
      </div>
    </div>
  )
}

export default HeaderAndNavbar