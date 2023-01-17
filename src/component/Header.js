import SerchBarComponent from './SearchBar';
import {useState} from 'react'

const Title = () => (
    <a className="resturant-title" href="/">
      <h2 >EatSome24</h2>
    </a>
)

const HeaderComponent = ({handleClick}) => {
  const [searchInputText, setSearchInputtext] = useState() //# TO CREATE THE STATE VARIBALE WITH DEFAULT VALUE 
  const handleChange = e => {
    setSearchInputtext(e.target.value);
    handleClick(e);
  };
 
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
                    </ul>
                </div>
             </div>
            
            </div>
        </header>
       
       
    )
};

export default HeaderComponent;