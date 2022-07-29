// Coloque aqui suas actions
export const LOGIN_INPUT = 'LOGIN_INPUT';
export const WALLET_CURENCIES = 'WALLET_CURRENCIES';
export const WALLET_OBJECT = 'WALLET_OBJECT';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const loginForm = (emailInput) => ({
  type: LOGIN_INPUT,
  email: emailInput,
});

export const deleteExpense = (payload) => ({
  type: DELETE_EXPENSE,
  payload,
});

export const getCurrencies = () => (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
  .then((response) => response.json())
  .then((data) => dispatch({
    type: WALLET_CURENCIES,
    currencies: Object.keys(data).filter((key) => key !== 'USDT') }));

export const saveWallet = (payload) => (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
  .then((response) => response.json())
  .then((data) => dispatch({
    type: WALLET_OBJECT,
    payload,
    exchangeRates: data }));
