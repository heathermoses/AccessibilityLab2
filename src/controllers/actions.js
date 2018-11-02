import {
  UPDATE_COLORS,
  SELECT_OPTION, 
  ACTIVATE_POPUP,
  START_GAME, 
  END_GAME
} from './constants.js';

export const changeColors = (colors) => ({
  type: UPDATE_COLORS,
  payload: colors
})

export const selectGameOption = (gameType) => ({
  type: SELECT_OPTION,
  payload: gameType
})

export const activatePopup = (popup) => ({
  type: ACTIVATE_POPUP,
  payload: popup
})

export const startGame = () => ({
  type: START_GAME
})

export const endGame = () => ({
  type: END_GAME
})
