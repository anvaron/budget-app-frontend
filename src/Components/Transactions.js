import { useState, useEffect } from "react";
import axios from "axios";

import Txn from "./Transaction";
//import "./Styles/Logs.css"

const API = process.env.REACT_APP_API_URL;

export default function Transactions() {
  const [txns, setTxns] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => setTxns(response.data))
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
          {txns.map((txn, index) => {
            return <Txn key={index} txn={txn} index={index} />;
          })}
        </tbody>
      </table>
    </section>
  );
}