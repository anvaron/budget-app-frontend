

// DEPENDENCIES
import { Link } from "react-router-dom";
const moment = require("moment");

export default function Transaction (props) {
  const { transaction, index } = props;
  
  // Date formating 
  const FormatDate = function(date){
    return moment(date).format('LL'); // Locale aware format: Month name, day of month, year
  };

  // Currency formating
  const FormatCurrency = function(number){
    return new Intl.NumberFormat('en-US', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}).format(number);
  };

  return (
    <tr className="item">
      <td>{FormatDate(transaction.date)}</td>
      <td>
        <Link to={`/transactions/${index}`}>{transaction.item_name} </Link>
      </td>
      <td>{FormatCurrency(transaction.amount)}</td>
    </tr>
  );
}