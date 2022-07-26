import { useState, useEffect } from "react";
import axios from "axios";

import Transaction from "./Transaction";
//import "./Styles/Logs.css"

const API = process.env.REACT_APP_API_URL;

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => setTransactions(response.data))
      .catch((error) => console.error("catch", error));
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
          
        </tbody>
      </table>
    </section>
  );
}