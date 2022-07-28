import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import axios from "axios";
import "./Styles/TransactionForm.css"

const API = process.env.REACT_APP_API_URL;

export default function TransactionEditForm() {
  let { index } = useParams();
  
  // It returns a function that lets you navigate programmatically
  const navigate = useNavigate();

  const [transaction, setTransaction] = useState({
  });

  // UPDATE
  const updateTransaction = (txn) => {
    axios
      .put(`${API}/transactions/${index}`, txn)
      .then((res) => {
        setTransaction(res.data);
        navigate(`/transactions/${index}`);
      })
      .catch((c) => console.warn("catch", c));
  };

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((res) => {
        setTransaction(res.data);
      })
      .catch((e) => console.error(e));
  }, [index]);

  // HANDLERS
  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleSelectChange = () => {
    //setTxn({ ...txn, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const handleNumberChange = () => {
    //setTxn({ ...txn, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateTransaction(transaction);
  };

  return (
    <section className="container txn__form">
      <div className="wrapper">
      <h2>Edit Transaction</h2>  
      <form onSubmit={handleSubmit}>
        <div className="form__control">
          <label htmlFor="date">Date</label>
          {console.log(transaction.date)}
          <input
            id="date"
            type="date"
            value={(transaction.date)}
            onChange={handleTextChange}
            required
          />
        </div>
        <div className="form__control">
          <label htmlFor="name">Transaction</label>
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
        <div className="form__control button__group">
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