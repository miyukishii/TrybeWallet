import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseItem from './ExpenseItem';

class Table extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <table className="table-wallet">
        <thead>
          <tr className="cells-table">
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            expenses.map((expense) => (
              <ExpenseItem
                key={ expense.id }
                expense={ expense }
              />
            ))
          }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (store) => ({
  expenses: store.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Table);
