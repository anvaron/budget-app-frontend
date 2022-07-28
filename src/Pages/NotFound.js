import { Link } from "react-router-dom";
import "./Styles/NotFound.css"

export default function NotFound() {
  return (
    <section className="not__found">
      <h1>404 Error</h1>
      <h2>Page not found</h2>
      <div className="form__control">
      <Link to={`/transactions`}>
        <button>Back to Transactions</button>
      </Link>
      </div>
    </section>
  );
}