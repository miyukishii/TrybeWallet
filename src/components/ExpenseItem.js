import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpenseItem extends Component {
  render() {
    const { expense } = this.props;
    return (
      <tr>
        <td>{expense.description}</td>
        <td>{expense.tag}</td>
        <td>{expense.method}</td>
        <td>{(Number(expense.value)).toFixed(2)}</td>
        <td>{expense.exchangeRates[expense.currency].name}</td>
        <td>{(Number(expense.exchangeRates[expense.currency].ask)).toFixed(2)}</td>
        <td>
          {(expense.value
               * expense.exchangeRates[expense.currency].ask).toFixed(2)}

        </td>
        <td>Real</td>
        <td>botão</td>
      </tr>
    );
  }
}

ExpenseItem.propTypes = {
  expense: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ExpenseItem;
