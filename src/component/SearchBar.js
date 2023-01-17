import { useState } from "react";
import { RESTURANT_ARRAY } from "../constnant";



function searchList() {
    return (
        <ResturantListComponent filteredPersons={filteredItems} />
    );
}

const SearchBar = ({onSearchChange}) => {
 
    //% REACT is one way data binding BUT if want to change value of input i.e allow to edit the input box value then need
    //% onChange and IT is taking a function which is basically CALLBACK function
    //% i.e Whenever input is change value 
  
    //~* IF YOU want to change the varibale which is like REACT varibale then need to mention the stateVariable
    //~* EVey component in REACT menation a state

    //% LOCAL varibale
    const serachTextLocal = "kfc";
    //% useState HOOK (HOOKS are othing normal function)
    const [searchInputText, setSearchtext] = useState() //# TO CREATE THE STATE VARIBALE WITH DEFAULT VALUE 
    const handleChange = e => {
        setSearchtext(e.target.value);
        onSearchChange(e)
    };
    //^ useState: It will return array

    //? Why we need state
    //* Ans: React don't know about the changing varibales React says I dont know wahtver you changed If you wanna track your changes 
    //* You need state to keep chages on the page


    //% USING useState componet onkeypress and onChnage it will redender the componnet because useStae watchin the changes 
    //% and re-render the component very fast

    //! I can't modify direct serachText by using
    //!  onChange={(e) => {serachText = e.target.value }}
    //! WE nned state function to modify it 

    return (
        <div className ="search-container">
            <form style={{"marginLeft": "15px"}} action="/action_page.php">
                <input className="serach-input" 
                id="" 
                value={searchInputText} 
                type="text"
                placeholder="Search.." 
                name="search"
                onChange={handleChange}
               />
            </form>
        </div>
    )

   
}

export default SearchBar