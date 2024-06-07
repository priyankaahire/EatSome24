import RestaurantCardComponent from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../Hooks/useOnlineStatus";
import { Button } from "@mui/material";
import { ArrowDownwardOutlined, ArrowDownwardRounded } from "@mui/icons-material";

export const RestaurantListComponent = ({filteredRestaurantData, onShowMoreClick}) => {
  const onlineStatus = useOnlineStatus();
  const ResturantCardPromoted = withPromotedLabel(RestaurantCardComponent);
  //* As in when page load called the data and fill the page
  //% Load Api: 1. called the API              | 2. Render the page
  //%           |   300 ms take to get api     |  500 ms take to render = 800ms take
  //* Render:   1. Render the intial page      | 2. Then called the API | 3. Update the UI

  //% We can passed another funct as param to the useEfefct it will just callback function
  //% empty dependency array called => once after render
  //% dep array [serachtext] => once after initial render + everytime after render (serach text change)
  //  //! It will called on every render (on props and state chnage) but it is not and good idea so passed the depedency array to iy;
  //* [] Dependecy array passed as empty but still it will called so we will called after chnaging the serch text [props?.serachText]
  

  //! Why we creare 2 state varibale one for allResturand and serachResturan because if first time u serch athen it will return you 2 item but
  //! if serch again then that time you resturant list 2 item so difintly it will not going to return you result
  //! so instead modify allResturan state will modify the serch resurant state and while serching always serch from the all Resturan state
  

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );
  //! eraly return
  if (!filteredRestaurantData) return null;
  return (
    <>
            <div className="memu-title flex justify-between p-3">
              <h3 className="font-extrabold text-lg">
                Restaurants with online food delivery in Pune
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 my-2">
              {filteredRestaurantData?.map((restaurant) => {
                return (
                  <Link className="relative"
                    key={restaurant.info.id}
                    to={"/restaurant-details/" + restaurant.info.id}
                  >
                    {restaurant?.info?.id ? <ResturantCardPromoted resData={restaurant.info} /> : (
                      <RestaurantCardComponent {...restaurant.info} />
                    )}
                  </Link>
                );
              })}
           </div>
            <div className="showmore-btn flex justify-center w-full mx-auto my-8 max-w-[19.5rem]">
              <Button
                style={{
                  fontweight: 700,
                  fontSize: "16px",
                  textTransform: "capitalize",
                  width: "100%",
                  borderRadius: "12PX",
                  padding: "16px",
                  background: "#fff",
                  color: "black",
                }}
                variant="contained"
                endIcon={<ArrowDownwardRounded />}
                onClick={onShowMoreClick}
              >
                Show more
              </Button>
            </div>
    </>
    
  );
};

//Higher order Xonponent
//input RestaurentCard = > RestaurentCardPromtoted

export const withPromotedLabel = (RestaurantCard) => {
  //props basically received the props which we passed in resData and same data we have to passed to as props to card
  const RestaurentCardPromtoted = (props) => {
    return (
      <>
       <label className="absolute bg-black text-white rounded-sm text-xs capitalize p-1 h-auto">Promoted</label>
        <RestaurantCardComponent {...props?.resData} />
      </>
    )
  };
  return RestaurentCardPromtoted;
};

export default RestaurantListComponent
