import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrencies } from '../redux/actions/index';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      valueInput: '',
      descriptionInput: '',
      currencyInput: '',
      methodInput: '',
      tagInput: '',
    };
  }

  componentDidMount() {
    const { getArrayCurrencies } = this.props;
    getArrayCurrencies();
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  render() {
    const { valueInput,
      descriptionInput,
      currencyInput,
      methodInput,
      tagInput } = this.state;
    const { currencies } = this.props;
    console.log(currencies);
    return (
      <form className="wallet-form">
        <label htmlFor="valueInput">
          Valor
          <input
            data-testid="value-input"
            type="text"
            id="valueInput"
            name="valueInput"
            value={ valueInput }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="descriptionInput">
          Descrição
          <input
            data-testid="description-input"
            type="text"
            id="descriptionInput"
            name="descriptionInput"
            value={ descriptionInput }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currencyInput">
          Moeda
          <select
            data-testid="currency-input"
            id="currencyInput"
            name="currencyInput"
            value={ currencyInput }
            onChange={ this.handleChange }
          >
            {
              currencies.map((currency) => (
                <option value={ currency } key={ currency }>{currency}</option>
              ))
            }
          </select>
        </label>
        <label htmlFor="methodInput">
          Método de pagamento
          <select
            data-testid="method-input"
            id="methodInput"
            name="methodInput"
            value={ methodInput }
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tagInput">
          Categoria
          <select
            data-testid="tag-input"
            id="tagInput"
            name="tagInput"
            value={ tagInput }
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (store) => ({
  currencies: store.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getArrayCurrencies: () => dispatch(getCurrencies()),
});

WalletForm.propTypes = {
  getArrayCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
