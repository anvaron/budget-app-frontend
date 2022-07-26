import { Link } from "react-router-dom";

//import "./Styles/Navbar.css";

export default function NavBar() {
  return (
    <header>
      <h1><Link to="/">Budget App</Link></h1>
      <nav>
        <Link to="/transactions">Transactions</Link>
        <Link to="/transactions/new">New Transaction</Link>
      </nav>
    </header>
  );
}