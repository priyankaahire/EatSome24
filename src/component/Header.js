import SerchBarComponent from './SearchBar';
import {useState} from 'react'

const Title = () => (
    <a className="resturant-title" href="/">
      <h2 >EatSome24</h2>
    </a>
)
const loggedInUser = () => {
  //API call to check autehticatio

  return true;
}
const HeaderComponent = ({handleClick}) => {
  const [searchInputText, setSearchInputtext] = useState() //# TO CREATE THE STATE VARIBALE WITH DEFAULT VALUE 
  const handleChange = e => {
    setSearchInputtext(e.target.value);
    handleClick(e);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false)
 
 
    return (
        <header>
            <div className="header justify-content-between">
             <div className="row ">
               <Title />
             </div>
             <div className='topnav-serachbar'>
               <SerchBarComponent onSearchChange = {handleChange}/>
             </div>
             <div className="row mt-2">
                <div className='nav-items'>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Cart</li>
                        <li className='login-btn'>
                        {
                  //* Can not write statemnet like a = 10; console.log(a)
                  //* You can write expression console.log() or ((a=10), conwol3.log(a))
                  isLoggedIn ? (
                  <button onClick={()=>setIsLoggedIn(false)}>Logout</button>
                  ) :  
                  (
                  <button onClick={() => setIsLoggedIn(true)}>Login</button>
                  )
                }
                        </li>
                    </ul>
                </div>
              
               

             </div>
            
            </div>
        </header>
       
       
    )
};

export default HeaderComponent;