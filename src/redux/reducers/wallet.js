// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { WALLET_CURENCIES, WALLET_OBJECT } from '../actions/index';

const INITAL_STATE = {
  currencies: [],
  expenses: [],
  idToEdit: 0,
};

const walletReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
  case WALLET_CURENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
  case WALLET_OBJECT:
    return {
      ...state,
      expenses: [...state.expenses, {
        id: state.idToEdit,
        ...action.payload,
        exchangeRates: action.exchangeRates }],
      idToEdit: state.idToEdit + 1,
    };
  default:
    return state;
  }
};

export default walletReducer;
