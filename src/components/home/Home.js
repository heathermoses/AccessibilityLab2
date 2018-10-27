import React from 'react';
import './homeStyle.css'
import Start from './start';
import Instructions from '../instructions/instructions';
import Dropdown from './dropdown';

const Home = ({correctColor, incorrectColorOne, incorrectColorTwo, startGame}) => {
  return (
    <div>
      <Start startGame = {startGame}/>
      <Dropdown />
      <Instructions 
        correctColor={correctColor} 
        incorrectColorOne={incorrectColorOne}
        incorrectColorTwo={incorrectColorTwo}
      />
    </div>
  );
}

export default Home;
