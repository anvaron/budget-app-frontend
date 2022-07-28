import { Link } from "react-router-dom";
import "./Styles/Navbar.css";

export default function NavBar() {
  return (
    <header className="">
      <h1 ><Link to="/" data-shadow='dang'>Budgetify</Link></h1>
      <nav>
        <Link to="/transactions">Transactions</Link>
        <Link to="/transactions/new">New Transaction</Link>
      </nav>
    </header>
  );
}