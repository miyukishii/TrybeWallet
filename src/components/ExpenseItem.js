import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense } from '../redux/actions/index';

class ExpenseItem extends Component {
  render() {
    const { expense, deleteItem } = this.props;
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
        <td>
          <button
            data-testid="delete-btn"
            type="button"
            onClick={ () => {
              deleteItem(expense.id);
            } }
          >
            Excluir
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (expense) => dispatch(deleteExpense(expense)),
});

ExpenseItem.propTypes = {
  expense: PropTypes.objectOf(PropTypes.string).isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ExpenseItem);
