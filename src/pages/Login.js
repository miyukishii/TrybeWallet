import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import coin from '../Images/coin.png';
import { loginForm } from '../redux/actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonDisabled: true,
      emailInput: '',
      passwordInput: '',
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    }, () => {
      const passwordLength = 6;
      // link do regex utilizado neste código https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
      const reg = /^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\.\w{2,3})+$/;
      const { emailInput, passwordInput } = this.state;
      if (passwordInput.length >= passwordLength
        && reg.test(emailInput)) {
        this.setState({
          buttonDisabled: false,
        });
      } else {
        this.setState({
          buttonDisabled: true,
        });
      }
    });
  };

  handleButton = () => {
    const { history, login } = this.props;
    const { emailInput } = this.state;
    login(emailInput);
    history.push('/carteira');
  }

  render() {
    const { emailInput, passwordInput, buttonDisabled } = this.state;
    return (
      <section className="login-section">
        <form className="login-form">
          <img src={ coin } alt="coin" id="coin-image" />
          <h1 id="app-name">Trybe Wallet</h1>
          <div className="inputs-login">
            <label htmlFor="emailInput">
              <input
                data-testid="email-input"
                placeholder="E-mail"
                type="email"
                id="emailInput"
                name="emailInput"
                value={ emailInput }
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="passwordInput">
              <input
                data-testid="password-input"
                placeholder="Password"
                type="password"
                id="passwordInput"
                name="passwordInput"
                value={ passwordInput }
                onChange={ this.handleChange }
              />
            </label>
            <button
              className="login-button"
              type="button"
              disabled={ buttonDisabled }
              onClick={ this.handleButton }
            >
              Entrar
            </button>
          </div>
        </form>
      </section>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (emailInput) => dispatch(loginForm(emailInput)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
