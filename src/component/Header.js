import { Link } from 'react-router-dom';
import SerchBarComponent from './SearchBar';
import { useState } from 'react'

const Title = () => (
  <a className="resturant-title" href="/">
    <h2 >EatSome24</h2>
  </a>
)
const HeaderComponent = ({ handleClick }) => {
  const [searchInputText, setSearchInputtext] = useState() //# TO CREATE THE STATE VARIBALE WITH DEFAULT VALUE 
  const handleChange = e => {
    setSearchInputtext(e.target.value);
    handleClick(e);
  };

  const [isLoggedIn, setIsLoggedIn] = useState("Login")
 //* Can not write statemnet like a = 10; console.log(a)
  //* You can write expression console.log() or ((a=10), conwol3.log(a))

  //! Dont use the <a></a>  <li><a href='/contact'>Contact</a></li> because once u click it will load the whole page
  //% But if I want to navigate without reload used "Link" component
  return (
    <header>
      <div className="header justify-content-between">
        <div className="row ">
          <Title />
        </div>
        <div className='topnav-serachbar'>
          <SerchBarComponent onSearchChange={handleChange} />
        </div>
        <div className="row mt-2">
          <div className='nav-items'>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About Us</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
              <li>Cart</li>
              <li className='login-btn'
                onClick={() => isLoggedIn == "Login"
                  ? setIsLoggedIn("Logout")
                  : setIsLoggedIn("Login")} >
                {isLoggedIn}
              </li>

                       

            </ul>
          </div>



        </div>

      </div>
    </header>


  )
};

export default HeaderComponent;