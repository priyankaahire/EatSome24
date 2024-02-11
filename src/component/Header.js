import { Link  } from "react-router-dom";
import { useContext, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSearch } from '../contexts/HomeContext';
import UserContext from "../contexts/UserContext";

const Title = () => (
  <a className="text-white" href="/">
    <h2>EatSome24</h2>
  </a>
);
const HeaderComponent = ({ onSearch }) => {
  const { searchText, updateSearchText } = useSearch(); //# TO CREATE THE STATE VARIBALE WITH DEFAULT VALUE
  
  const handleSearch = (e) => {
    // Perform any additional logic if needed
    updateSearchText(e.target.value);
  };
  const handleLinkClick = (path) => {
    updateSearchText('');
  };
  const [isLoggedIn, setIsLoggedIn] = useState("Login");
  //* Can not write statemnet like a = 10; console.log(a)
  //* You can write expression console.log() or ((a=10), conwol3.log(a))
  const onlineStatus = useOnlineStatus();
  //* we can use the context use react hook useContex
  const {loggedInUser} = useContext(UserContext)
  //! Dont use the <a></a>  <li><a href='/contact'>Contact</a></li> because once u click it will load the whole page
  //% But if I want to navigate without reload used "Link" component
  return (
    <header>
      <div className="flex h-60 relative mb-4 p-25 border-10 bg-repeat border-solid border-black text-white bg-origin-content justify-content-between bg-[url('https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png')]">
        <div className="">
          <Title />
        </div>
        <div className="w-1/2 flex items-center h-8 mt-9 mb-2 border border-solid rounded-lg">
          <div className="w-full border-r-0.5 h-full">
            <form action="/action_page.php">
              <input
                className="border-none outline-none mt-0 text-sm w-full text-white bg-transparent"
                key="search-input"
                value={searchText}
                type="text"
                placeholder="Search.."
                name="search"
                onChange={handleSearch}
                //% Whenever state varible update, react triggers a reconciliation cycle (rerender the component) But it only chnaged the value which is different that periovous
                //% because it always compared 2 virual dom (Privious and current one)
                //% But this comparision done by React Fiber
              />
            </form>
        </div>
        </div>
        <div className="">
          <div className="flex">
            <ul className="flex list-none">
              <li className="p-3">
                Online Status: {onlineStatus ?  "✅" : "🔴"}
              </li>
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
                <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
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
                {isLoggedIn} ({loggedInUser})
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
