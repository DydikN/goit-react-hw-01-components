import styles from './transaction-history.module.css';
import TransactionHistoryItem from './TransactionHistoryItem/TransactionHistoryItem';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  const elements = items.map(item => (
    <TransactionHistoryItem
      key={item.id}
      type={item.type}
      amount={item.amount}
      currency={item.currency}
    />
  ));
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{elements}</tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.defaultProps = {
  items: [],
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
