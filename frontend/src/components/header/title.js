import React from 'react';
import HomeReset from './homeReset';
import './title.css';

const Title = ({gameState, gameEnded, resetOption, resetColors}) => {
  return (
    <div>
      {gameState? 
        <div>
          <HomeReset 
            gameEnded={gameEnded} 
            resetOption={resetOption} 
            resetColors={resetColors}
          />
          <p 
            className='mainTitle'
          >
            Let the Game Begin!
          </p>
          <p
            className='secondTitle'
          >
            Click as fast as you can the right colored circle!
          </p>
        </div>
        :
        <div>
          <p
            className='mainTitle'
          >  
            Color Clicker
          </p>
          <p
            className='secondTitle'
          >
            How fast can you click the right colored circle?
          </p>
        </div>
      }
    </div>
  );
}

export default Title;