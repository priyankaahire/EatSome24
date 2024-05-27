import RestaurantCardComponent from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../Hooks/useOnlineStatus";

export const RestaurantListComponent = ({filteredRestaurantData}) => {
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
     
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
