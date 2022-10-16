import PropTypes from 'prop-types';
import css from './TransactionRows.module.css';

function TransactionRow({ type, amount, currency }) {
    return (
        <tr className={css.tableRow}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    );
}

TransactionRow.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
}

export default TransactionRow;