// DEPENDENCIES
import { useState, useEffect } from "react";
import "./Styles/Transactions.css";

import axios from "axios";

// MODELS 
import Transaction from "./Transaction";

// API HEROKU'S URL
const API = process.env.REACT_APP_API_URL;

export default function Transactions() {
  //
  const [transactions, setTransactions] = useState([]);
  let [totalBalance, setTotalBalance] = useState(0);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((res) => {
        setTransactions(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // 
  useEffect(() => {
    setTotalBalance(
      // Getting actual balance
      transactions.reduce((acc, cur) => (acc += parseInt(cur.amount)), 0)
    );
  }, [transactions]);

  // Currency formating
  const formatCurrency = function(number){
    return new Intl.NumberFormat('en-US', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}).format(number);
  };

  const checkBalance = function(balance){
    return (balance > 1000) ? "positive" : "negative";
  }

  return (
    <section className="container txn__list">
      <div className="header__wrapper">
        <h2 className={checkBalance(totalBalance)}>Bank Account Total: 
          <span>{formatCurrency(totalBalance)}</span>
        </h2> 
      </div>
      
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Transaction</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => {
            return (
              <Transaction
                transaction={transaction}
                key={index}
                index={index}
              />
            );
          })}  
        </tbody>
      </table>
    </section>
  );
}