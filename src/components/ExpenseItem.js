import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense, editExpense } from '../redux/actions/index';

class ExpenseItem extends Component {
  render() {
    const { expense, deleteItem, editItem } = this.props;
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
        <td className="buttons-table">
          <button
            data-testid="edit-btn"
            id="edit-btn"
            type="button"
            onClick={ () => {
              editItem(expense.id);
            } }
          >
            Editar
          </button>
          <button
            data-testid="delete-btn"
            id="delete-btn"
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
  editItem: (payload) => dispatch(editExpense(payload)),
});

ExpenseItem.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    description: PropTypes.string,
    exchangeRates: PropTypes.objectOf(PropTypes.object),
  }).isRequired,
  deleteItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ExpenseItem);
