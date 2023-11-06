import { Link } from "react-router-dom";
import SerchBarComponent from "./SearchBar";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Title = () => (
  <a className="text-white" href="/">
    <h2>EatSome24</h2>
  </a>
);
const HeaderComponent = ({ handleClick }) => {
  const [searchInputText, setSearchInputtext] = useState(); //# TO CREATE THE STATE VARIBALE WITH DEFAULT VALUE
  const handleChange = (e) => {
    setSearchInputtext(e.target.value);
    handleClick(e);
  };

  const [isLoggedIn, setIsLoggedIn] = useState("Login");
  //* Can not write statemnet like a = 10; console.log(a)
  //* You can write expression console.log() or ((a=10), conwol3.log(a))
  const onlineStatus = useOnlineStatus();
  //! Dont use the <a></a>  <li><a href='/contact'>Contact</a></li> because once u click it will load the whole page
  //% But if I want to navigate without reload used "Link" component
  return (
    <header>
      <div className="flex h-60 relative mb-4 p-25 border-10 bg-repeat border-solid border-black text-white bg-origin-content justify-content-between bg-[url('https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png')]">
        <div className="">
          <Title />
        </div>
        <div className="w-1/2 flex items-center h-8 mt-9 mb-2 border border-solid rounded-lg">
          <SerchBarComponent onSearchChange={handleChange} />
        </div>
        <div className="">
          <div className="flex">
            <ul className="flex list-none">
              <li className="p-3">
                Online Status {onlineStatus ? "green" : "red"}
              </li>
              <li className="p-3">
                <Link to="/">Home</Link>
              </li>
              <li className="p-3">
                <Link to="/grocery">Grocery</Link>
              </li>
              <li className="p-3">
                <Link to="/about">About Us</Link>
              </li>
              <li className="p-3">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="p-3">Cart</li>
              <li
                className="p-3 bg-none outline-none text-white border-none"
                onClick={() =>
                  isLoggedIn == "Login"
                    ? setIsLoggedIn("Logout")
                    : setIsLoggedIn("Login")
                }
              >
                {isLoggedIn}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
