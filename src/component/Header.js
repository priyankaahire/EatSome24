import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import useOnlineStatus from "../Hooks/useOnlineStatus";
import { useSelector } from "react-redux";
import useLoginStorage from "../Hooks/useLoginStorage";
import { Avatar } from "@mui/material";
import { ShoppingCartOutlined, StayPrimaryLandscape } from "@mui/icons-material";

const Title = () => (
  <Link className="text-black" href="/">
    <h2>EatSome24</h2>
  </Link>
);
const HeaderComponent = ({ onSearch }) => {
  const handleLinkClick = (path) => {
  };
  const [username] = useLoginStorage("username")
  const onlineStatus = useOnlineStatus();
  //* Sunscribing to the store using the selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(username)
  //% But if I want to navigate without reload used "Link" component

  return (
    <header>
      <div className="p-1 bg-white fixed top-0 w-full flex justify-between items-center shadow-lg z-50">
        <Title />
        <nav>
          <ul className="flex list-none">
            <li className="p-3">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
            <li className="p-3" onClick={handleLinkClick}>
              <Link className="hover:text-primary"  to="/">Home</Link>
            </li>
            <li className="p-3" onClick={handleLinkClick}>
              <Link className="hover:text-primary"  to="/about">About Us</Link>
            </li>
            <li className="p-3" onClick={handleLinkClick}>
              <Link to="/contact" className="hover:text-primary" onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
            <li className="p-3">
              <Link className="hover:text-primary" to="/cart"><ShoppingCartOutlined /> Cart {cartItems ? `(${cartItems})` : null}</Link>
            </li>
            <li className="p-3">
              {username ?   
              <Avatar className="text-white" sx={{ width: 40, height: 40, background: '#FFA500' }}>{username.charAt(0).charAt(0).toUpperCase() + username.charAt(0).slice(1)}</Avatar>
              :<Link className="hover:text-primary"  to='/login'>Sign In</Link> }
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComponent;
