import React from 'react';

import facebookVector from '../../assets/facebookVector.png';
import twitterVector from '../../assets/twitterVector.png';
import instagramVector from '../../assets/instagramVector.png';
import youtubeVector from '../../assets/youtubeVector.png';
import searchVector from '../../assets/searchVector.svg';

import './UtilityAndSearchBar.css';

const Menu = () => (
  <>
    <p><a href='#returnRoadmap'>Return Roadmap</a></p>
    <p><a href='#UMBCtogether'>#UMBCtogether</a></p>
    <p><a href='#myUMBC'>myUMBC</a></p>
  </>
)


const UtilityAndSearchBar = () => {
  return (
    <div className="utilitybar">
      <div className="utilitybar-links">
        <div className="utilitybar-links_socialMedia">
          <img src={ facebookVector } alt="vector" />
          <img src={ twitterVector } alt="vector" />
          <img src={ instagramVector } alt="vector" />
          <img src={ youtubeVector } alt="vector" />
        </div>
        <div className="utilitybar-links_container">
          <Menu />
        </div>
        <div>
          <div className="utility-searchbar">
            <input type="text" placeholder="Search UMBC" name="search"/>
            <button type="search"><img src={ searchVector } alt="searchVector"/></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UtilityAndSearchBar