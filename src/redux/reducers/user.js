// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOGIN_INPUT } from '../actions/index';

const INITAL_STATE = {
  email: 'Sign In',
};

const userReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_INPUT:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
};

export default userReducer;
