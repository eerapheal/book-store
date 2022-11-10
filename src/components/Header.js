import { Link } from 'react-router-dom';

const Header = () => (
    <div className="nav-links">
      <Link to="/">Books</Link>
      <Link to="/categories">Categories</Link>
    </div>
  );

export default Header;