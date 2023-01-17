  
import ResturantCardComponent from "./ResturantCard"
import {RESTURANT_ARRAY} from '../constnant'
import {useEffect, useState } from "react";
import Shimmer from "./Shimmer";
//! Instead of passing index wise data we can use FOR loop but in FUNCTINAL programing we can use used MAP not an LOOP
//! <ResturantCard {...RESTURANT_ARRAY[0].data} />
//! <ResturantCard {...RESTURANT_ARRAY[1].data}/>
//! <ResturantCard {...RESTURANT_ARRAY[2].data}/> */

export default ResturantListComponent = (props) => {


    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    //* As in when page load called the data and fill the page

    //% Load Api: 1. called the API              | 2. Render the page
    //%           |   300 ms take to get api     |  500 ms take to render = 800ms take

    //* Render:   1. Render the intial page      | 2. Then called the API | 3. Update the UI

    //~* We can passed another funct as param to the useEfefct it will just callback function

    //% empty dependency array called => once after render
    //% dep array [serachtext] => once after initial render + everytime after render (serach text change)
     useEffect (() =>{
        //! It will called on every render (on props and state chnage) but it is not and good idea so passed the depedency array to iy;
        //* [] Dependecy array passed as empty but still it will called so we will called after chnaging the serch text
        //* [props?.serachText]
        console.log("Now it only called on my serach text change");
        getResturantApiResponse()
     }, [])

     async function getResturantApiResponse(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    useEffect (() =>{
        const filteredItems = props?.serachText ? allRestaurants.filter(restaurant => (restaurant.data.name).toLowerCase().includes(props.serachText.toLowerCase())) : allRestaurants
        setFilteredRestaurants(filteredItems);
    }, [props?.serachText])
   
    //! eraly return
    if(!allRestaurants) return null;
    //if(filteredRestaurants?.length == 0) return <h1>Resturant Not found </h1>
    return allRestaurants?.length == 0 ? (<Shimmer />) : (
        <>
            <div className='resturant-container'>
                {
                    filteredRestaurants?.map(restaurant => {
                        return <ResturantCardComponent key={restaurant.data.id} {...restaurant.data} />
                    })
                }
            </div>
        </>
        
    );
}