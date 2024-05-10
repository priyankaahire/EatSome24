import { useState, useEffect } from "react";
import useResData from "../Hooks/useResListData";
import { SWIGGY_URL } from "../utils/constnant";
import RestaurantListComponent from "./RestaurantList";
import Shimmer from "./Shimmer";

const MainComponent = () => {
  const [allRestaurants, FilterRes] = useResData(SWIGGY_URL);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const [searchText, setSearchText] = useState(""); //# TO CREATE THE STATE VARIBALE WITH DEFAULT VALUE
  const [errorMessage, setErrorMessage] = useState("");

  console.log(allRestaurants);
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
  if (!allRestaurants) return null;
  return (
    <main className="main-container flex-1 overflow-y-auto mt-10">
      <div className="search-container flex justify-center item-center mt-24 mb-5 mx-auto">
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
      {allRestaurants?.length === 0 && FilterRes?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-container flex">
          <div
            style={{
              marginLeft: "calc(5% + 35px)",
              marginRight: "calc(5% + 35px)",
            }}
          >
            <RestaurantListComponent
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
