// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { WALLET_CURENCIES,
  WALLET_OBJECT,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  SAVE_EDITIONS } from '../actions/index';

const INITAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: undefined,
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
        id: state.expenses.length,
        ...action.payload,
        exchangeRates: action.exchangeRates }],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses.filter((expense) => expense.id !== action.payload)],
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      editor: true,
      idToEdit: action.payload,
    };
  case SAVE_EDITIONS:
    return {
      ...state,
      editor: false,
      expenses: [...state.expenses.map((expense) => {
        if (expense.id === state.idToEdit) {
          return {
            id: state.idToEdit,
            ...action.payload,
            exchangeRates: action.exchangeRates,
          };
        }
        return expense;
      })],
      idToEdit: undefined,
    };
  default:
    return state;
  }
};

export default walletReducer;
