import { Link } from "react-router-dom";

const NavPage = () => {
  return (
    <div className="Nav-bar">
      <Link className="home-link" to="/">Home</Link> |
      <Link className="about-link" to="/about">About</Link> |
      <Link className="menu-link" to="/menu">Menu</Link>
    </div>
  );
}

export default NavPage;