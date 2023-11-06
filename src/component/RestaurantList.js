import RestaurantCardComponent from "./RestaurantCard";
import { SWIGGY_URL } from "../utils/constnant";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import axios from "axios";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import mockData from './data/mock.json';
//! Instead of passing index wise data we can use FOR loop but in FUNCTINAL programing we can use used MAP not an LOOP
//! <ResturantCard {...RESTURANT_ARRAY[0].data} />
//! <ResturantCard {...RESTURANT_ARRAY[1].data}/>
//! <ResturantCard {...RESTURANT_ARRAY[2].data}/> */

export default RestaurantListComponent = (props) => {
  const [listOfAllRestaurants, setListOfAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [resData, setResData] = useState(null);
  const onlineStatus = useOnlineStatus();
  //* As in when page load called the data and fill the page
  //% Load Api: 1. called the API              | 2. Render the page
  //%           |   300 ms take to get api     |  500 ms take to render = 800ms take
  //* Render:   1. Render the intial page      | 2. Then called the API | 3. Update the UI

  //% We can passed another funct as param to the useEfefct it will just callback function
  //% empty dependency array called => once after render
  //% dep array [serachtext] => once after initial render + everytime after render (serach text change)
  //  //! It will called on every render (on props and state chnage) but it is not and good idea so passed the depedency array to iy;
  //* [] Dependecy array passed as empty but still it will called so we will called after chnaging the serch text [props?.serachText]
  useEffect(() => {
    getResturantApiResponse();
  }, []);

  const getResturantApiResponse = async () => {
    try {
      try {
        await axios.get(`${SWIGGY_URL}`).then((response) => {
          const json = response;
          setListOfAllRestaurants(
            json?.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          );
          setFilteredRestaurants(
            json?.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          );
          setResData(json?.data);
        });
      } catch (error) {
        console.error("Error fetching JSON:", error);
      }
    } catch (error) {
      console.error("Error fetching JSON:", error);
    }
  };

  //! Why we creare 2 state varibale one for allResturand and serachResturan because if first time u serch athen it will return you 2 item but
  //! if serch again then that time you resturant list 2 item so difintly it will not going to return you result
  //! so instead modify allResturan state will modify the serch resurant state and while serching always serch from the all Resturan state
  useEffect(() => {
    const filteredItems = props?.serachText
      ? listOfAllRestaurants.filter((restaurant) =>
          restaurant.info.name
            .toLowerCase()
            .includes(props.serachText.toLowerCase())
        )
      : listOfAllRestaurants;
    setFilteredRestaurants(filteredItems);
  }, [props?.serachText]);

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );
  //! eraly return
  if (!listOfAllRestaurants) return null;
  return listOfAllRestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div
        style={{
          marginLeft: "calc(10% + 36px)",
          marginRight: "calc(10% + 36px)",
        }}
      >
        <div className="">
          <div className="block">
            <h2>Top restaurant chains in Bangalore</h2>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-3 mx-4 my-8 items-start list-none p-0">
          {filteredRestaurants?.map((restaurant) => {
            return (
              <Link
                key={restaurant.info.id}
                to={"/restaurant-details/" + restaurant.info.id}
              >
                <RestaurantCardComponent {...restaurant.info} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
