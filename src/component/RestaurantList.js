  
import RestaurantCardComponent from "./RestaurantCard"
import {RESTURANT_ARRAY, IMG_CDN_URL, SWIGGY_URL} from '../utils/constnant'
import {useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {} from '../utils/constnant'
import axios from "axios";
import { Link } from "react-router-dom";
// import mockData from './data/mock.json';
//! Instead of passing index wise data we can use FOR loop but in FUNCTINAL programing we can use used MAP not an LOOP
//! <ResturantCard {...RESTURANT_ARRAY[0].data} />
//! <ResturantCard {...RESTURANT_ARRAY[1].data}/>
//! <ResturantCard {...RESTURANT_ARRAY[2].data}/> */

export default RestaurantListComponent = (props) => {


    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [resData, setResData] = useState(null)
    //* As in when page load called the data and fill the page

    //% Load Api: 1. called the API              | 2. Render the page
    //%           |   300 ms take to get api     |  500 ms take to render = 800ms take

    //* Render:   1. Render the intial page      | 2. Then called the API | 3. Update the UI

    //~* We can passed another funct as param to the useEfefct it will just callback function

    //% empty dependency array called => once after render
    //% dep array [serachtext] => once after initial render + everytime after render (serach text change)
    //  //! It will called on every render (on props and state chnage) but it is not and good idea so passed the depedency array to iy;
        //* [] Dependecy array passed as empty but still it will called so we will called after chnaging the serch text
        //* [props?.serachText]
     console.log("Now it only called on my serach text change");
     useEffect (() =>{
        getResturantApiResponse()
     }, [])

    const getResturantApiResponse = async() => {
        try {
            try {
                await axios.get(`${SWIGGY_URL}`).then((response) => {
                    const json =  response
                    setAllRestaurants(json?.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                    setFilteredRestaurants(json?.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                    setResData(json?.data)
                });
            } catch (error) {
                console.error('Error fetching JSON:', error);
            }
          //const resData =  await RESTURANT_ARRAY[0]
          } catch (error) {
            console.error('Error fetching JSON:', error);
          }
    }

   
    //! Why we creare 2 state varibale one for allResturand and serachResturan because if first time u serch athen it will return you 2 item but 
    //! if serch again then that time you resturant list 2 item so difintly it will not going to return you result 
    //! so instead modify allResturan state will modify the serch resurant state and while serching always serch from the all Resturan state
    useEffect (() =>{
        const filteredItems = props?.serachText ? allRestaurants.filter(restaurant => (restaurant.info.name).toLowerCase().includes(props.serachText.toLowerCase())) : allRestaurants
        setFilteredRestaurants(filteredItems);
    }, [props?.serachText])
   
    //! eraly return
    if(!allRestaurants) return null;
    // if(filteredRestaurants?.length == 0) return <h1>Resturant Not found </h1>
    return allRestaurants?.length == 0 ? (<Shimmer />) : (
        <>
            <div className='resturant-container'>
            <div className="resturant-card">
                    {
                        filteredRestaurants?.map(restaurant => {
                            return <Link key={restaurant.info.id} to={"/restaurant-details/"+restaurant.info.id}><RestaurantCardComponent  {...restaurant.info} /></Link>
                        })
                    }
            </div>
        </div>
            
        </>
        
    );
}