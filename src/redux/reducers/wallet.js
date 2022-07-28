// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { WALLET_CURENCIES } from '../actions/index';

const INITAL_STATE = {
  currencies: [],
};

const walletReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
  case WALLET_CURENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
  default:
    return state;
  }
};

export default walletReducer;
