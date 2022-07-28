import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import coin from '../Images/coin.png';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <header className="pages-header">
        <div className="app-logo">
          <img src={ coin } alt="coin" id="coin-image-header" />
          <h1 id="app-name-header">Trybe Wallet</h1>
        </div>
        <div className="header-infos">
          <p data-testid="email-field">{ email }</p>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (store) => ({
  email: store.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
