import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import axios from "axios";
//import "./Styles/LogForm.css"

const API = process.env.REACT_APP_API_URL;

export default function TransactionNewForm() {
  let { index } = useParams();
  
  // It returns a function that lets you navigate programmatically
  const navigate = useNavigate();

  const [txn, setTxn] = useState({
    date: "",
    name: "",
    category: "",
    from: "",
    amount: 0,
  });

  // CREATE 
  const newTxn = (txn) => {
    axios
      .post(`${API}/transactions`, txn)
      .then((res) => {
        navigate(`/transactions`);
      })
      .catch((c) => console.warn("catch", c));
  };

  // HANDLERS
  const handleTextChange = (event) => {
    setTxn({ ...txn, [event.target.id]: event.target.value });
  };

  const handleSelectChange = () => {
    //setTxn({ ...txn, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const handleNumberChange = () => {
    //setTxn({ ...txn, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(txn)
    newTxn(txn);
    console.log(txn)
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="form__control">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            value={txn.date}
            
            onChange={handleTextChange}
            placeholder=""
            required
          />
        </div>
        <div className="form__control">
          <label htmlFor="name">Transaction name</label>
          <input
            id="item_name"
            type="text"
            value={txn.item_name}
            
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
            value={txn.category}
            onChange={handleTextChange}
          />
        </div>  
        <div className="form__control">
          <label htmlFor="from">From</label>
          <input
            id="from"
            type="text"
            value={txn.from}
            onChange={handleTextChange}
          />
        </div>
        <div className="form__control">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            value={txn.amount}
            onChange={handleTextChange}
          />
        </div>
        <input type="submit" />
        <Link to={`/transactions`}>
          <button>Back</button>
        </Link>
      </form>
    </section>
  );
}