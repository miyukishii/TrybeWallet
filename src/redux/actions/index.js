// Coloque aqui suas actions
export const LOGIN_INPUT = 'LOGIN_INPUT';
export const WALLET_INPUT = 'WALLET_INPUT';

export const loginForm = (emailInput) => ({
  type: LOGIN_INPUT,
  email: emailInput,
});

export const walletForm = (payload) => ({
  type: WALLET_INPUT,
  payload,
});
