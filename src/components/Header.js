import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import coin from '../Images/coin.png';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    const totalExpenses = expenses.reduce((sum, currExpense) => sum
        + parseFloat(currExpense.value)
        * parseFloat(currExpense.exchangeRates[currExpense.currency].ask), 0).toFixed(2);
    return (
      <header className="pages-header">
        <div className="app-logo">
          <img src={ coin } alt="coin" id="coin-image-header" />
          <h1 id="app-name-header">Trybe Wallet</h1>
        </div>
        <div className="header-infos">
          <p data-testid="email-field" id="email-login">{ email }</p>
          <p data-testid="total-field">{ totalExpenses }</p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (store) => ({
  email: store.user.email,
  expenses: store.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
