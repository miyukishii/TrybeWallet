import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrencies, saveWallet } from '../redux/actions/index';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Aimentação',
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

  handleClick = () => {
    const { saveWalletState } = this.props;
    saveWalletState(this.state);
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Aimentação',
    });
  }

  render() {
    const {
      value,
      description,
      currency,
      method,
      tag } = this.state;
    const { currencies } = this.props;
    // console.log(currencies);
    return (
      <form className="wallet-form">
        <label htmlFor="valueInput">
          Valor
          <input
            data-testid="value-input"
            type="text"
            id="valueInput"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="descriptionInput">
          Descrição
          <input
            data-testid="description-input"
            type="text"
            id="descriptionInput"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currencyInput">
          Moeda
          <select
            data-testid="currency-input"
            id="currencyInput"
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
          >
            {
              currencies.map((coin) => (
                <option value={ coin } key={ coin }>{coin}</option>
              ))
            }
          </select>
        </label>
        <label htmlFor="methodInput">
          Método de pagamento
          <select
            data-testid="method-input"
            id="methodInput"
            name="method"
            value={ method }
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
            name="tag"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          id="add-expense"
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (store) => ({
  currencies: store.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getArrayCurrencies: () => dispatch(getCurrencies()),
  saveWalletState: (object) => dispatch(saveWallet(object)),
});

WalletForm.propTypes = {
  getArrayCurrencies: PropTypes.func.isRequired,
  saveWalletState: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
