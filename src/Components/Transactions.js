import { useState, useEffect } from "react";
import axios from "axios";

import Transaction from "./Transaction";
//import "./Styles/Logs.css"

const API = process.env.REACT_APP_API_URL;

export default function Transactions() {

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    console.log(API)
    axios
      .get(`${API}/transactions`)
      .then((res) => {
        setTransactions(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Transaction</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
        {console.log(transactions)}
          
        </tbody>
      </table>
    </section>
  );
}