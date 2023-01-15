import styles from './transaction-history-item.module.css';
import PropTypes from 'prop-types';

const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <tr className={styles.table}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default TransactionHistoryItem;

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
