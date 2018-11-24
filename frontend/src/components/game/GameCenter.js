import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import {changeColor} from './controllers/reducers';
import Game from './game.js';

class GameCenter extends Component {
  constructor(props) {
    super(props)
    this.rootReducer = combineReducers({changeColor})
    this.store = createStore(this.rootReducer)
  }

  render() {
    const {correctColor, incorrectColorOne, incorrectColorTwo, background, gameOption} = this.props; 

    return (
      <Provider store={this.store}>
        <Game 
          correctColor={correctColor}
          incorrectColorOne={incorrectColorOne}
          incorrectColorTwo={incorrectColorTwo}
          background={background}
          gameOption={gameOption}
        />
      </Provider>
    );
  }
}

export default GameCenter; 