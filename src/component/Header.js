import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import useOnlineStatus from "../Hooks/useOnlineStatus";
import UserContext from "../contexts/UserContext";
import { useSelector } from "react-redux";

const Title = () => (
  <Link className="text-black" href="/">
    <h2>EatSome24</h2>
  </Link>
);
const HeaderComponent = ({ onSearch }) => {
  const handleLinkClick = (path) => {
    updateSearchText("");
  };
  const [isLoggedIn, setIsLoggedIn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  //* Sunscribing to the store using the selector
  const cartItems = useSelector((store) => store.cart.items);
  //% But if I want to navigate without reload used "Link" component
  return (
    <header>
      <div className="p-1 bg-white fixed top-0 w-full flex justify-between items-center shadow-lg z-50">
        <Title />
        <nav>
          <ul className="flex list-none">
            <li className="p-3">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
            <li className="p-3" onClick={handleLinkClick}>
              <Link to="/">Home</Link>
            </li>
            <li className="p-3" onClick={handleLinkClick}>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="p-3" onClick={handleLinkClick}>
              <Link to="/about">About Us</Link>
            </li>
            <li className="p-3">
              <Link to="/contact" onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
            <li className="p-3">
              <Link to="/cart">Cart {cartItems ? `(${cartItems})` : null}</Link>
            </li>
            <li
              className="p-3 bg-none outline-none text-white border-none"
              onClick={() =>
                isLoggedIn == "Login"
                  ? setIsLoggedIn("Logout")
                  : setIsLoggedIn("Login")
              }
            >
              {isLoggedIn} ({loggedInUser})
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComponent;
