import { Link } from 'react-router-dom';
// eslint-disable-next-line
import styles from './Header.modules.css';

const Header = () => (
  <div className="nav-links">
    <h1 className="logo">DeRalph</h1>
    <Link className="navLinks" to="/">Books</Link>
    <Link className="navLinks" to="/categories">Categories</Link>
  </div>
);

export default Header;
