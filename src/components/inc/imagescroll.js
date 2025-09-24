import React from 'react';
import './ScrollingLogos.css';
import skoda from '../images/skoda.png';
import renault from '../images/renault.png';
import ford from '../images/ford.png';
import nissan from '../images/nissan.png';
import tata from '../images/tata.png';
import toyota from '../images/Toyota.png';
import audi from '../images/audi.png';
import hyundai from '../images/hyundai.png';
import fiat from '../images/fiat.png';
import citroen from '../images/citroen.png';
import honda from '../images/honda.png';
import bmw from '../images/bmw.png';

const imagescroll = () => {
  return (
    <div className="scrolling-logos-container">
      <div className="scrolling-logos">
        <img src={bmw} alt="BMW" />
        <img src={skoda} alt="SKODA" />
        <img src={honda} alt="HONDA" />
        <img src={citroen} alt="CITREON" />
        <img src={fiat} alt="FIAT" />
        <img src={ford} alt="FORD" />
        <img src={nissan} alt="NISSAN" />
        <img src={tata} alt="TATA" />
        <img src={toyota} alt="TOYOTA" />
        <img src={audi} alt="AUDI" />
        <img src={hyundai} alt="HYUNDAI" />
        <img src={renault} alt="RENAULT" />
        {/* Repeat the images to create a continuous scrolling effect */}
        <img src={bmw} alt="BMW" />
        <img src={skoda} alt="SKODA" />
        <img src={honda} alt="HONDA" />
        <img src={citroen} alt="CITREON" />
        <img src={fiat} alt="FIAT" />
        <img src={ford} alt="FORD" />
        <img src={nissan} alt="NISSAN" />
        <img src={tata} alt="TATA" />
        <img src={toyota} alt="TOYOTA" />
        <img src={audi} alt="AUDI" />
        <img src={hyundai} alt="HYUNDAI" />
        <img src={renault} alt="RENAULT" />
      </div>
    </div>
  );
};

export default imagescroll;
