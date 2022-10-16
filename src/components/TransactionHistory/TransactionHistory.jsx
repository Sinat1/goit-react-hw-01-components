import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
import TransactionRow from "components/TransactionRows/TransactionRows";

function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.tableHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
              {items.map(item => (
                  <TransactionRow
                      key={item.id}
                      type={item.type}
                      amount={item.amount}
                      currency={item.currency}
                  />
        ))}
      </tbody>
    </table>
  );
}


export default TransactionHistory;