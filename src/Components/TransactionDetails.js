// DEPENDENCIES
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Styles/TransactionDetails.css";

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
    <section className="container ">
      <div className="wrapper txn__details">
      <h2>Transaction Overview</h2>
      <table className="txn__detail">
        <tbody>
          <tr>
            <td className="header">Date</td><td>{FormatDate(txn.date)}</td>
          </tr>
          <tr>
            <td className="header">Transaction</td><td>{txn.item_name}</td>
          </tr>
          <tr>
            <td className="header">Amount</td><td>{currency(txn.amount)}</td>
          </tr>
          <tr>
            <td className="header">Category</td><td>{txn.category}</td>
          </tr>
          <tr>
            <td className="header">From</td><td>{txn.from}</td>
          </tr>
        </tbody>
      </table>
      <div className="form__control button__group">
        <Link to="/transactions">
          <button>Back</button>
        </Link>
        <Link to={`/transactions/${index}/edit`}>
          <button>Edit</button>
        </Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
      </div>
    </section>
  );
}