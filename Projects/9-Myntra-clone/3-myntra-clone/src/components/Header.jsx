import { IoPersonSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Link to={"/"}>
        <div className="logo_container">
          <img
            className="myntra_home"
            src="../images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </div>
      </Link>
      <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">
          Studio <sup>New</sup>
        </a>
      </nav>
      <div className="search_bar">
        <span className="material-symbols-outlined search_icon">search</span>
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="action_bar">
        <div className="action_container">
          <IoPersonSharp />
          <span className="action_name">Profile</span>
        </div>

        <div className="action_container">
          <FaHeart />
          <span className="action_name">Wishlist</span>
        </div>

        <Link to={"/bag"}>
          <div className="action_container">
            <FaCartArrowDown />
            <span className="action_name">Bag</span>
            <span className="bag-item-count">0</span>
          </div>
        </Link>
      </div>
    </header>
  );
};
export default Header;
