// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { WALLET_INPUT } from '../actions/index';

const INITAL_STATE = {};

const walletReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
  case WALLET_INPUT:
    return {
      ...state,
      chave: action.payload,
    };
  default:
    return state;
  }
};

export default walletReducer;
