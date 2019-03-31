import React from 'react';
import Tilt from 'react-tilt';
import logo1 from './logo.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt br-100 h3 w3 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa2">
          <img style={{paddingTop: '5px'}} alt='logo' src={logo1}/>
          <h1 class="ma0 f5 f4-ns fw6 light-gray">FaceID</h1>
          <h2 class="center f6 white fw2 ttu tracked">phtessmer</h2>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;