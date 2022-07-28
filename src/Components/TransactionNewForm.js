import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import "./Styles/TransactionForm.css"

const API = process.env.REACT_APP_API_URL;

export default function TransactionNewForm() {
  
  // It returns a function that lets you navigate programmatically
  const navigate = useNavigate();

  const [transaction, setTransaction] = useState({
    date: "",
    name: "",
    category: "",
    from: "",
    amount: 0,
  });

  // CREATE 
  const createTransaction = (txn) => {
    axios
      .post(`${API}/transactions`, txn)
      .then((res) => {
        navigate(`/transactions`);
      })
      .catch((c) => console.warn("catch", c));
  };

  // HANDLERS
  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleSelectChange = () => {
    //setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleNumberChange = () => {
    //setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createTransaction(transaction);
  };

  return (
    <section className="container">
      <div className="wrapper">
      <h2>Create Transaction</h2>  
      <form onSubmit={handleSubmit}>
        <div className="form__control">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            value={transaction.date}
            onChange={handleTextChange}
            required
          />
        </div>
        <div className="form__control">
          <label htmlFor="name">Transaction name</label>
          <input
            id="item_name"
            type="text"
            value={transaction.item_name}
            
            onChange={handleTextChange}
            placeholder="Name"
            required
          />
        </div>
        <div className="form__control">
          <label htmlFor="post">Category</label>
          <input
            id="category"
            type="text"
            name="category"
            value={transaction.category}
            onChange={handleTextChange}
          />
        </div>  
        <div className="form__control">
          <label htmlFor="from">From</label>
          <input
            id="from"
            type="text"
            value={transaction.from}
            onChange={handleTextChange}
          />
        </div>
        <div className="form__control">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            value={transaction.amount}
            onChange={handleTextChange}
          />
        </div>
        <div className="form__control">
        <input type="submit" />
          <Link to={`/transactions`}>
            <button>Back</button>
          </Link>
        </div>
      </form>
      </div>
    </section>
  );
}