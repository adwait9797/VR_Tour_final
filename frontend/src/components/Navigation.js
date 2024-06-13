import React from 'react';
import './Navigation.css';
import infoIcon from './assets/info_icon.svg';
import mapIcon from './assets/map_icon.svg';
import shareIcon from './assets/share_icon.svg';

const Navigation = ({ currentRoom }) => {
  return (
    <div className="navigation">
      <h2>{currentRoom}</h2>
      <div className="icons">
        <div className="icon-container">
          <img src={infoIcon} alt="Info" className="icon" />
        </div>
        <div className="icon-container">
          <img src={mapIcon} alt="Map" className="icon" />
        </div>
        <div className="icon-container">
          <img src={shareIcon} alt="Share" className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;