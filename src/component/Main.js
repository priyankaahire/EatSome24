import { useState, useEffect, useRef } from "react";
import useResData from "../Hooks/useResListData";
import { SWIGGY_URL } from "./Common/constnant";
import RestaurantListComponent from "./Menu/RestaurantList";
import Shimmer from "./Menu/Shimmer";
import WhatInYourMind from "./Menu/WhatInYourFind";
import TopRestaurantCity from "./Menu/TopRestaurantCity";
const MainComponent = () => {
  const [allRestaurants, FilterRes, whatInYourMindItem, TopRestaurant] =
    useResData(SWIGGY_URL);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const [searchText, setSearchText] = useState(""); //# TO CREATE THE STATE VARIBALE WITH DEFAULT VALUE
  const [errorMessage, setErrorMessage] = useState("");
  const scrollContainerRef = useRef(null);

  const filterData = (searchText, data) => {
    const filResData = data.filter((resaturant) =>
      resaturant.info.name?.toLowerCase()?.includes(searchText?.toLowerCase())
    );
    return filResData;
  };
  const handleSearch = (serachText, restaurants) => {
    // Perform any additional logic if needed
    if (serachText !== "") {
      const filteredData = filterData(searchText, restaurants);
      setFilteredRestaurants(filteredData);
      setErrorMessage("");
      if (filteredData.length == 0) {
        setErrorMessage(
          `Sorry, we couldn't find any results for "${searchText}"`
        );
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };
  const handleShowMore = () => {
    console.log("On show More click")
    setFilteredRestaurants(allRestaurants);
  }

  useEffect(()=>{
   if(filteredRestaurants?.length > 0) {
      filteredRestaurants.slice
   }
  }, [])
  if (!allRestaurants) return null;
  return (
    <main className="main-container flex-1 overflow-y-auto mt-24 min-h-[87vh]">
      <div className="search-container flex justify-center item-center mb-5 mx-auto">
        <div className="w-1/2 flex items-center h-full border border-solid rounded-lg">
          <div className="w-full border-r-0.5 h-full">
            <form action="/action_page.php">
              <input
                className="border-none outline-none p-3 ßtext-sm w-full text-black bg-transparent"
                key="search-input"
                value={searchText}
                type="text"
                placeholder="Search.."
                name="search"
                onChange={(e) => {
                  setSearchText(e.target.value);
                  handleSearch(e.target.value, allRestaurants);
                }}
                //% Whenever state varible update, react triggers a reconciliation cycle (rerender the component) But it only chnaged the value which is different that periovous
                //% because it always compared 2 virual dom (Privious and current one)
                //% But this comparision done by React Fiber
              />
            </form>
          </div>
        </div>
      </div>
      {errorMessage && (
        <div className="error-container flex justify-center item-center mt-24 mb-5 mx-auto">
          {errorMessage}
        </div>
      )}
      {/* What in Your mind*/}
      {whatInYourMindItem &&  whatInYourMindItem.length > 0 &&
        <div className="menu-container flex justify-center items-center mt-4" >
         <div className="menu-content w-[85%] mt-8">
            <WhatInYourMind items={whatInYourMindItem}  />
         </div>
       </div>
      }

      {/* Top Resturant Menu */}
      {TopRestaurant?.length === 0 && TopRestaurant?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="topitem-container flex justify-center items-center mt-4">
           <div className="topitem-content w-[85%] mt-8 px-0 py-4">
           <TopRestaurantCity items={TopRestaurant} />
           </div>
        </div>
      )}

      {/* Restaurant List*/}
      {allRestaurants?.length === 0 && FilterRes?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-container flex justify-center items-center mt-4">
          <div
          className="px-0 py-4"
            style={{
              marginLeft: "calc(5% + 35px)",
              marginRight: "calc(5% + 35px)",
            }}
          >
            <RestaurantListComponent
              key={`restaurant-list-index`}
              onShowMoreClick={handleShowMore}
              filteredRestaurantData={
                filteredRestaurants === null
                  ? allRestaurants
                  : filteredRestaurants
              }
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default MainComponent;
