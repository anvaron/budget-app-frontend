import { Link } from "react-router-dom";

//import "./Styles/Navbar.css";

export default function Footer() {
  return (
    <header>
      <nav>
        <Link to="/transactions">Transactions</Link>
        <Link to="/transactions/new">New Transaction</Link>
      </nav>
    </header>
  );
}