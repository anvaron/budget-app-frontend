// DEPENDENCIES
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


const API = process.env.REACT_APP_API_URL;
const moment = require("moment");

export default function TransactionDetails() {
  const { index } = useParams();
  const [txn, setTxn] = useState({});
  
  // It returns a function that lets you navigate programmatically
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((res) => setTxn(res.data))
      .catch((error) => console.error("catch", error));
  }, [index]);

  // DELETE
  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then(() => {
        navigate(`/transactions`);
      })
      .catch((e) => console.error(e));
  };

  // Date formating 
  const FormatDate = function(date){
    return moment(date).format('LL'); // Locale aware format: Month name, day of month, year
  };

  // Currency formating
  const currency = function(number){
    return new Intl.NumberFormat('en-US', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}).format(number);
  };

  return(
    <section>
      <ul>
        <li><span>Date:</span> {FormatDate(txn.date)}</li>
        <li><span>Transaction Name:</span> {txn.item_name}</li>
        <li><span>Amount:</span> {currency(txn.amount)}</li>
        <li><span>Category:</span> {txn.category}</li>
        <li><span>From:</span> {txn.from}</li>
      </ul>

      <Link to="/transactions">
        <button>Back</button>
      </Link>
      <Link to={`/transactions/${index}/edit`}>
        <button>Edit</button>
      </Link>

      <button onClick={handleDelete}>Delete</button>
    </section>
  );
}