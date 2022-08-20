import React, {useEffect,useRef} from 'react';

import facebookVector from '../../assets/facebookVector.png';
import twitterVector from '../../assets/twitterVector.png';
import instagramVector from '../../assets/instagramVector.png';
import youtubeVector from '../../assets/youtubeVector.png';
import searchVector from '../../assets/searchVector.svg';

import './UtilityAndSearchBar.css';

import useMediaQuery from "../../utils/useMediaQuery";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const Menu = () => (
  <>
    <p><a href='#returnRoadmap'>Return Roadmap</a></p>
    <p><a href='#UMBCtogether'>#UMBCtogether</a></p>
    <p><a href='#myUMBC'>myUMBC</a></p>
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

const items = [
  {
    id: 0,
    name: 'Cobol'
  },
  {
    id: 1,
    name: 'JavaScript'
  },
  {
    id: 2,
    name: 'Basic'
  },
  {
    id: 3,
    name: 'PHP'
  },
  {
    id: 4,
    name: 'Java'
  }
]
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <>
        {/* <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span> */}
        <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
      </>
    )
  }
  

const UtilityAndSearchBar = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const [showLinksBar, setShowLinksBar] = React.useState(true);
  const [showSearchBar, setShowSearchBar] = React.useState(isDesktop);


  const handleSearchIconClick = () => {
    console.log('handleSearchIconClick');
    if(!isDesktop){
      setShowLinksBar(!showLinksBar);
      setShowSearchBar(!showSearchBar);
    }
  }
  useEffect(() => {
    if(!isDesktop){
      setShowSearchBar(false);
      setShowLinksBar(true);
    }else{
      setShowSearchBar(true);
      setShowLinksBar(true);
    }
    
  }, [isDesktop]);
  
  return (
    <div className="utilitybar">
      {isDesktop && getSocialMediaLinks()}
      <div className="utilitybar-links">
        {showLinksBar && (
          <div className="utilitybar-links_container">
            <Menu />
          </div>
        )}
        {showSearchBar && (
          <div className="utilitybar-searchbar">
            <ReactSearchAutocomplete
              items={items}
              onSearch={handleOnSearch}
              onHover={handleOnHover}
              onSelect={handleOnSelect}
              onFocus={handleOnFocus}
              autoFocus
              formatResult={formatResult}
              placeholder={"Search UMBC"}
              showIcon={false}
              styling={{
                backgroundColor: "rgba(48, 48, 48, 0.71)",
                color: "#FFFFFF",
                border: "0px",
                borderRadius: "4px 0px 0px 4px",
                hoverBackgroundColor:"rgba(48, 48, 48, 0.5)"
              }}
            />
          </div>
        )}

        <button
          type="search"
          onClick={handleSearchIconClick}
          id="utilitybar-searchbar-icon"
          style={{
            width: "46px",
            height: "46px",
            backgroundImage: "url(" + searchVector + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: "0px 4px 4px 0px",
          }}
        />
      </div>
    </div>
  );
}

export default UtilityAndSearchBar