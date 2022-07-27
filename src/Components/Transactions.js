// DEPENDENCIES
import { useState, useEffect } from "react";
import axios from "axios";

// MODELS 
import Transaction from "./Transaction";

const API = process.env.REACT_APP_API_URL;
//const API = "https://budget-app-restful-api.herokuapp.com";
//const API = "http://localhost:3003";

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

  return (
    <section>
      <h2>Bank Account Total: <span>{totalBalance}</span></h2> 
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